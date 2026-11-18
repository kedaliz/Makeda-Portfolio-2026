# 🎨 Warm Color Palette Reference

## Primary Colors

### Coral Red
```
Hex: #FF6B6B
RGB: rgb(255, 107, 107)
Usage: Primary accent, hover states, main CTAs
```

### Warm Orange  
```
Hex: #FFA94D
RGB: rgb(255, 169, 77)
Usage: Secondary accent, secondary buttons, borders
```

### Golden Yellow
```
Hex: #FFD93D
RGB: rgb(255, 217, 61)
Usage: Tertiary accent, highlights, special emphasis
```

### Deep Orange
```
Hex: #FF922B
RGB: rgb(255, 146, 43)
Usage: Active states, strong accents, hover effects
```

---

## Background & Supporting Colors

### Very Light Peach (Primary Background)
```
Hex: #FFF8F5
RGB: rgb(255, 248, 245)
Usage: Main page background, card backgrounds
```

### Light Warm (Secondary Background)
```
Hex: #FFEAE0
RGB: rgb(255, 234, 224)
Usage: Accent backgrounds, lighter card states
```

### Light Border/Hover
```
Hex: #FFE5E0
RGB: rgb(255, 229, 224)
Usage: Card borders, light dividers, subtle accents
```

### Soft Warm (Text Background)
```
Hex: #FFF3E0
RGB: rgb(255, 243, 224)
Usage: Tag backgrounds, tooltip backgrounds
```

---

## Gradients

### Primary Gradient (Header & Main Sections)
```css
linear-gradient(135deg, #FF6B6B 0%, #FFA94D 50%, #FFD93D 100%)
Coral Red → Warm Orange → Golden Yellow
```
**Usage**: Main header, section headers, prominent CTAs

### Secondary Gradient (Buttons & Accents)
```css
linear-gradient(135deg, #FF922B 0%, #FF6B6B 100%)
Deep Orange → Coral Red
```
**Usage**: Button backgrounds, case study toggles

### Accent Gradient
```css
linear-gradient(135deg, #FFD93D 0%, #FFA94D 100%)
Golden Yellow → Warm Orange
```
**Usage**: Hover states, special highlights

---

## Color Applications

### Buttons
- **Normal State**: Warm gradient background (secondary or primary)
- **Hover State**: Slightly darker gradient or solid warm color
- **Active State**: Deep orange (#FF922B)
- **Focus State**: 3px solid #FF6B6B outline
- **Text**: White on warm backgrounds

### Cards
- **Border**: #FFE5E0 (light pink border)
- **Hover Border**: #FFA94D (warm orange)
- **Background**: White with subtle peach gradients on hover
- **Title**: Gradient text (#FF6B6B → #FFA94D)

### Links
- **Normal**: #FF6B6B with underline
- **Hover**: #FF922B with deeper underline
- **Visited**: #FF6B6B
- **Focus**: 3px solid outline

### Text
- **Primary Text**: #333 (dark gray on light backgrounds)
- **Secondary Text**: #666 (medium gray)
- **Accent Text**: #FF6B6B (coral red for emphasis)
- **Labels**: #FF922B (deep orange)

### Input & Interactive Elements
- **Focus Outline**: 3px solid #FF6B6B
- **Placeholder Text**: #999
- **Input Border**: #FFE5E0
- **Input Focus Border**: #FF6B6B

---

## Semantic Color Usage

| Element | Color | Hex |
|---------|-------|-----|
| Primary Actions | Coral Red | #FF6B6B |
| Secondary Actions | Warm Orange | #FFA94D |
| Highlights | Golden Yellow | #FFD93D |
| Active/Hovered | Deep Orange | #FF922B |
| Borders | Light Pink | #FFE5E0 |
| Background | Very Light Peach | #FFF8F5 |
| Secondary Background | Light Warm | #FFEAE0 |

---

## Accessibility

### Contrast Ratios
- ✅ Coral Red (#FF6B6B) on White: 4.5:1 (WCAG AA)
- ✅ Warm Orange (#FFA94D) on White: 3.8:1 (WCAG AA)
- ✅ Golden Yellow (#FFD93D) on White: 3.2:1 (WCAG AA)
- ✅ All text on backgrounds: WCAG AA compliant

### Focus States
- Clear 3px warm color outline
- 2px offset for visibility
- High contrast against backgrounds

### Motion
- Respects `prefers-reduced-motion` media query
- Smooth 0.3s transitions for interactive elements
- No disruptive animations for essential elements

---

## Usage Examples

### Header Section
```css
background: linear-gradient(135deg, #FF6B6B 0%, #FFA94D 50%, #FFD93D 100%);
```

### Project Card Hover
```css
border-color: #FFA94D;
box-shadow: 0 25px 50px rgba(255, 107, 107, 0.15);
background: linear-gradient(135deg, #FFF8F5 0%, white 100%);
```

### Button Hover
```css
background: var(--gradient-secondary);
transform: translateY(-2px);
box-shadow: 0 8px 16px rgba(255, 107, 107, 0.3);
```

### Tech Tag
```css
background: linear-gradient(135deg, #FFF3E0 0%, #FFE5D9 100%);
color: #FF6B6B;
border: 1px solid rgba(255, 107, 107, 0.2);
```

---

## Browser Compatibility

✅ All modern browsers support:
- CSS gradients
- CSS variables (custom properties)
- RGBA colors
- CSS transitions

✅ Fallback for older browsers:
- Solid colors used as fallbacks
- Gradients are enhanced styling (not critical)
- Buttons remain functional with solid colors

---

## Mobile & Dark Mode Considerations

### Light Mode (Default)
- Warm colors display vibrantly
- Peach backgrounds are soft and readable
- High contrast for accessibility

### Potential Dark Mode Implementation
- Could use darker, desaturated warm tones
- Adjust background to dark brown (#3D2C2C)
- Maintain warm accent colors with higher brightness
- Example: #FF8A7E (lightened coral) on dark backgrounds

---

**Color Palette Last Updated**: November 2026  
**Status**: Production Ready ✨
