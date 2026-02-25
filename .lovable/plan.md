

## Instagram-Style UI Overhaul + Remove Cheap Items

### Part 1: Remove ₹10 and ₹15 Products

**File: `src/data/products.ts`**

Remove all 50ml cups (₹10-₹15) and cheap sticks (₹10-₹15):
- Vanilla Cup 50ml (₹10)
- Strawberry Cup 50ml (₹15)
- Butter Scotch Cup 50ml (₹15)
- Green Pista Cup 50ml (₹15)
- Tuty Fruity Cup 50ml (₹15)
- Mango Cup 50ml (₹15)
- Choco Chips Cup 50ml (₹15)
- Honey Almond Cup 50ml (₹15)
- Anjeer Cup 50ml (₹15)
- Black Current Cup 50ml (₹15)
- Mini Choco Bar (₹15)
- Orange Bar (₹10)
- Mango Bar (₹10)
- Strawberry Bar (₹10)

Total: 14 products removed.

---

### Part 2: Instagram-Style UI Redesign

The entire app will be redesigned to feel like an Instagram-meets-Swiggy experience -- visually rich, story-like sections, full-bleed cards, smooth animations, and bold visual hierarchy.

#### 2A. New Visual System (`src/index.css`)

- Larger, bolder typography with tighter line heights
- Card styles: Full-width edge-to-edge on mobile, no borders -- just shadows and spacing
- Smooth scroll behavior globally
- New utility classes:
  - `.story-card` -- rounded-3xl, overflow-hidden, large shadow
  - `.shimmer` -- subtle loading shimmer animation
  - `.fade-in` -- entrance animation for cards
  - `.gradient-overlay` -- dark gradient for text-on-image readability
- Remove the old "corporate" feel, add Instagram-like warmth

#### 2B. Hero Section -- Instagram Stories Style (`src/components/HeroSection.tsx`)

Complete redesign to feel like Instagram story highlights:
- Full-viewport-width hero with a dark navy gradient background
- Large "MASQATI" logotype with animated gold shimmer effect
- Tagline with a typewriter/fade-in effect
- Horizontal scrollable "story circles" below the hero showing categories (Ice Cream, Specials, Dairy etc.) like Instagram story highlights -- round circles with gold border and category icon
- Location pill with pulsing dot animation
- CTA buttons: "Explore Menu" and "WhatsApp Order" with glassmorphism style
- Scroll-down chevron with bounce animation

#### 2C. Top Picks -- Instagram Reels Grid Style (`src/components/TopPicks.tsx`)

- Each collection becomes a full-width "card story" with a gradient background
- Collection title overlaid with large bold serif text
- Products shown as horizontal scrollable large cards (not small compact ones)
- Each product card: tall aspect ratio (like reels), product name in bold overlay, price badge floating in corner, "Add" button as a floating circular plus icon
- Smooth snap scrolling
- Add a "See all" link after each row

#### 2D. Category Nav -- Pill Tabs with Underline Indicator (`src/components/CategoryNav.tsx`)

- Remove borders, use underline indicator for active tab (like Instagram profile tabs)
- Larger text, bolder active state
- Smooth sliding underline animation
- Icons slightly larger
- Frosted glass sticky background

#### 2E. Product Cards -- Bold, Full-Width Instagram Post Style (`src/components/ProductCard.tsx`)

Complete redesign:
- Full-width card on mobile (edge-to-edge within container)
- No visible border -- just a subtle shadow and rounded-2xl
- Product name in large bold serif font (Instagram caption style)
- Price displayed prominently with gold color, sale price with strikethrough
- Pack size as a subtle muted tag
- Badge (bestseller/hot/new) displayed as a floating pill in the top-left corner with bold colors
- Heart button: Larger, top-right, with Instagram-style double-tap animation
- "Add to Cart" button: Full-width at the bottom of the card, gold gradient, pill-shaped
- Quantity controls: Sleek inline stepper replacing the add button
- Subtle entrance animation (fade-up) as cards scroll into view

#### 2F. Product List -- Cleaner Section Breaks (`src/components/ProductList.tsx`)

- Category headers: Large serif text with a thin gold line
- Subcategory headers: Bold uppercase with letter-spacing, subtle left gold bar accent
- 2-column grid on mobile (compact Instagram grid), 3 on tablet, 4 on desktop
- More vertical spacing between sections
- Subtle fade-in animation for sections

#### 2G. Search Bar -- Rounded, Floating Style (`src/components/SearchBar.tsx`)

- Larger, more prominent search bar
- Floating style with shadow (not flat)
- Rounded-full with larger padding
- Gold magnifying glass icon
- Clear button more prominent
- Subtle focus ring animation

#### 2H. Bottom Nav -- Floating Island Style (`src/components/BottomNav.tsx`)

- Floating pill at the bottom center (not full-width bar)
- Rounded-full with larger border-radius
- Glassmorphism with strong blur
- Cart icon with item count badge (gold)
- Favorites icon with count
- More compact but tappable
- Shadow for floating effect
- Margin from bottom edge

#### 2I. Cart Drawer -- Full Premium Experience (`src/components/CartDrawer.tsx`)

- Slide up from bottom with spring animation
- Each cart item as a mini card with subtle shadow
- Swipe-to-delete gesture feel (slide left to reveal delete)
- Large gold total at bottom
- "Checkout" button full-width, gold gradient, rounded-full
- Empty state: Instagram-style illustration placeholder

#### 2J. Checkout Form -- Refined (`src/components/CheckoutForm.tsx`)

- Larger inputs with rounded-2xl
- Gold accent focus rings
- WhatsApp button: Full green gradient, larger, with icon
- Order summary: Card with gold border accent

#### 2K. Favorites List -- Consistent (`src/components/FavoritesList.tsx`)

- Same card style as cart items
- Gold "Add" buttons
- Clean empty state

---

### Technical Summary

```text
Files Modified (12):
  src/index.css                    -- New Instagram-inspired visual system, animations
  tailwind.config.ts               -- Extended animations, new utilities
  src/data/products.ts             -- Remove 14 cheap products (Rs.10/15)
  src/components/HeroSection.tsx   -- Stories-style hero with category circles
  src/components/TopPicks.tsx      -- Reels-grid style featured products
  src/components/CategoryNav.tsx   -- Underline tab indicator, frosted glass
  src/components/ProductCard.tsx   -- Full-width Instagram post style cards
  src/components/ProductList.tsx   -- Cleaner grid, 2-col mobile, fade animations
  src/components/SearchBar.tsx     -- Floating rounded search
  src/components/BottomNav.tsx     -- Floating island pill
  src/components/CartDrawer.tsx    -- Premium slide-up cart
  src/components/CheckoutForm.tsx  -- Refined form with gold accents
  src/components/FavoritesList.tsx -- Consistent premium cards
  src/pages/Index.tsx              -- Layout adjustments for new components
```

### Design Principles Applied
- **Bold typography**: Large serif headings, tight line heights, high contrast
- **Edge-to-edge cards**: No wasted padding, content fills the screen
- **Gold as highlight, not dominant**: Used sparingly for prices, badges, CTAs
- **Depth through shadows**: No borders, only elevation via box-shadows
- **Micro-interactions**: Hover lifts, tap scales, entrance animations
- **Instagram grid**: 2-column on mobile for compact browsing
- **Floating UI**: Bottom nav as a floating island, search bar elevated
- **Story highlights**: Category circles at the top like Instagram stories
