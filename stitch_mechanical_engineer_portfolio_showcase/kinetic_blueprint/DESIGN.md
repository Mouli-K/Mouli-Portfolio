---
name: Kinetic Blueprint
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#3f4850'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#707881'
  outline-variant: '#bfc7d2'
  surface-tint: '#006398'
  primary: '#006194'
  on-primary: '#ffffff'
  primary-container: '#007bb9'
  on-primary-container: '#fdfcff'
  inverse-primary: '#93ccff'
  secondary: '#565e74'
  on-secondary: '#ffffff'
  secondary-container: '#dae2fd'
  on-secondary-container: '#5c647a'
  tertiary: '#006387'
  on-tertiary: '#ffffff'
  tertiary-container: '#007da9'
  on-tertiary-container: '#fcfcff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cce5ff'
  primary-fixed-dim: '#93ccff'
  on-primary-fixed: '#001d31'
  on-primary-fixed-variant: '#004b73'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7bd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-hero:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-micro:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.08em
  metric-display:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 36px
    letterSpacing: -0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the calculated precision of high-performance mechanical engineering combined with the refined, tactile minimalism of bespoke industrial design. It balances the utilitarian rigor of aerospace schematics with the understated elegance of luxury consumer hardware.

### Personality & Tone
- **Precise & Calculated:** Every visual element aligns to a rigorous logic. Whitespace is intentional, reminiscent of drafting paper and technical blueprints.
- **Industrial Sophistication:** Stripped of unnecessary ornamentation; forms and structures highlight material finishes, tolerances, and structural integrity.
- **Architectural Utility:** Combines structural micro-grids, legible metric readouts, and quiet technical details that evoke physical instrument clusters and precision machining interfaces.

### Target Audience
Engineering executives, aerospace and industrial design directors, high-tech recruiters, and collaborators looking for uncompromising technical execution and elite visual presentation.

## Colors

The palette is rooted in sterile cleanroom slates, structural metals, and calibrated blueprint accents.

- **Primary (`#0284c7`):** Steel blueprint cobalt. Reserved for primary calls-to-action, active measurement states, crosshairs, and focus indicators.
- **Secondary (`#0f172a`):** Deep carbon slate. Used for high-priority typography, high-contrast structural framing, and primary product titles.
- **Tertiary (`#38bdf8`):** Anodized cyan. Applied to interactive hovers, active telemetry indicators, and high-frequency data highlights.
- **Neutral (`#64748b`):** Machined graphite. Deployed for secondary technical specs, dimensional callouts, and muted meta labels.

### Surface Tokens & Hierarchy
- **Canvas Base:** `#f8fafc` (Ultra-pale chalk slate).
- **Surface Elevation 1 (Cards & Data Cells):** `#ffffff` (Pure white).
- **Surface Elevation 2 (Technical Insets & Spec Wells):** `#f1f5f9` (Milled aluminum tinted neutral).
- **Structural Dividers & Schematics:** `#e2e8f0` (Subtle 1px hairpins with zero blur).

## Typography

The typographic hierarchy pairs three distinct voices into an engineered whole:
1. **Space Grotesk (Headlines & Display):** Conveys structural innovation, engineered geometry, and modernist industrial character.
2. **Inter (Body Text):** Provides neutral, highly legible reading experiences for case study narratives and technical documentation.
3. **JetBrains Mono (Technical Readouts, Badges, Metrics):** Delivers precise tabular alignment, spec sheet readability, and calibrated machine telemetry.

All monospace metadata and technical labels should be set with uppercase transformation or strict numeric formatting (`00.00` precision style).

## Layout & Spacing

The layout is structured around an explicit 12-column modular grid reminiscent of CAD assembly layouts and draft tables.

### Layout Philosophy & Breakpoints
- **Desktop (≥ 1280px):** 12 columns, `margin: 3rem`, `gutter: 1.5rem`. Container max-width locked at 1440px to retain blueprint ratio.
- **Tablet (768px – 1279px):** 8 columns, `margin: 2rem`, `gutter: 1rem`. Side-by-side spec layouts collapse to paired 4-column cards.
- **Mobile (< 768px):** 4 columns, `margin-mobile: 1.25rem`, `gutter-sm: 1rem`. Technical tables reflow into stacked accordion cards.

### Structural Alignment
Component rhythm is derived from base-4 increments. Spacing is strictly utilitarian: tight micro-spacing inside technical data clusters (`space-xs` and `space-sm`) balances wide architectural gutters and generous block separators (`space-xl`).

## Elevation & Depth

This system avoids soft skeuomorphic drop shadows and heavy multi-stop blurs in favor of flat physical sheet metal layering and hairline boundary tolerances.

### Mechanical Surface Tiers
- **Tier 0 (Drafting Surface):** `#f8fafc` canvas background with optional ultra-faint 24px coordinate grid dot matrix (`rgba(15, 23, 42, 0.04)`).
- **Tier 1 (Milled Panels & Workpieces):** Pure `#ffffff` surface delineated by a crisp `1px solid #e2e8f0` outer border. No blur; spatial separation is achieved purely via color temperature and border definition.
- **Tier 2 (Telemetry Wells & Cutouts):** Recessed containers use `#f1f5f9` with an internal inset border (`box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.05)`), simulating a CNC pocket-milled well.
- **Floating Overlays & Diagnostics:** For tooltips, modals, and dimensional inspection overlays, use a razor-sharp mechanical drop: `0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 0 0 1px #cbd5e1`.

## Shapes

The geometric architecture relies on low-radius edges (`roundedness: 1`, 0.25rem / 4px base radius) reflecting machined tolerances, metal extrusion corners, and glass optical prisms.

- **Panels, Data Grids, and Cards:** Use `4px` corner radii to maintain a rigid, instrument-like feel.
- **Interactive Controls (Inputs, Selectors):** Grounded at `4px` radius with precise 1px stroke boundaries.
- **Pill Badges & Status Tags:** Explicit exception using full pill geometry (`9999px`) to mirror physical hardware indicator lights, laser markings, and extruded mechanical toggles.

## Components

### Buttons
- **Primary:** `#0284c7` background, white label, 4px corner radius, height 40px, padding `0 16px`. Font: `Inter` semi-bold (14px). Hover state transitions to `#0369a1` with active state scaling down to `98%` to simulate physical tactile detents.
- **Secondary / CAD Action:** Transparent surface, `1px solid #cbd5e1` outline, `#0f172a` text. On hover: `#f1f5f9` fill and `#94a3b8` border.
- **Monospace Tool Action:** Height 32px, `JetBrains Mono` 11px uppercase, surface `#ffffff`, border `#e2e8f0` with leading crosshair or axis indicator (`[X]`, `[+]`).

### Badges & Pill Tags
- Fully rounded (`border-radius: 9999px`), padding `2px 10px`. Set in `JetBrains Mono` (11px).
- **Status Blueprint:** Background `rgba(2, 132, 199, 0.08)`, border `1px solid rgba(2, 132, 199, 0.25)`, text `#0284c7`.
- **Status Neutral:** Background `#f1f5f9`, border `1px solid #e2e8f0`, text `#475569`.
- Optional leading micro-indicator dot (4px diameter, colored according to status).

### Cards (Project & Case Studies)
- White background (`#ffffff`), `1px solid #e2e8f0` structural boundary, 4px radius.
- Includes a dedicated header strip set in `#f8fafc` separated by a 1px divider, housing case study serial numbers (e.g., `DOC-REF: ME-0419`) in `JetBrains Mono`.
- Subdued hover state: border shifts to `#94a3b8` without elevating or casting exaggerated shadows.

### Technical Data Grids & Spec Sheets
- Alternating or bordered cells designed like engineering bills of materials (BOM).
- Cell padding: `8px 12px`. Header row in `JetBrains Mono` 11px uppercase neutral `#64748b` with subtle `1px solid #e2e8f0` bottom rule.
- Monospace values aligned right with clear engineering units (`mm`, `kN`, `RPM`, `°C`) set in secondary slate.

### Input Fields
- Height 40px, 4px radius, `#ffffff` background, `1px solid #cbd5e1` outline.
- Focus: `1px solid #0284c7` with a non-blurred outer ring `0 0 0 2px rgba(2, 132, 199, 0.15)`.
- Placeholder typography in `Inter` 14px `#94a3b8`.

### Checkboxes & Segmented Controls
- **Checkboxes:** 16x16px square with 2px radius, `1px solid #94a3b8`. When checked: fill `#0284c7` with a white precision vector checkmark.
- **Segmented Toggle:** Milled channel in `#f1f5f9` containing individual snap-toggle tabs. Selected tab is pure `#ffffff` with a `1px solid #e2e8f0` border and `JetBrains Mono` label.

### Specialized Hardware Components
- **Dimensional Callout Marker:** Circular crosshair target with connecting hairline leader line terminating in a pill badge with dimensional data.
- **Telemetry Readout Strip:** Full-width technical strip with live parameters (e.g., tolerances, materials, software used) framed in modular cells.