# 📄 Homepage Intro Section - Visual Guide

## Component Structure

```
┌────────────────────────────────────────────────────────────┐
│                     .intro-section                         │
│  ┌──────────────────────────────────────────────────────┐  │
│  │               .intro-content                         │  │
│  │                                                      │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  Hi, I'm Makeda                   .intro-     │  │  │
│  │  │  (font-size: 3rem, animated)       greeting   │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                                                      │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  Information Science student + UX/UI Designer  │  │  │
│  │  │  exploring the intersection of                 │  │  │
│  │  │  human-centered design, technology, and       │  │  │
│  │  │  social impact.                               │  │  │
│  │  │  (font-size: 1.3rem, with gradient highlights)│  │  │
│  │  │                                                │  │  │
│  │  │  .highlight-text ▼                             │  │  │
│  │  │  - human-centered design [gradient]           │  │  │
│  │  │  - technology [gradient]                       │  │  │
│  │  │  - social impact [gradient]                    │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                                                      │  │
│  │  ┌────────────────────────────────────────────────┐  │  │
│  │  │  .intro-details                                │  │  │
│  │  │                                                │  │  │
│  │  │  ▪ Currently                                   │  │  │
│  │  │    Applying for grad school & post-grad       │  │  │
│  │  │                                                │  │  │
│  │  │  ▪ Passionate about                            │  │  │
│  │  │    UX/UI Design, Accessibility, User Research,│  │  │
│  │  │    & Tech Policy                              │  │  │
│  │  │                                                │  │  │
│  │  │  ▪ Location                                    │  │  │
│  │  │    Ithaca, NY                                  │  │  │
│  │  │                                                │  │  │
│  │  │  (labels in coral red #FF6B6B)               │  │  │
│  │  └────────────────────────────────────────────────┘  │  │
│  │                                                      │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

---

## CSS Classes & Styling

### `.intro-section`
- **Animation**: Fade in up from bottom
- **Margin**: 4rem bottom spacing
- **Max Width**: 900px (centered)

### `.intro-greeting`
- **Font Size**: 3rem (desktop), 2rem (mobile)
- **Font Weight**: 800 (extra bold)
- **Color**: #333 (dark gray)
- **Letter Spacing**: -0.02em (tight)
- **Animation**: Staggered fade-in (0.3s delay)

### `.intro-tagline`
- **Font Size**: 1.3rem (desktop), 1.1rem (mobile)
- **Line Height**: 1.8 (spacious)
- **Color**: #555 (medium gray)
- **Font Weight**: 500
- **Animation**: Staggered fade-in (0.4s delay)

### `.highlight-text` (Inside tagline)
- **Font Weight**: 700 (bold)
- **Background**: Warm gradient
  ```
  linear-gradient(135deg, #FF6B6B 0%, #FFA94D 50%, #FFD93D 100%)
  ```
- **Text Clipping**: Gradient applied to text color
- **Result**: Coral → Orange → Yellow gradient on text

### `.intro-details`
- **Display**: Flex column (stacked vertically)
- **Gap**: 1rem between items
- **Animation**: Staggered fade-in (0.5s delay)

### `.intro-detail-item`
- **Display**: Flex (horizontal layout)
- **Align Items**: flex-start
- **Gap**: 1.5rem between label and content
- **Font Size**: 1rem
- **Line Height**: 1.6
- **Color**: #666

### `.detail-label`
- **Color**: #FF6B6B (coral red)
- **Font Weight**: 700 (bold)
- **Min Width**: 120px (aligns all labels)
- **Letter Spacing**: 0.5px
- **Flex Shrink**: 0 (doesn't shrink)

---

## Responsive Behavior

### Desktop (> 768px)
```
Hi, I'm Makeda                        [3rem]
                                    
Information Science student + UX/UI Designer   [1.3rem]
exploring the intersection of human-centered
design, technology, and social impact.

Currently                             [horizontal flex]
  Applying for grad school & post-grad opportunities

Passionate about
  UX/UI Design, Accessibility, User Research, & Tech Policy

Location
  Ithaca, NY
```

### Mobile (≤ 768px)
```
Hi, I'm Makeda                        [2rem]
                                    
Information Science student + UX/UI
Designer exploring the intersection
of human-centered design, technology, [1.1rem]
and social impact.

Currently
Applying for grad school & post-grad  [vertical stack]
opportunities

Passionate about
UX/UI Design, Accessibility, User
Research, & Tech Policy

Location
Ithaca, NY
```

---

## Animation Timeline

| Element | Delay | Duration | Effect |
|---------|-------|----------|--------|
| `.intro-section` | 0.2s | 0.8s | Fade in up |
| `.intro-greeting` | 0.3s | 0.8s | Fade in up |
| `.intro-tagline` | 0.4s | 0.8s | Fade in up |
| `.intro-details` | 0.5s | 0.8s | Fade in up |

**Total intro time**: ~1.3 seconds (animated entrance)

---

## Color Palette Used

| Element | Color | Hex |
|---------|-------|-----|
| Main Text | Dark Gray | #333 |
| Tagline | Medium Gray | #555 |
| Details | Medium Gray | #666 |
| Labels | Coral Red | #FF6B6B |
| Gradient 1 | Coral Red | #FF6B6B |
| Gradient 2 | Warm Orange | #FFA94D |
| Gradient 3 | Golden Yellow | #FFD93D |

---

## Component Example

```jsx
<section className="intro-section">
  <div className="intro-content">
    <h2 className="intro-greeting">Hi, I'm Makeda</h2>
    
    <p className="intro-tagline">
      Information Science student + UX/UI Designer exploring 
      the intersection of <span className="highlight-text">
      human-centered design</span>, <span className="highlight-text">
      technology</span>, and <span className="highlight-text">
      social impact</span>.
    </p>
    
    <div className="intro-details">
      <p className="intro-detail-item">
        <span className="detail-label">Currently</span>
        <span>Applying for grad school & post-grad opportunities</span>
      </p>
      
      <p className="intro-detail-item">
        <span className="detail-label">Passionate about</span>
        <span>UX/UI Design, Accessibility, User Research, & Tech Policy</span>
      </p>
      
      <p className="intro-detail-item">
        <span className="detail-label">Location</span>
        <span>Ithaca, NY</span>
      </p>
    </div>
  </div>
</section>
```

---

## Hover & Interaction States

### On Link Hover (contact email, etc.)
- Color transitions to warm orange (#FFA94D)
- Underline deepens to coral red (#FF6B6B)
- Smooth 0.2s transition

### On Button Hover (Projects tab, etc.)
- Background changes to warm gradient
- Slight translate up (-2px)
- Shadow increases

### On Focus (accessibility)
- 3px solid coral red (#FF6B6B) outline
- 2px outline offset
- Clear visible indicator

---

## Typography

### Font Sizing Hierarchy
1. **Greeting** - 3rem (extra large)
2. **Tagline** - 1.3rem (large)
3. **Details** - 1rem (normal)
4. **Labels** - 1rem (normal, bold)

### Line Height
- **Greeting** - 1.2 (compact)
- **Tagline** - 1.8 (spacious for readability)
- **Details** - 1.6 (comfortable)

### Font Weights
- **Greeting** - 800 (extra bold)
- **Tagline** - 500 (medium)
- **Labels** - 700 (bold)
- **Content** - 400 (normal)

---

## Spacing & Layout

### Margins
- Section bottom: 4rem
- Greeting bottom: 1rem
- Tagline bottom: 2rem
- Details gap: 1rem between items
- Detail label margin: 1.5rem to content

### Max Width
- Section: 900px (readable column width)
- Centered: `margin: 0 auto`

### Padding
- Main content: 3rem (desktop), 2rem (tablet), 1rem (mobile)

---

## Accessibility Features

✅ **Semantic HTML**
- `<section>` wrapper for content
- `<h2>` for main greeting
- `<p>` for tagline and details

✅ **Proper Contrast**
- Dark text (#333, #555, #666) on light background (#FFF8F5)
- Coral labels (#FF6B6B) on light background (3.5:1+ contrast)

✅ **Focus States**
- Clear 3px outline on interactive elements
- Visible outline offset

✅ **Motion Preferences**
- Respects `prefers-reduced-motion`
- Animations disabled for users who prefer reduced motion

✅ **Screen Readers**
- Descriptive text in labels
- No hidden content via CSS alone
- Proper semantic structure

---

## Performance Considerations

- ✅ CSS animations use GPU-accelerated transforms
- ✅ No JavaScript required for intro section
- ✅ Smooth 60fps animations
- ✅ Lazy loading of images below fold
- ✅ Minimal repaints/reflows

---

**Last Updated**: November 18, 2026
