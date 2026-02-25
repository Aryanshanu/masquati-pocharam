

## Add Pink to the Theme

### Overview
Incorporate pink as a key accent color alongside the existing gold and navy, giving the Masqati brand a warmer, more vibrant, Instagram-friendly feel. Pink will be used for gradients, story rings, backgrounds, badges, and accent highlights throughout the app.

---

### 1. Add Pink CSS Variables and Utilities

**File: `src/index.css`**

- Add new CSS custom properties for pink tones:
  - `--pink: 340 75% 60%` (vibrant rose pink)
  - `--pink-light: 340 65% 75%` (soft blush)
  - `--pink-dark: 340 80% 45%` (deep rose)
- Add utility classes:
  - `.pink-gradient` -- gradient from pink to pink-light
  - `.pink-gold-gradient` -- gradient blending pink into gold (hero, CTAs)
- Update `.story-ring` to use a pink-to-gold gradient instead of pure gold
- Update `.shimmer` to use pink tint instead of pure gold
- Update background to a very subtle warm pink-cream tone: `--background: 350 15% 97%`
- Update `--cream` to have a pink warmth: `--cream: 350 15% 97%`
- Update `--ring` to pink: `--ring: 340 75% 60%`

### 2. Add Pink to Tailwind Config

**File: `tailwind.config.ts`**

- Add `pink` color tokens under `extend.colors`:
  ```
  pink: {
    DEFAULT: "hsl(var(--pink))",
    light: "hsl(var(--pink-light))",
    dark: "hsl(var(--pink-dark))",
  }
  ```
- Add `pulse-pink` keyframe and animation (matching pulse-gold but with pink glow)

### 3. Update Hero Section with Pink Accents

**File: `src/components/HeroSection.tsx`**

- Change the hero background from pure navy gradient to a navy-with-pink-glow: radial gradient with pink tint at bottom
- Story ring circles: pink-to-gold gradient border
- "Explore Menu" button: pink-gold gradient instead of pure gold
- Scroll chevron: pink tint

### 4. Update Top Picks with Pink Collection Accents

**File: `src/components/TopPicks.tsx`**

- Update collection background gradients to include pink:
  - "Summer Specials": amber-to-pink gradient
  - "Kids Favourites": pink-to-purple gradient (already close, will enhance)
  - "Masqati Specials": gold-to-pink gradient

### 5. Update Product Cards with Pink Touches

**File: `src/components/ProductCard.tsx`**

- "Add" button: pink-gold gradient instead of pure gold
- Badge "Hot" and "New" pills: use pink shades
- Heart button filled state: keep destructive red (already pink-ish)

### 6. Update Category Nav Active Indicator

**File: `src/components/CategoryNav.tsx`**

- Active tab underline: pink-gold gradient instead of pure gold

### 7. Update Bottom Nav with Pink Accent

**File: `src/components/BottomNav.tsx`**

- Cart button when items present: pink-gold gradient
- Favorites badge: pink gradient instead of pure gold

### 8. Update Search Bar

**File: `src/components/SearchBar.tsx`**

- Search icon: pink color instead of gold
- Focus ring: pink tint

### 9. Update Header

**File: `src/components/Header.tsx`**

- "Est. 1970" text: pink instead of gold
- Map pin icon: pink accent

---

### Technical Summary

```text
Files Modified (9):
  src/index.css                    -- Pink CSS variables + utility classes + updated gradients
  tailwind.config.ts               -- Pink color tokens + pulse-pink animation
  src/components/HeroSection.tsx   -- Pink radial glow, pink-gold story rings & CTAs
  src/components/TopPicks.tsx      -- Pink-tinted collection backgrounds
  src/components/ProductCard.tsx   -- Pink-gold "Add" button, pink badge accents
  src/components/CategoryNav.tsx   -- Pink-gold active underline
  src/components/BottomNav.tsx     -- Pink-gold cart button + pink badge
  src/components/SearchBar.tsx     -- Pink search icon
  src/components/Header.tsx        -- Pink accent on tagline & map icon
```

### Color Palette (Updated)
- **Navy**: Deep charcoal navy (primary, backgrounds) -- unchanged
- **Gold**: Rich amber gold (prices, premium accents) -- kept for prices
- **Pink**: Vibrant rose (CTAs, gradients, story rings, badges) -- NEW primary accent
- **Pink-Gold Gradient**: Blended gradient used for buttons and highlights -- NEW
- **Cream**: Warm pink-tinted off-white background -- slightly warmer

### Design Philosophy
Pink replaces gold as the primary "pop" color for interactive elements (buttons, badges, indicators), while gold remains for prices and premium typography. This creates a warmer, more Instagram-native aesthetic with the pink-gold gradient adding visual richness.
