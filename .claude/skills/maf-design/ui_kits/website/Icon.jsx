// MAF UI Kit — shared icons (Lucide-style strokes)

const I = (path, props = {}) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75"
       strokeLinecap="round" strokeLinejoin="round" {...props}
       style={{ width: props.size || 20, height: props.size || 20, ...(props.style || {}) }}>
    {path}
  </svg>
);

const Icon = {
  Search: (p) => I(<><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></>, p),
  Menu: (p) => I(<><path d="M4 6h16M4 12h16M4 18h16"/></>, p),
  Close: (p) => I(<><path d="M18 6 6 18M6 6l12 12"/></>, p),
  Plane: (p) => I(<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>, p),
  Heart: (p) => I(<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>, p),
  Mail: (p) => I(<><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></>, p),
  Phone: (p) => I(<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z"/>, p),
  Pin: (p) => I(<><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>, p),
  Check: (p) => I(<path d="M20 6 9 17l-5-5"/>, p),
  Arrow: (p) => I(<path d="M5 12h14M12 5l7 7-7 7"/>, p),
  Globe: (p) => I(<><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/></>, p),
};

window.Icon = Icon;
