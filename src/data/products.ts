export interface Product {
  id: string;
  name: string;
  packSize: string;
  mrp: number;
  salePrice?: number;
  category: string;
  image?: string;
  badge?: 'sale' | 'new' | 'hot' | 'bestseller';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

// ONLY 3 categories: Ice Creams & Cakes, Dairy, Namkeen
export const categories: Category[] = [
  { id: "ice-cream", name: "Ice Creams & Cakes", icon: "🍦" },
  { id: "dairy", name: "Dairy", icon: "🥛" },
  { id: "namkeen", name: "Namkeen", icon: "🍿" },
];

// Masqati image base URLs
const MASQATI_BASE = "https://masqati.com/Content/img";
const goodsImg = (id: number) => `${MASQATI_BASE}/goods_img/${id}.png`;
const featureImg = (id: number) => `${MASQATI_BASE}/feature_img/${id}.png`;

// Reliable placeholder images for Namkeen
const placeholder = (text: string, bg = "F5F1EB", fg = "1E3A5F") =>
  `https://placehold.co/400x400/${bg}/${fg}?text=${encodeURIComponent(text)}`;

const namkeenImages = {
  namkeenMix: placeholder("Namkeen+Mix", "D2B48C", "333"),
  bhujia: placeholder("Bhujia", "CD853F", "FFF"),
  moongDal: placeholder("Moong+Dal", "DAA520", "333"),
  khattaMeetha: placeholder("Khatta+Meetha", "DEB887", "333"),
  mathri: placeholder("Mathri", "DEB887", "333"),
  alooBhujia: placeholder("Aloo+Bhujia", "B8860B", "FFF"),
};

// Cake placeholder images
const cakeImages = {
  fruitCake: placeholder("Fruit+Cake", "FFB6C1", "333"),
  plumCake: placeholder("Plum+Cake", "8B4513", "FFF"),
  chocolateCake: placeholder("Chocolate+Cake", "4A2C2A", "FFF"),
  blackForest: placeholder("Black+Forest", "2C1810", "FFF"),
};

// Real Masqati Products - ONLY Ice Creams & Cakes, Dairy, Namkeen
export const products: Product[] = [
  // ==================== ICE CREAMS & CAKES ====================
  // Ice Creams
  { id: "ic1", name: "Badam Pista Kulfi", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: goodsImg(1), badge: "bestseller" },
  { id: "ic2", name: "Badam Milk Kulfi", packSize: "1 Piece", mrp: 35, category: "ice-cream", image: goodsImg(2), badge: "hot" },
  { id: "ic3", name: "Butter Scotch Cone", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: goodsImg(3) },
  { id: "ic4", name: "Choco Kulfi", packSize: "1 Piece", mrp: 15, category: "ice-cream", image: goodsImg(4), badge: "bestseller" },
  { id: "ic5", name: "Choco Bar", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: goodsImg(5), badge: "hot" },
  { id: "ic6", name: "Family Pack Ice Cream", packSize: "4 Litre Tub", mrp: 1500, category: "ice-cream", image: goodsImg(6), badge: "bestseller" },
  { id: "ic7", name: "Mango Kulfi", packSize: "1 Piece", mrp: 20, category: "ice-cream", image: goodsImg(1), badge: "hot" },
  { id: "ic8", name: "Mango Milk Ice", packSize: "1 Piece", mrp: 40, category: "ice-cream", image: goodsImg(2) },
  { id: "ic9", name: "Matka Kulfi", packSize: "1 Piece", mrp: 50, category: "ice-cream", image: goodsImg(1), badge: "bestseller" },
  { id: "ic10", name: "Orange Duet", packSize: "1 Piece", mrp: 15, category: "ice-cream", image: goodsImg(3) },
  { id: "ic11", name: "Pista Kulfi", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: goodsImg(1), badge: "hot" },
  { id: "ic12", name: "Rajbhog Ice Cream", packSize: "1 Piece", mrp: 30, category: "ice-cream", image: goodsImg(2) },
  { id: "ic13", name: "Kesar Kulfi", packSize: "1 Piece", mrp: 30, category: "ice-cream", image: goodsImg(1), badge: "bestseller" },
  { id: "ic14", name: "Vanilla Cone", packSize: "1 Piece", mrp: 20, category: "ice-cream", image: goodsImg(3) },
  { id: "ic15", name: "Strawberry Cone", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: goodsImg(3), badge: "new" },
  { id: "ic16", name: "Chocolate Cone", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: goodsImg(3) },
  { id: "ic17", name: "Malai Kulfi", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: goodsImg(1), badge: "hot" },
  { id: "ic18", name: "Rose Kulfi", packSize: "1 Piece", mrp: 20, category: "ice-cream", image: goodsImg(1) },
  { id: "ic19", name: "Vanilla Cup", packSize: "100ml", mrp: 30, category: "ice-cream", image: goodsImg(4) },
  { id: "ic20", name: "Strawberry Cup", packSize: "100ml", mrp: 30, category: "ice-cream", image: goodsImg(4), badge: "new" },
  { id: "ic21", name: "Chocolate Cup", packSize: "100ml", mrp: 35, category: "ice-cream", image: goodsImg(4), badge: "bestseller" },
  { id: "ic22", name: "Butter Scotch Cup", packSize: "100ml", mrp: 35, category: "ice-cream", image: goodsImg(4) },
  { id: "ic23", name: "Mango Dolly", packSize: "1 Piece", mrp: 10, category: "ice-cream", image: goodsImg(5), badge: "hot" },
  { id: "ic24", name: "Orange Dolly", packSize: "1 Piece", mrp: 10, category: "ice-cream", image: goodsImg(5) },
  { id: "ic25", name: "Cola Candy", packSize: "1 Piece", mrp: 5, category: "ice-cream", image: goodsImg(5) },
  { id: "ic26", name: "Family Pack - Vanilla", packSize: "750ml", mrp: 250, category: "ice-cream", image: goodsImg(6) },
  { id: "ic27", name: "Family Pack - Strawberry", packSize: "750ml", mrp: 250, category: "ice-cream", image: goodsImg(6) },
  { id: "ic28", name: "Family Pack - Chocolate", packSize: "750ml", mrp: 280, category: "ice-cream", image: goodsImg(6), badge: "bestseller" },
  { id: "ic29", name: "Family Pack - Butter Scotch", packSize: "750ml", mrp: 280, category: "ice-cream", image: goodsImg(6) },
  { id: "ic30", name: "Party Pack - Assorted", packSize: "2 Litre", mrp: 650, category: "ice-cream", image: goodsImg(6), badge: "hot" },
  
  // Cakes (part of ice-cream category)
  { id: "ck1", name: "Fruit Cake", packSize: "500g", mrp: 350, category: "ice-cream", image: cakeImages.fruitCake, badge: "bestseller" },
  { id: "ck2", name: "Plum Cake", packSize: "500g", mrp: 380, category: "ice-cream", image: cakeImages.plumCake, badge: "new" },
  { id: "ck3", name: "Chocolate Cake", packSize: "500g", mrp: 400, category: "ice-cream", image: cakeImages.chocolateCake, badge: "hot" },
  { id: "ck4", name: "Black Forest Cake", packSize: "500g", mrp: 450, category: "ice-cream", image: cakeImages.blackForest, badge: "bestseller" },
  { id: "ck5", name: "Fruit Cake", packSize: "1 Kg", mrp: 650, category: "ice-cream", image: cakeImages.fruitCake },
  { id: "ck6", name: "Chocolate Cake", packSize: "1 Kg", mrp: 750, category: "ice-cream", image: cakeImages.chocolateCake, badge: "hot" },

  // ==================== DAIRY PRODUCTS ====================
  { id: "d1", name: "Fresh Toned Milk", packSize: "500ml", mrp: 38, category: "dairy", image: featureImg(1), badge: "bestseller" },
  { id: "d2", name: "Fresh Toned Milk", packSize: "1 Litre", mrp: 75, category: "dairy", image: featureImg(1) },
  { id: "d3", name: "Fresh Whole Milk", packSize: "500ml", mrp: 50, category: "dairy", image: featureImg(1), badge: "hot" },
  { id: "d4", name: "Fresh Whole Milk", packSize: "1 Litre", mrp: 100, category: "dairy", image: featureImg(1) },
  { id: "d5", name: "Fresh Curd (Dahi)", packSize: "200g", mrp: 25, category: "dairy", image: featureImg(2) },
  { id: "d6", name: "Fresh Curd (Dahi)", packSize: "400g", mrp: 45, category: "dairy", image: featureImg(2), badge: "bestseller" },
  { id: "d7", name: "Fresh Curd (Dahi)", packSize: "1 Kg", mrp: 95, category: "dairy", image: featureImg(2) },
  { id: "d8", name: "Pure Desi Ghee", packSize: "200g", mrp: 180, category: "dairy", image: featureImg(3), badge: "hot" },
  { id: "d9", name: "Pure Desi Ghee", packSize: "500g", mrp: 420, category: "dairy", image: featureImg(3) },
  { id: "d10", name: "Pure Desi Ghee", packSize: "1 Kg", mrp: 820, category: "dairy", image: featureImg(3), badge: "bestseller" },
  { id: "d11", name: "Fresh Butter", packSize: "100g", mrp: 60, category: "dairy", image: featureImg(4) },
  { id: "d12", name: "Fresh Butter", packSize: "200g", mrp: 115, category: "dairy", image: featureImg(4) },
  { id: "d13", name: "Fresh Butter", packSize: "500g", mrp: 280, category: "dairy", image: featureImg(4), badge: "hot" },
  { id: "d14", name: "Table Butter (Salted)", packSize: "100g", mrp: 55, category: "dairy", image: featureImg(12) },
  { id: "d15", name: "Table Butter (Salted)", packSize: "200g", mrp: 105, category: "dairy", image: featureImg(12) },
  { id: "d16", name: "Fresh Paneer", packSize: "200g", mrp: 90, category: "dairy", image: featureImg(5), badge: "bestseller" },
  { id: "d17", name: "Fresh Paneer", packSize: "500g", mrp: 210, category: "dairy", image: featureImg(5) },
  { id: "d18", name: "Fresh Paneer", packSize: "1 Kg", mrp: 400, category: "dairy", image: featureImg(5), badge: "hot" },
  { id: "d19", name: "Khowa (Mawa)", packSize: "250g", mrp: 150, category: "dairy", image: featureImg(6) },
  { id: "d20", name: "Khowa (Mawa)", packSize: "500g", mrp: 290, category: "dairy", image: featureImg(6), badge: "bestseller" },
  { id: "d21", name: "Khowa (Mawa)", packSize: "1 Kg", mrp: 560, category: "dairy", image: featureImg(6) },
  { id: "d22", name: "Fresh Buttermilk (Chaas)", packSize: "200ml", mrp: 15, category: "dairy", image: featureImg(7) },
  { id: "d23", name: "Fresh Buttermilk (Chaas)", packSize: "500ml", mrp: 30, category: "dairy", image: featureImg(7), badge: "hot" },
  { id: "d24", name: "Flavoured Curd - Mango", packSize: "100g", mrp: 25, category: "dairy", image: featureImg(9), badge: "new" },
  { id: "d25", name: "Flavoured Curd - Strawberry", packSize: "100g", mrp: 25, category: "dairy", image: featureImg(9), badge: "new" },
  { id: "d26", name: "Flavoured Milk - Rose", packSize: "200ml", mrp: 30, category: "dairy", image: featureImg(10) },
  { id: "d27", name: "Flavoured Milk - Badam", packSize: "200ml", mrp: 35, category: "dairy", image: featureImg(10), badge: "hot" },
  { id: "d28", name: "Flavoured Milk - Chocolate", packSize: "200ml", mrp: 35, category: "dairy", image: featureImg(10) },
  { id: "d29", name: "Fresh Lassi - Sweet", packSize: "200ml", mrp: 25, category: "dairy", image: featureImg(11), badge: "bestseller" },
  { id: "d30", name: "Fresh Lassi - Mango", packSize: "200ml", mrp: 30, category: "dairy", image: featureImg(11), badge: "hot" },
  { id: "d31", name: "Fresh Lassi - Rose", packSize: "200ml", mrp: 28, category: "dairy", image: featureImg(11) },
  { id: "d32", name: "Fresh Cream", packSize: "200ml", mrp: 85, category: "dairy", image: featureImg(8) },
  { id: "d33", name: "Fresh Cream", packSize: "500ml", mrp: 200, category: "dairy", image: featureImg(8), badge: "hot" },

  // ==================== NAMKEEN ONLY (No Sweets) ====================
  { id: "n1", name: "Namkeen Mix", packSize: "200g", mrp: 60, category: "namkeen", image: namkeenImages.namkeenMix },
  { id: "n2", name: "Namkeen Mix", packSize: "500g", mrp: 140, category: "namkeen", image: namkeenImages.namkeenMix, badge: "bestseller" },
  { id: "n3", name: "Bhujia Sev", packSize: "200g", mrp: 55, category: "namkeen", image: namkeenImages.bhujia },
  { id: "n4", name: "Bhujia Sev", packSize: "500g", mrp: 130, category: "namkeen", image: namkeenImages.bhujia, badge: "hot" },
  { id: "n5", name: "Aloo Bhujia", packSize: "200g", mrp: 50, category: "namkeen", image: namkeenImages.alooBhujia },
  { id: "n6", name: "Aloo Bhujia", packSize: "500g", mrp: 120, category: "namkeen", image: namkeenImages.alooBhujia, badge: "bestseller" },
  { id: "n7", name: "Moong Dal", packSize: "200g", mrp: 65, category: "namkeen", image: namkeenImages.moongDal, badge: "bestseller" },
  { id: "n8", name: "Moong Dal", packSize: "500g", mrp: 150, category: "namkeen", image: namkeenImages.moongDal },
  { id: "n9", name: "Khatta Meetha", packSize: "200g", mrp: 55, category: "namkeen", image: namkeenImages.khattaMeetha },
  { id: "n10", name: "Khatta Meetha", packSize: "500g", mrp: 130, category: "namkeen", image: namkeenImages.khattaMeetha, badge: "hot" },
  { id: "n11", name: "Mathri", packSize: "250g", mrp: 70, category: "namkeen", image: namkeenImages.mathri, badge: "hot" },
  { id: "n12", name: "Mathri", packSize: "500g", mrp: 135, category: "namkeen", image: namkeenImages.mathri },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};
