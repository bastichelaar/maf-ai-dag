#!/usr/bin/env python3
"""
Afbeeldingen genereren en bewerken via Google Gemini API voor Marketing Director brands.

## Routes

Genereren (geen --input):     Imagen 4  (imagen-4.0-generate-001)
                               Tekst → realistische afbeelding. Geen bestandsinput.
                               Vereist: GEMINI_API_KEY

Combineren (--combine):        Gemini    (gemini-2.5-pro-preview-06-05 of vergelijkbaar)
                               1+ afbeeldingen als input + prompt → compositie in huisstijl.
                               Gebruik voor: foto in brand kader plaatsen, beelden samenvoegen.
                               Vereist: GEMINI_API_KEY

Stijl wijzigen (--input):      Imagen 3 Capability  (imagen-3.0-capability-001)
                               Exact 1 AI-afbeelding als input + prompt → stijlwijziging.
                               Werkt niet goed op echte foto's met gezichten.
                               Vereist: GOOGLE_CLOUD_PROJECT + actieve ADC

Tekst/logo overlay:            Gebruik Pillow direct in je script (niet via deze CLI).

## Gebruik

    # Genereren — Imagen 4
    python scripts/generate_image.py \\
        --brand skyworkz \\
        --subject "cloud engineering team working autonomously" \\
        --format blog \\
        --output content/skyworkz/images/2026-03-21-generated.png

    # Combineren — Gemini (foto in brand kader)
    python scripts/generate_image.py \\
        --brand skyworkz \\
        --subject "place this photo in a dark navy tech frame with hexagon patterns" \\
        --format social \\
        --combine \\
        --input brands/skyworkz/assets/photos/business/DSCF0123.JPG \\
        --output content/skyworkz/images/2026-03-21-combined.png

    # Stijl wijzigen — Imagen 3 Capability (alleen AI-gegenereerde beelden)
    python scripts/generate_image.py \\
        --brand skyworkz \\
        --subject "transform this into a dramatic cinematic style with deep shadows" \\
        --format blog \\
        --input content/skyworkz/images/2026-03-21-generated.png \\
        --output content/skyworkz/images/2026-03-21-styled.png

## Vereisten

    Genereren & Combineren:  GEMINI_API_KEY
    Stijl wijzigen:          GOOGLE_CLOUD_PROJECT (+ optioneel GOOGLE_CLOUD_LOCATION, default: us-central1)
                             en actieve ADC: gcloud auth application-default login
"""

import argparse
import os
import re
import sys
from pathlib import Path


ASPECT_RATIOS = {
    "blog":   "16:9",
    "og":     "16:9",
    "social": "1:1",
    "banner": "4:1",
}

FORMAT_SIZES = {
    "blog":   "1200x630px",
    "og":     "1200x630px",
    "social": "1080x1080px",
    "banner": "1584x396px",
}


def load_base_prompt(brand: str) -> str:
    visual_style_path = Path(f"brands/{brand}/visual-style.md")
    if not visual_style_path.exists():
        print(f"Fout: brands/{brand}/visual-style.md niet gevonden.", file=sys.stderr)
        sys.exit(1)

    content = visual_style_path.read_text(encoding="utf-8")
    match = re.search(
        r"##\s+Nano Banana Basis Prompt\s*\n+```[^\n]*\n(.*?)```",
        content,
        re.DOTALL,
    )
    if not match:
        print(
            f"Fout: Geen 'Nano Banana Basis Prompt' blok gevonden in brands/{brand}/visual-style.md",
            file=sys.stderr,
        )
        sys.exit(1)

    return match.group(1).strip()


def build_prompt(base_prompt: str, subject: str) -> str:
    return base_prompt.replace("[ONDERWERP]", subject)


def generate_with_imagen4(prompt: str, aspect_ratio: str, output_path: Path) -> None:
    """Genereer een afbeelding via Imagen 4. Geen bestandsinput mogelijk."""
    from google import genai
    from google.genai import types

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Fout: GEMINI_API_KEY omgevingsvariabele niet ingesteld.", file=sys.stderr)
        sys.exit(1)

    client = genai.Client(api_key=api_key)

    print(f"Imagen 4 aanroepen (aspect ratio: {aspect_ratio})...")
    response = client.models.generate_images(
        model="imagen-4.0-generate-001",
        prompt=prompt,
        config=types.GenerateImagesConfig(
            number_of_images=1,
            aspect_ratio=aspect_ratio,
            safety_filter_level="block_low_and_above",
            person_generation="allow_adult",
        ),
    )

    if not response.generated_images:
        print("Fout: geen afbeelding gegenereerd door Imagen 4.", file=sys.stderr)
        sys.exit(1)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(response.generated_images[0].image.image_bytes)


def combine_with_gemini(prompt: str, input_paths: list, output_path: Path, gemini_model: str = "gemini-2.5-pro-preview-06-05") -> None:
    """Combineer afbeeldingen in een brand-gestileerde compositie via Gemini.

    Gebruik dit voor: echte foto's in een brand kader plaatsen, meerdere
    afbeeldingen samenvoegen. Ondersteunt meerdere input bestanden.
    Werkt wel goed op echte foto's (in tegenstelling tot Imagen 3 Capability).
    """
    import PIL.Image
    from google import genai
    from google.genai import types

    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Fout: GEMINI_API_KEY omgevingsvariabele niet ingesteld.", file=sys.stderr)
        sys.exit(1)

    for p in input_paths:
        if not Path(p).exists():
            print(f"Fout: input-afbeelding niet gevonden: {p}", file=sys.stderr)
            sys.exit(1)

    client = genai.Client(api_key=api_key)

    parts = [prompt]
    for p in input_paths:
        parts.append(PIL.Image.open(p))

    print(f"Gemini aanroepen voor afbeelding compositing (model: {gemini_model})...")
    print(f"Inputs: {', '.join(str(p) for p in input_paths)}")

    response = client.models.generate_content(
        model=gemini_model,
        contents=parts,
        config=types.GenerateContentConfig(
            response_modalities=["image", "text"],
        ),
    )

    for part in response.candidates[0].content.parts:
        if part.inline_data:
            output_path.parent.mkdir(parents=True, exist_ok=True)
            output_path.write_bytes(part.inline_data.data)
            return

    print("Fout: geen afbeelding in Gemini response.", file=sys.stderr)
    sys.exit(1)


def edit_style_with_imagen3(prompt: str, input_path: Path, output_path: Path) -> None:
    """Wijzig de stijl van een afbeelding via Imagen 3 Capability (Vertex AI).

    Accepteert exact 1 input afbeelding. Gebruik dit voor stijlwijzigingen,
    niet voor compositing met brand foto's (die bewaart het model niet).
    """
    from google import genai
    from google.genai import types

    project = os.environ.get("GOOGLE_CLOUD_PROJECT")
    location = os.environ.get("GOOGLE_CLOUD_LOCATION", "us-central1")

    if not project:
        print("Fout: GOOGLE_CLOUD_PROJECT omgevingsvariabele niet ingesteld.", file=sys.stderr)
        print("Stel in via: export GOOGLE_CLOUD_PROJECT=jouw-project-id", file=sys.stderr)
        sys.exit(1)

    if not input_path.exists():
        print(f"Fout: input-afbeelding niet gevonden: {input_path}", file=sys.stderr)
        sys.exit(1)

    mime_map = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp"}
    mime_type = mime_map.get(input_path.suffix.lower(), "image/png")

    client = genai.Client(vertexai=True, project=project, location=location)

    print(f"Imagen 3 Capability aanroepen via Vertex AI ({project}/{location})...")
    print(f"Input: {input_path}")
    response = client.models.edit_image(
        model="imagen-3.0-capability-001",
        prompt=prompt,
        reference_images=[
            types.RawReferenceImage(
                reference_id=1,
                reference_image=types.Image(
                    image_bytes=input_path.read_bytes(),
                    mime_type=mime_type,
                ),
            )
        ],
        config=types.EditImageConfig(
            number_of_images=1,
            safety_filter_level="block_low_and_above",
            person_generation="allow_adult",
        ),
    )

    if not response.generated_images:
        print("Fout: geen afbeelding gegenereerd door Imagen 3 Capability.", file=sys.stderr)
        sys.exit(1)

    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_bytes(response.generated_images[0].image.image_bytes)


def main() -> None:
    parser = argparse.ArgumentParser(
        description=(
            "Genereer afbeeldingen via Imagen 4 (geen input), "
            "of wijzig de stijl van een bestaande afbeelding via Imagen 3 Capability (1 input)."
        )
    )
    parser.add_argument("--brand",   required=True, help="Brand naam (bijv. skyworkz)")
    parser.add_argument("--subject", required=True, help="Onderwerp of stijlinstructie")
    parser.add_argument(
        "--format",
        required=True,
        choices=list(ASPECT_RATIOS.keys()),
        help="Afbeelding formaat: blog, og, social, banner",
    )
    parser.add_argument("--output", required=True, help="Uitvoerpad (.png)")
    parser.add_argument(
        "--input",
        default=None,
        nargs="+",
        metavar="IMAGE",
        help=(
            "Input afbeelding(en). Met --combine: 1+ bestanden voor Gemini compositing. "
            "Zonder --combine: exact 1 bestand voor Imagen 3 Capability stijlwijziging."
        ),
    )
    parser.add_argument(
        "--combine",
        action="store_true",
        help=(
            "Gebruik Gemini voor compositing (foto in brand kader plaatsen, beelden samenvoegen). "
            "Vereist --input. Werkt goed op echte foto's."
        ),
    )
    parser.add_argument(
        "--gemini-model",
        default="gemini-2.5-pro-preview-06-05",
        help="Gemini model voor --combine (default: gemini-2.5-pro-preview-06-05)",
    )
    parser.add_argument(
        "--prompt-only",
        action="store_true",
        help="Toon alleen de samengestelde prompt, genereer geen afbeelding",
    )
    args = parser.parse_args()

    base_prompt = load_base_prompt(args.brand)
    full_prompt = build_prompt(base_prompt, args.subject)

    if args.combine and not args.input:
        print("Fout: --combine vereist --input met minimaal 1 afbeelding.", file=sys.stderr)
        sys.exit(1)

    if args.prompt_only:
        print("\n=== Gegenereerde prompt ===")
        print(full_prompt)
        print(f"\nFormaat: {args.format} ({FORMAT_SIZES[args.format]}, aspect ratio: {ASPECT_RATIOS[args.format]})")
        if args.combine:
            print(f"Inputs: {', '.join(args.input)}")
            print(f"Model: Gemini compositing ({args.gemini_model})")
        elif args.input:
            print(f"Input: {args.input[0]}")
            print("Model: Imagen 3 Capability (stijlwijziging)")
        else:
            print("Model: Imagen 4 (generatie)")
        return

    output_path = Path(args.output)

    print(f"\nBrand:    {args.brand}")
    print(f"Formaat:  {args.format} ({FORMAT_SIZES[args.format]})")
    print(f"Output:   {output_path}")

    if args.combine:
        combine_with_gemini(full_prompt, [Path(p) for p in args.input], output_path, args.gemini_model)
    elif args.input:
        if len(args.input) > 1:
            print("Fout: Imagen 3 Capability accepteert exact 1 input. Gebruik --combine voor meerdere.", file=sys.stderr)
            sys.exit(1)
        edit_style_with_imagen3(full_prompt, Path(args.input[0]), output_path)
    else:
        generate_with_imagen4(full_prompt, ASPECT_RATIOS[args.format], output_path)

    print(f"\nAfbeelding opgeslagen: {output_path}")


if __name__ == "__main__":
    main()
