/* @ds-bundle: {"format":3,"namespace":"EmberStudioDesignSystem_64dbe4","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Chip","sourcePath":"components/display/Chip.jsx"},{"name":"ProgressBar","sourcePath":"components/display/ProgressBar.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"ea3abc40621a","components/core/Icon.jsx":"8d9aa8a5f198","components/display/Avatar.jsx":"0f664fa78c49","components/display/Badge.jsx":"b8776a9e5eaf","components/display/Card.jsx":"29ca21b05330","components/display/Chip.jsx":"0d029f6cf7cc","components/display/ProgressBar.jsx":"9d3ef9ebc995","components/display/Tabs.jsx":"547884c005b3","components/feedback/Dialog.jsx":"db428e6d5818","components/feedback/Toast.jsx":"d1b920b5ac8c","components/forms/Checkbox.jsx":"f48ce4d97b72","components/forms/Input.jsx":"4443a70326c1","components/forms/Select.jsx":"f4b63559594d","components/forms/Switch.jsx":"774a701cbd22","ui_kits/ember-studio-app/App.jsx":"81dea45940e9","ui_kits/ember-studio-app/BoardView.jsx":"93bbffcbbe8a","ui_kits/ember-studio-app/ProjectsView.jsx":"e16d009cf44c","ui_kits/ember-studio-app/Sidebar.jsx":"e2e31c5c02a3","ui_kits/ember-studio-app/Topbar.jsx":"8dc9db44851f","ui_kits/ember-studio-app/data.js":"e8196a3e90c5"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EmberStudioDesignSystem_64dbe4 = window.EmberStudioDesignSystem_64dbe4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ember Studio — Button
 * Terracotta primary CTA, stone-bordered secondary, ghost, and destructive variants.
 * One primary CTA per view. 8px radius, semibold, 150ms transition.
 */
function Button({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    small: {
      height: 32,
      padding: '0 12px',
      font: 'var(--text-small)'
    },
    medium: {
      height: 40,
      padding: '0 16px',
      font: 'var(--text-body)'
    },
    large: {
      height: 48,
      padding: '0 24px',
      font: 'var(--text-body)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--primary)',
      color: 'var(--text-on-primary)',
      border: '1px solid var(--primary)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-primary)',
      border: '1px solid transparent'
    },
    destructive: {
      background: 'var(--error)',
      color: 'var(--text-on-primary)',
      border: '1px solid var(--error)'
    }
  };
  const s = sizes[size] || sizes.medium;
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--primary-hover)',
      borderColor: 'var(--primary-hover)',
      boxShadow: 'var(--shadow-button-glow)'
    },
    secondary: {
      background: 'var(--surface-raised)'
    },
    ghost: {
      background: 'var(--surface-raised)'
    },
    destructive: {
      filter: 'brightness(0.92)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-body)',
      fontSize: s.font,
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1,
      borderRadius: 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast), filter var(--transition-fast)',
      whiteSpace: 'nowrap',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ember Studio — Icon
 * Curated subset of Lucide (lucide.dev, MIT) — 24×24, 2px stroke, round caps/joins.
 * Inherits color via currentColor. Use for all UI iconography.
 */
const PATHS = {
  plus: 'M5 12h14M12 5v14',
  check: 'M20 6 9 17l-5-5',
  x: 'M18 6 6 18M6 6l12 12',
  search: 'M21 21l-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z',
  'chevron-down': 'M6 9l6 6 6-6',
  'chevron-right': 'M9 6l6 6-6 6',
  'chevron-left': 'M15 6l-6 6 6 6',
  'arrow-right': 'M5 12h14M13 5l7 7-7 7',
  bell: 'M10.3 21a1.94 1.94 0 0 0 3.4 0M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9',
  settings: 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  folder: 'M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2z',
  'layout-grid': 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  'list': 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  inbox: 'M22 12h-6l-2 3h-4l-2-3H2 M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 6v6l4 2',
  user: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  'more-horizontal': 'M12 12h.01M19 12h.01M5 12h.01',
  'more-vertical': 'M12 12h.01M12 5h.01M12 19h.01',
  trash: 'M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M10 11v6M14 11v6',
  edit: 'M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z',
  filter: 'M22 3H2l8 9.46V19l4 2v-8.54L22 3z',
  flag: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z M4 22v-7',
  paperclip: 'M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48',
  'message-circle': 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z',
  'alert-circle': 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z M12 8v4M12 16h.01',
  'check-circle': 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4 12 14.01l-3-3',
  'log-out': 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4 M16 17l5-5-5-5 M21 12H9',
  home: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
  flame: 'M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  style = {},
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      ...style
    }
  }, rest), d.split(' M').map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: i === 0 ? seg : 'M' + seg
  })));
}

/** Names available in the curated set — useful for tooling/autocomplete. */
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PALETTE = ['#C2410C', '#D97706', '#16A34A', '#0EA5E9', '#7C3AED', '#DB2777', '#78716C'];
function colorFor(name = '') {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % PALETTE.length;
  return PALETTE[h];
}
function initials(name = '') {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] || '') + (parts[1]?.[0] || '')).toUpperCase() || '?';
}

/**
 * Ember Studio — Avatar
 * Circular. Image or auto-colored initials. 2px surface ring for stacking.
 */
function Avatar({
  name = '',
  src,
  size = 32,
  ring = false,
  style = {}
}) {
  const common = {
    width: size,
    height: size,
    borderRadius: 'var(--radius-full)',
    flexShrink: 0,
    border: ring ? '2px solid var(--surface)' : 'none',
    ...style
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: name,
      style: {
        ...common,
        objectFit: 'cover'
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...common,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: colorFor(name),
      color: '#fff',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: Math.round(size * 0.4),
      lineHeight: 1
    }
  }, initials(name));
}

/**
 * AvatarGroup — overlapping stack (-8px). Shows +N overflow.
 */
function AvatarGroup({
  users = [],
  max = 4,
  size = 32
}) {
  const shown = users.slice(0, max);
  const extra = users.length - shown.length;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }, shown.map((u, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i === 0 ? 0 : -8
    }
  }, /*#__PURE__*/React.createElement(Avatar, _extends({}, typeof u === 'string' ? {
    name: u
  } : u, {
    size: size,
    ring: true
  })))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -8,
      width: size,
      height: size,
      borderRadius: 'var(--radius-full)',
      border: '2px solid var(--surface)',
      background: 'var(--surface-raised)',
      color: 'var(--text-secondary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: Math.round(size * 0.36)
    }
  }, "+", extra));
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
/**
 * Ember Studio — Badge
 * Small status pill. Semantic tones map to status colors; `accent` is amber (new items).
 * `dot` renders a tiny amber notification dot only.
 */
const TONES = {
  neutral: {
    bg: 'var(--stone-200)',
    fg: 'var(--stone-700)'
  },
  primary: {
    bg: 'rgba(194,65,12,0.12)',
    fg: 'var(--primary)'
  },
  accent: {
    bg: 'rgba(245,158,11,0.16)',
    fg: 'var(--orange-600)'
  },
  success: {
    bg: 'rgba(22,163,74,0.12)',
    fg: 'var(--success)'
  },
  warning: {
    bg: 'rgba(217,119,6,0.14)',
    fg: 'var(--warning)'
  },
  error: {
    bg: 'rgba(220,38,38,0.12)',
    fg: 'var(--error)'
  }
};
function Badge({
  tone = 'neutral',
  dot = false,
  children,
  style = {}
}) {
  if (dot) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 8,
        height: 8,
        borderRadius: 'var(--radius-full)',
        background: 'var(--accent)',
        ...style
      }
    });
  }
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '2px 8px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.4,
      color: t.fg,
      background: t.bg,
      borderRadius: 'var(--radius-full)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ember Studio — Card
 * Warm surface, 1px border, 12px radius, 16px padding. Lifts on hover.
 * Optional colored left stripe (project color). Terracotta left border when selected.
 */
function Card({
  children,
  stripeColor,
  selected = false,
  hoverable = true,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const leftBorder = selected ? '2px solid var(--primary)' : stripeColor ? `4px solid ${stripeColor}` : '1px solid var(--border)';
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderLeft: leftBorder,
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-4)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast)',
      transform: hoverable && hover ? 'translateY(-2px)' : 'none',
      boxShadow: hoverable && hover ? 'var(--shadow-card-hover)' : 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Chip.jsx
try { (() => {
/**
 * Ember Studio — Chip
 * Pill-shaped filter/category tag. Stone by default; terracotta fill when active.
 * Optional onRemove renders an × ; clickable to toggle.
 */
function Chip({
  children,
  active = false,
  onClick,
  onRemove,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      padding: '6px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1,
      color: active ? 'var(--text-on-primary)' : 'var(--stone-700)',
      background: active ? 'var(--primary)' : hover && onClick ? 'var(--surface-raised)' : 'var(--stone-100)',
      border: '1px solid',
      borderColor: active ? 'var(--primary)' : 'var(--border)',
      borderRadius: 'var(--radius-full)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'background var(--transition-fast), color var(--transition-fast), border-color var(--transition-fast)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("svg", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/display/ProgressBar.jsx
try { (() => {
/**
 * Ember Studio — ProgressBar
 * 4px track, rounded-full, stone-200 track + terracotta fill. Animated 300ms.
 * Optional label + percentage shown above.
 */
function ProgressBar({
  value = 0,
  label,
  showPercent = false,
  color = 'var(--primary)',
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...style
    }
  }, (label || showPercent) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 'var(--space-2)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, label), showPercent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-primary)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 4,
      background: 'var(--stone-200)',
      borderRadius: 'var(--radius-full)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      background: color,
      borderRadius: 'var(--radius-full)',
      transition: 'width var(--transition-base)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
/**
 * Ember Studio — Tabs
 * Horizontal underline tabs. Inactive = stone text; active = terracotta + 2px underline.
 * Controlled via value/onChange, or uncontrolled with defaultValue.
 */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? tabs[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-6)',
      borderBottom: '1px solid var(--border)',
      ...style
    }
  }, tabs.map(t => {
    const isActive = t.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.value,
      onClick: () => select(t.value),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        background: 'transparent',
        border: 'none',
        padding: '0 0 12px',
        marginBottom: -1,
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-body)',
        fontWeight: isActive ? 'var(--weight-semibold)' : 'var(--weight-regular)',
        color: isActive ? 'var(--primary)' : 'var(--text-muted)',
        borderBottom: `2px solid ${isActive ? 'var(--primary)' : 'transparent'}`,
        cursor: 'pointer',
        transition: 'color var(--transition-fast)'
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--weight-semibold)',
        color: isActive ? 'var(--primary)' : 'var(--text-muted)',
        background: isActive ? 'rgba(194,65,12,0.12)' : 'var(--stone-200)',
        borderRadius: 'var(--radius-full)',
        padding: '1px 7px'
      }
    }, t.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Ember Studio — Dialog (modal)
 * Centered panel, 12px radius, large warm shadow, backdrop blur.
 * Optional title, body children, and footer actions.
 */
function Dialog({
  open = false,
  onClose,
  title,
  description,
  children,
  primaryAction,
  // { label, onClick, variant }
  secondaryAction,
  // { label, onClick }
  width = 480
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4)',
      background: 'rgba(28,25,23,0.35)',
      backdropFilter: 'blur(4px)',
      WebkitBackdropFilter: 'blur(4px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    role: "dialog",
    "aria-modal": "true",
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-modal)',
      padding: 'var(--space-6)'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-section)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex',
      padding: 4,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), description && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-body)',
      margin: 'var(--space-2) 0 0'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-4)'
    }
  }, children), (primaryAction || secondaryAction) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-6)'
    }
  }, secondaryAction && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: secondaryAction.onClick
  }, secondaryAction.label), primaryAction && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: primaryAction.variant || 'primary',
    onClick: primaryAction.onClick
  }, primaryAction.label))));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const TONES = {
  neutral: {
    icon: 'inbox',
    color: 'var(--text-primary)'
  },
  success: {
    icon: 'check-circle',
    color: 'var(--success)'
  },
  warning: {
    icon: 'alert-circle',
    color: 'var(--warning)'
  },
  error: {
    icon: 'alert-circle',
    color: 'var(--error)'
  }
};
const ICON_D = {
  'check-circle': ['M22 11.08V12a10 10 0 1 1-5.93-9.14', 'M22 4 12 14.01l-3-3'],
  'alert-circle': ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 8v4', 'M12 16h.01'],
  inbox: ['M22 12h-6l-2 3h-4l-2-3H2', 'M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z']
};

/**
 * Ember Studio — Toast
 * Compact notification card with leading status icon. Surface bg, soft popover shadow.
 */
function Toast({
  tone = 'neutral',
  title,
  message,
  onClose,
  style = {}
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 'var(--space-3)',
      minWidth: 280,
      maxWidth: 420,
      padding: 'var(--space-3) var(--space-4)',
      background: 'var(--surface)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-popover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: t.color,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flexShrink: 0,
      marginTop: 1
    }
  }, ICON_D[t.icon].map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-small)',
      color: 'var(--text-secondary)',
      marginTop: title ? 2 : 0
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Dismiss",
    style: {
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Ember Studio — Checkbox
 * Square with 4px radius, terracotta fill when checked, white check.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const cbId = id || (label ? `cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 18,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: cbId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange?.(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${checked ? 'var(--primary)' : 'var(--border)'}`,
      background: checked ? 'var(--primary)' : 'var(--surface)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--transition-fast), border-color var(--transition-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ember Studio — Input
 * 1px stone border, warm surface, 8px radius. Terracotta focus ring.
 * Optional label (14px semibold above) and error state.
 */
function Input({
  label,
  error,
  hint,
  iconLeft = null,
  id,
  style = {},
  containerStyle = {},
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--error)' : focus ? 'var(--primary)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      display: 'flex',
      color: 'var(--text-muted)',
      pointerEvents: 'none'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: e => {
      setFocus(true);
      rest.onFocus?.(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur?.(e);
    },
    style: {
      width: '100%',
      height: 40,
      padding: iconLeft ? '0 12px 0 38px' : '0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? `0 0 0 3px var(--ring-primary)` : 'none',
      transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--error)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ember Studio — Select
 * Native select styled to match Input. 8px radius, warm surface, terracotta focus.
 */
function Select({
  label,
  error,
  options = [],
  id,
  style = {},
  containerStyle = {},
  disabled = false,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const selectId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = error ? 'var(--error)' : focus ? 'var(--primary)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selectId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-small)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-primary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selectId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      height: 40,
      padding: '0 36px 0 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      background: 'var(--surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 'none',
      boxShadow: focus && !error ? `0 0 0 3px var(--ring-primary)` : 'none',
      transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
      appearance: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const text = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, text);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 12,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 9l6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Ember Studio — Switch
 * Pill toggle; terracotta track when on, sliding white knob. 150ms transition.
 */
function Switch({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  style = {}
}) {
  const swId = id || (label ? `sw-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body)',
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 40,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: swId,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange?.(e.target.checked, e),
    style: {
      position: 'absolute',
      opacity: 0,
      width: '100%',
      height: '100%',
      margin: 0,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 24,
      borderRadius: 'var(--radius-full)',
      background: checked ? 'var(--primary)' : 'var(--stone-300)',
      transition: 'background var(--transition-fast)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: 'var(--radius-full)',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(28,25,23,0.2)',
      transition: 'left var(--transition-fast)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ember-studio-app/App.jsx
try { (() => {
// Ember Studio — App shell. Ties together sidebar, topbar, views, dialog, toast.
(() => {
  const {
    Tabs,
    Dialog,
    Toast,
    Input,
    Select,
    Chip,
    Button,
    Icon
  } = window.EmberStudioDesignSystem_64dbe4;
  const {
    PROJECTS,
    TASKS,
    COLUMNS
  } = window.EmberData;
  const Sidebar = window.EmberSidebar;
  const Topbar = window.EmberTopbar;
  const ProjectsView = window.EmberProjectsView;
  const BoardView = window.EmberBoardView;
  function App() {
    const [view, setView] = React.useState('projects');
    const [selectedProject, setSelectedProject] = React.useState('p1');
    const [boardTab, setBoardTab] = React.useState('board');
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [doneSet, setDoneSet] = React.useState(() => new Set());
    const [toast, setToast] = React.useState(null);
    const [filter, setFilter] = React.useState('all');
    const toggleTask = id => {
      setDoneSet(prev => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          next.add(id);
          setToast({
            tone: 'success',
            title: 'Task completed',
            message: 'Nice work — moved to Done.'
          });
        }
        return next;
      });
    };
    React.useEffect(() => {
      if (!toast) return;
      const t = setTimeout(() => setToast(null), 3200);
      return () => clearTimeout(t);
    }, [toast]);
    const titles = {
      projects: {
        t: 'Projects',
        s: '4 active · 2 due this week'
      },
      tasks: {
        t: 'My tasks',
        s: '6 assigned to you'
      },
      calendar: {
        t: 'Calendar',
        s: 'September 2025'
      },
      inbox: {
        t: 'Inbox',
        s: '3 unread'
      }
    };
    const head = titles[view] || titles.projects;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        background: 'var(--bg-page)'
      }
    }, /*#__PURE__*/React.createElement(Sidebar, {
      view: view,
      setView: setView,
      projects: PROJECTS
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Topbar, {
      title: head.t,
      subtitle: head.s,
      onNew: view === 'projects' ? () => setDialogOpen(true) : null
    }), view === 'projects' && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '20px 24px 0',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8
      }
    }, ['all', 'active', 'due soon', 'archived'].map(f => /*#__PURE__*/React.createElement(Chip, {
      key: f,
      active: filter === f,
      onClick: () => setFilter(f)
    }, f[0].toUpperCase() + f.slice(1)))), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("button", {
      style: iconBtn
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "filter",
      size: 16
    })), /*#__PURE__*/React.createElement("button", {
      style: iconBtn
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "layout-grid",
      size: 16
    }))), /*#__PURE__*/React.createElement(ProjectsView, {
      projects: PROJECTS,
      selected: selectedProject,
      onSelect: setSelectedProject
    })), view !== 'projects' && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '12px 24px 0'
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      tabs: [{
        value: 'board',
        label: 'Board'
      }, {
        value: 'list',
        label: 'List'
      }, {
        value: 'timeline',
        label: 'Timeline'
      }],
      value: boardTab,
      onChange: setBoardTab
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: 'auto'
      }
    }, /*#__PURE__*/React.createElement(BoardView, {
      columns: COLUMNS,
      tasks: TASKS,
      onToggle: toggleTask,
      doneSet: doneSet
    })))), /*#__PURE__*/React.createElement(Dialog, {
      open: dialogOpen,
      onClose: () => setDialogOpen(false),
      title: "New project",
      description: "Set up a workspace for your team to collaborate.",
      primaryAction: {
        label: 'Create project',
        onClick: () => {
          setDialogOpen(false);
          setToast({
            tone: 'success',
            title: 'Project created',
            message: 'Your new project is ready.'
          });
        }
      },
      secondaryAction: {
        label: 'Cancel',
        onClick: () => setDialogOpen(false)
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Project name",
      placeholder: "e.g. Winter lookbook",
      autoFocus: true
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Client",
      options: ['Maple & Co.', 'Orchard Foods', 'Internal', 'Ember Studio']
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 8,
        color: 'var(--text-primary)'
      }
    }, "Project color"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 10
      }
    }, ['#C2410C', '#D97706', '#16A34A', '#0EA5E9', '#7C3AED'].map((c, i) => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        width: 28,
        height: 28,
        borderRadius: 'var(--radius-full)',
        background: c,
        cursor: 'pointer',
        boxShadow: i === 0 ? '0 0 0 3px var(--ring-primary)' : 'none'
      }
    })))))), toast && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1100
      }
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: toast.tone,
      title: toast.title,
      message: toast.message,
      onClose: () => setToast(null)
    })));
  }
  const iconBtn = {
    width: 36,
    height: 36,
    borderRadius: 'var(--radius-md)',
    border: '1px solid var(--border)',
    background: 'var(--surface)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-secondary)'
  };
  window.EmberApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ember-studio-app/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ember-studio-app/BoardView.jsx
try { (() => {
// Ember Studio — Board view (kanban columns of task cards)
(() => {
  const {
    Badge,
    Chip,
    Avatar,
    AvatarGroup,
    Icon,
    Checkbox,
    ProgressBar
  } = window.EmberStudioDesignSystem_64dbe4;
  const {
    PRIORITY
  } = window.EmberData;
  function TaskCard({
    task,
    onToggle,
    done
  }) {
    const [hover, setHover] = React.useState(false);
    const pri = PRIORITY[task.priority];
    return /*#__PURE__*/React.createElement("div", {
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderLeft: `4px solid ${task.color}`,
        borderRadius: 'var(--radius-lg)',
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        cursor: 'pointer',
        boxShadow: hover ? 'var(--shadow-card-hover)' : 'none',
        transform: hover ? 'translateY(-2px)' : 'none',
        transition: 'transform var(--transition-fast), box-shadow var(--transition-fast)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-start',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 1
      },
      onClick: e => {
        e.stopPropagation();
        onToggle?.(task.id);
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      checked: !!done,
      onChange: () => onToggle?.(task.id)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-primary)',
        lineHeight: 1.35,
        textDecoration: done ? 'line-through' : 'none',
        opacity: done ? 0.55 : 1
      }
    }, task.title)), task.progress != null && !done && /*#__PURE__*/React.createElement(ProgressBar, {
      value: task.progress,
      color: task.color
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: pri.tone
    }, pri.label), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 12,
        color: task.overdue ? 'var(--error)' : 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 13
    }), task.due)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(AvatarGroup, {
      users: task.assignees,
      max: 3,
      size: 24
    }), task.comments > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "message-circle",
      size: 14
    }), task.comments)));
  }
  function Column({
    column,
    tasks,
    onToggle,
    doneSet
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 240,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 4px'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--text-secondary)'
      }
    }, column.label), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, tasks.length), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16,
      style: {
        color: 'var(--text-muted)',
        cursor: 'pointer'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }
    }, tasks.map(t => /*#__PURE__*/React.createElement(TaskCard, {
      key: t.id,
      task: t,
      onToggle: onToggle,
      done: column.key === 'done' || doneSet.has(t.id)
    }))));
  }
  function BoardView({
    columns,
    tasks,
    onToggle,
    doneSet
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24,
        overflowX: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 20,
        alignItems: 'flex-start',
        minWidth: 'min-content'
      }
    }, columns.map(c => /*#__PURE__*/React.createElement(Column, {
      key: c.key,
      column: c,
      tasks: tasks[c.key],
      onToggle: onToggle,
      doneSet: doneSet
    }))));
  }
  window.EmberBoardView = BoardView;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ember-studio-app/BoardView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ember-studio-app/ProjectsView.jsx
try { (() => {
// Ember Studio — Projects grid view
(() => {
  const {
    Card,
    Badge,
    ProgressBar,
    AvatarGroup,
    Icon
  } = window.EmberStudioDesignSystem_64dbe4;
  function ProjectCard({
    project,
    selected,
    onSelect
  }) {
    const pct = Math.round(project.done / project.tasks * 100);
    const dueSoon = ['Sep 30', 'Oct 4'].includes(project.due);
    return /*#__PURE__*/React.createElement(Card, {
      stripeColor: project.color,
      selected: selected,
      onClick: () => onSelect(project.id),
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 19,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        color: 'var(--text-primary)'
      }
    }, project.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, project.client)), /*#__PURE__*/React.createElement(Icon, {
      name: "more-horizontal",
      size: 18,
      style: {
        color: 'var(--text-muted)'
      }
    })), /*#__PURE__*/React.createElement(ProgressBar, {
      value: pct,
      showPercent: true,
      label: `${project.done} of ${project.tasks} tasks`
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(AvatarGroup, {
      users: project.members,
      max: 3,
      size: 28
    }), /*#__PURE__*/React.createElement(Badge, {
      tone: dueSoon ? 'warning' : 'neutral'
    }, dueSoon ? `Due ${project.due}` : project.due)));
  }
  function ProjectsView({
    projects,
    selected,
    onSelect
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 24
      }
    }, projects.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
      key: p.id,
      project: p,
      selected: selected === p.id,
      onSelect: onSelect
    }))));
  }
  window.EmberProjectsView = ProjectsView;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ember-studio-app/ProjectsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ember-studio-app/Sidebar.jsx
try { (() => {
// Ember Studio — Sidebar (256px workspace nav)
(() => {
  const {
    Icon,
    Badge
  } = window.EmberStudioDesignSystem_64dbe4;
  function NavItem({
    icon,
    label,
    active,
    badge,
    onClick
  }) {
    const [hover, setHover] = React.useState(false);
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      onMouseEnter: () => setHover(true),
      onMouseLeave: () => setHover(false),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        width: '100%',
        textAlign: 'left',
        padding: '8px 12px 8px 14px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        background: active ? 'rgba(194,65,12,0.08)' : hover ? 'var(--surface-raised)' : 'transparent',
        color: active ? 'var(--primary)' : 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: active ? 600 : 400,
        transition: 'background var(--transition-fast)'
      }
    }, active && /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        top: 6,
        bottom: 6,
        width: 3,
        borderRadius: 'var(--radius-full)',
        background: 'var(--primary)'
      }
    }), /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, label), badge != null && /*#__PURE__*/React.createElement(Badge, {
      tone: active ? 'primary' : 'neutral'
    }, badge));
  }
  function Sidebar({
    view,
    setView,
    projects
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 256,
        flexShrink: 0,
        height: '100%',
        background: 'var(--surface)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '18px 16px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logomark.svg",
      width: 32,
      height: 32,
      alt: ""
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 17,
        color: 'var(--text-primary)'
      }
    }, "Ember Studio"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, "Creative workspace"))), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '4px 12px'
      }
    }, /*#__PURE__*/React.createElement(NavItem, {
      icon: "layout-grid",
      label: "Projects",
      active: view === 'projects',
      onClick: () => setView('projects')
    }), /*#__PURE__*/React.createElement(NavItem, {
      icon: "check-circle",
      label: "My tasks",
      badge: 6,
      active: view === 'tasks',
      onClick: () => setView('tasks')
    }), /*#__PURE__*/React.createElement(NavItem, {
      icon: "calendar",
      label: "Calendar",
      active: view === 'calendar',
      onClick: () => setView('calendar')
    }), /*#__PURE__*/React.createElement(NavItem, {
      icon: "inbox",
      label: "Inbox",
      badge: 3,
      active: view === 'inbox',
      onClick: () => setView('inbox')
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '16px 24px 8px',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, "Projects"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        padding: '0 12px',
        overflowY: 'auto'
      }
    }, projects.map(p => /*#__PURE__*/React.createElement("button", {
      key: p.id,
      onClick: () => setView('projects'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        textAlign: 'left',
        padding: '7px 12px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-body)',
        fontSize: 14
      },
      onMouseEnter: e => e.currentTarget.style.background = 'var(--surface-raised)',
      onMouseLeave: e => e.currentTarget.style.background = 'transparent'
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 8,
        height: 8,
        borderRadius: 'var(--radius-full)',
        background: p.color,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, p.name)))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        padding: 12,
        borderTop: '1px solid var(--border)'
      }
    }, /*#__PURE__*/React.createElement(NavItem, {
      icon: "settings",
      label: "Settings"
    })));
  }
  window.EmberSidebar = Sidebar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ember-studio-app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ember-studio-app/Topbar.jsx
try { (() => {
// Ember Studio — Topbar (page title, search, notifications, avatar)
(() => {
  const {
    Icon,
    Button,
    Input,
    Avatar
  } = window.EmberStudioDesignSystem_64dbe4;
  function Topbar({
    title,
    subtitle,
    onNew
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 24px',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(250,250,249,0.8)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: '-0.02em',
        margin: 0,
        color: 'var(--text-primary)'
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: 'var(--text-muted)',
        marginTop: 2
      }
    }, subtitle)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 240
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 16
      })
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Notifications",
      style: {
        position: 'relative',
        width: 40,
        height: 40,
        borderRadius: 'var(--radius-md)',
        border: '1px solid var(--border)',
        background: 'var(--surface)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 18
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        top: 8,
        right: 9,
        width: 7,
        height: 7,
        borderRadius: 'var(--radius-full)',
        background: 'var(--accent)',
        border: '1.5px solid var(--surface)'
      }
    })), onNew && /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconLeft: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      }),
      onClick: onNew
    }, "New project"), /*#__PURE__*/React.createElement(Avatar, {
      name: "Devon Marsh",
      size: 36
    }));
  }
  window.EmberTopbar = Topbar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ember-studio-app/Topbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ember-studio-app/data.js
try { (() => {
// Ember Studio — mock data for the UI kit
const PROJECTS = [{
  id: 'p1',
  name: 'Autumn brand refresh',
  client: 'Maple & Co.',
  color: '#C2410C',
  tasks: 24,
  done: 16,
  due: 'Oct 4',
  members: ['Maya Chen', 'Ravi Patel', 'Jo Kim', 'Lee Ann']
}, {
  id: 'p2',
  name: 'Harvest packaging',
  client: 'Orchard Foods',
  color: '#16A34A',
  tasks: 18,
  done: 5,
  due: 'Oct 12',
  members: ['Ravi Patel', 'Sam Roe']
}, {
  id: 'p3',
  name: 'Studio site redesign',
  client: 'Internal',
  color: '#0EA5E9',
  tasks: 31,
  done: 28,
  due: 'Sep 30',
  members: ['Jo Kim', 'Maya Chen', 'Lee Ann', 'Sam Roe', 'Dee Vaughn']
}, {
  id: 'p4',
  name: 'Q4 campaign films',
  client: 'Ember Studio',
  color: '#7C3AED',
  tasks: 12,
  done: 2,
  due: 'Nov 1',
  members: ['Sam Roe', 'Dee Vaughn']
}];
const TASKS = {
  todo: [{
    id: 't1',
    title: 'Finalize color exploration deck',
    priority: 'high',
    project: 'Autumn brand refresh',
    color: '#C2410C',
    assignees: ['Maya Chen'],
    comments: 3,
    due: 'Tomorrow',
    overdue: false
  }, {
    id: 't2',
    title: 'Source paper stock samples',
    priority: 'medium',
    project: 'Harvest packaging',
    color: '#16A34A',
    assignees: ['Ravi Patel', 'Sam Roe'],
    comments: 1,
    due: 'Oct 8',
    overdue: false
  }, {
    id: 't3',
    title: 'Audit legacy icon set',
    priority: 'low',
    project: 'Studio site redesign',
    color: '#0EA5E9',
    assignees: ['Jo Kim'],
    comments: 0,
    due: 'Oct 10',
    overdue: false
  }],
  progress: [{
    id: 't4',
    title: 'Logo lockup variations',
    priority: 'high',
    project: 'Autumn brand refresh',
    color: '#C2410C',
    assignees: ['Maya Chen', 'Lee Ann'],
    comments: 5,
    due: 'Today',
    overdue: false,
    progress: 60
  }, {
    id: 't5',
    title: 'Storyboard hero film',
    priority: 'medium',
    project: 'Q4 campaign films',
    color: '#7C3AED',
    assignees: ['Sam Roe'],
    comments: 2,
    due: 'Yesterday',
    overdue: true,
    progress: 35
  }],
  review: [{
    id: 't6',
    title: 'Typography spec sheet',
    priority: 'medium',
    project: 'Studio site redesign',
    color: '#0EA5E9',
    assignees: ['Jo Kim', 'Maya Chen'],
    comments: 4,
    due: 'Oct 2',
    overdue: false
  }],
  done: [{
    id: 't7',
    title: 'Moodboard sign-off',
    priority: 'low',
    project: 'Autumn brand refresh',
    color: '#C2410C',
    assignees: ['Lee Ann'],
    comments: 0,
    due: 'Sep 28',
    overdue: false
  }, {
    id: 't8',
    title: 'Kickoff workshop notes',
    priority: 'low',
    project: 'Harvest packaging',
    color: '#16A34A',
    assignees: ['Ravi Patel'],
    comments: 2,
    due: 'Sep 25',
    overdue: false
  }]
};
const COLUMNS = [{
  key: 'todo',
  label: 'To do'
}, {
  key: 'progress',
  label: 'In progress'
}, {
  key: 'review',
  label: 'In review'
}, {
  key: 'done',
  label: 'Done'
}];
const PRIORITY = {
  high: {
    tone: 'error',
    label: 'High'
  },
  medium: {
    tone: 'warning',
    label: 'Medium'
  },
  low: {
    tone: 'neutral',
    label: 'Low'
  }
};
window.EmberData = {
  PROJECTS,
  TASKS,
  COLUMNS,
  PRIORITY
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ember-studio-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
