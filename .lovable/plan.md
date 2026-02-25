

## Plan: Landing Page Hero Section + Specials Menu + Map Update

### Overview
Add a proper landing page hero section with brand info and imagery, add the full "Masqati Specials" food & beverages menu as a new category, and update the Google Maps location link.

---

### 1. Update Google Maps Location Link
**File: `src/components/Header.tsx`**
- Change the maps URL from the old short link to the new full Google Maps link provided

### 2. Create Hero/Landing Section Component
**File: `src/components/HeroSection.tsx`** (NEW)
- A visually rich hero section that appears at the top of the page (below header, above products)
- Content:
  - Large brand name "MASQATI" with tagline "50+ Years of Sweet Legacy"
  - "Pocharam, Ghatkesar" location text
  - Brief brand description: premium ice creams, dairy, namkeens, and now food & beverages
  - A Google Maps embed or styled map card with the location link
  - Call-to-action buttons: "Browse Menu" (scrolls down) and "Order on WhatsApp"
- Design: Uses the existing premium navy/gold theme, full-width, with a warm gradient background or pattern

### 3. Add "Masqati Specials" Category & Products
**File: `src/data/products.ts`**
- Add new category: `{ id: "specials", name: "Masqati Specials", icon: "🍽️" }`
- Add subcategories: "Chaat Specials", "Burgers", "Sandwiches & Sides", "Pizza", "Mocktails", "Shakes & Milkshakes"
- Add ALL products from the user's menu:
  - 15 Chaat items (Pani Puri to Cheese Pav Bhaji)
  - 4 Burgers
  - 8 Sandwiches & Sides
  - 9 Pizzas
  - 14 Mocktails (all at Rs.59)
  - 15 Shakes & Milkshakes
- Total: ~65 new products

### 4. Update Index Page Layout
**File: `src/pages/Index.tsx`**
- Import and render `HeroSection` between Header/CategoryNav and SearchBar/ProductList
- The hero shows by default; scrolling past it reveals the product catalogue

### 5. Update CategoryNav Default
- Set "specials" or keep "ice-cream" as default -- will keep "ice-cream" as default since Specials is a new addition, but it will appear as first or last tab in the nav

---

### Technical Details

```text
Files Created (1):
  src/components/HeroSection.tsx    -- Brand hero with logo, tagline, map card, CTA buttons

Files Modified (3):
  src/components/Header.tsx         -- Update Google Maps URL
  src/data/products.ts              -- Add "specials" category + ~65 new food products
  src/pages/Index.tsx               -- Add HeroSection component to page layout
```

### Hero Section Design
- Full-width section with navy background and subtle gold pattern/gradient
- Masqati logo centered (larger version)
- "50+ Years of Sweet Legacy" tagline in gold serif font
- Location card with embedded map preview (static image linking to Google Maps)
- Two CTA buttons: "Explore Menu" (gold gradient) and "WhatsApp Order" (green)
- Responsive: stacks vertically on mobile, side-by-side on desktop

### Specials Menu Structure
- Category appears in the nav alongside Ice Creams, Namkeens, Dairy, and Others
- Each subcategory (Chaat, Burgers, Pizza, etc.) has its own section header
- Mocktails all share the same price (Rs.59) with packSize "1 Glass"
- Shakes have varying prices, packSize "1 Glass"
- Food items use packSize "1 Plate" or "1 Piece" as appropriate
