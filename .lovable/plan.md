

## Fix Maps Link + Add "Top Picks" Landing Section

### 1. Fix Google Maps Link (Broken URL)

**Files: `src/components/Header.tsx`, `src/components/HeroSection.tsx`**

The current long Google Maps URL is broken. Replace it everywhere with the short working link:
`https://maps.app.goo.gl/YhsGzpvjSL4ti5NE6`

### 2. Create "Top Picks" Featured Section on Landing Page

**New file: `src/components/TopPicks.tsx`**

A visually engaging section placed between the HeroSection and the category navigation, showcasing ~10 hand-picked products across themed collections. This grabs attention immediately when users land on the page.

**Themed Collections (horizontal scroll cards):**
- **Summer Specials** -- Mango Cup (500ml), Watermelon Slush, Lemon Mint Cooler, Strawberry Milkshake
- **Masqati Specials** -- Pani Puri, Pav Bhaji, Double Cheese Margherita, Ferrero Rocher Thick Shake
- **Kids Favourites** -- Choco Bar, Vanilla Cup (100ml), Oreo Shake

**Design:**
- Section title: "Top Picks" with a gold underline, in the premium display font
- 3 themed rows, each with a collection label (e.g., "Summer Specials") and horizontally scrollable product cards
- Each card shows: product name, price, category tag, and an "Add" button
- Cards use the same premium styling (gold left accent, rounded-2xl, hover elevation)
- Compact card variant -- slightly smaller than the full ProductCard since these are highlights

### 3. Update Index Layout

**File: `src/pages/Index.tsx`**

- Import and render `TopPicks` between `HeroSection` and `CategoryNav`
- The flow becomes: Header -> Hero -> Top Picks -> Category Nav -> Search -> Products

### 4. Add Helper for Featured Products

**File: `src/data/products.ts`**

- Export a `featuredProducts` object mapping collection names to arrays of product IDs:

```text
{
  "Summer Specials": ["ic-mango-500ml", "sp-watermelon-slush", "sp-lemon-mint-cooler", "sp-strawberry-milkshake"],
  "Masqati Specials": ["sp-pani-puri", "sp-pav-bhaji", "sp-double-cheese-margherita", "sp-ferrero-rocher-shake"],
  "Kids Favourites": ["stick-chacobar-dairy", "ic-vanilla-100ml", "sp-oreo-shake"]
}
```

- Export a `getProductById` helper function

---

### Technical Summary

```text
Files Created (1):
  src/components/TopPicks.tsx       -- Featured products section with themed collections

Files Modified (3):
  src/components/Header.tsx         -- Fix maps URL to short link
  src/components/HeroSection.tsx    -- Fix maps URL to short link
  src/data/products.ts              -- Add featuredProducts map + getProductById helper
  src/pages/Index.tsx               -- Insert TopPicks between Hero and CategoryNav
```

### TopPicks Component Design
- Navy/dark background section (matches hero) with gold accents
- Each collection: gold label, horizontal scroll row of compact cards
- Cards: white bg, gold left border, product name + price + gold "Add" pill button
- Smooth horizontal scroll with snap points on mobile
- Tapping a card's "Add" button adds directly to cart (uses CartContext)
- Heart/favorite toggle on each card (uses FavoritesContext)
