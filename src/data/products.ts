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

// Categories matching Masqati website
export const categories: Category[] = [
  { id: "dairy", name: "Dairy", icon: "🥛" },
  { id: "ice-cream", name: "Ice Creams", icon: "🍦" },
  { id: "namkeen-sweets", name: "Namkeen & Sweets", icon: "🍬" },
  { id: "bakery", name: "Bakery", icon: "🥐" },
  { id: "chat", name: "Chat", icon: "🍲" },
];

// Masqati image base URLs
const MASQATI_BASE = "https://masqati.com/Content/img";
const goodsImg = (id: number) => `${MASQATI_BASE}/goods_img/${id}.png`;
const featureImg = (id: number) => `${MASQATI_BASE}/feature_img/${id}.png`;

// Placeholder images for categories without Masqati images
const placeholder = (keyword: string) => `https://images.unsplash.com/photo-${keyword}?w=400&h=400&fit=crop&auto=format`;

// High-quality food placeholder images
const sweetImages = {
  gulabJamun: placeholder("1666190064552-6fa9d3aa5c45"),
  rasgulla: placeholder("1601303516606-9b02815c2c5a"),
  kajuKatli: placeholder("1589647363585-f4a7d3877b10"),
  ladoo: placeholder("1598349326186-c1ea48ebb4a9"),
  barfi: placeholder("1590080875515-8a3a8dc5735e"),
  soanPapdi: placeholder("1605197788044-5f4a23e2e8e9"),
  jalebi: placeholder("1589301760435-e84a14bf0dbb"),
  imarti: placeholder("1589301760435-e84a14bf0dbb"),
  mysorePak: placeholder("1590080875515-8a3a8dc5735e"),
  peda: placeholder("1598349326186-c1ea48ebb4a9"),
  kheerKadam: placeholder("1601303516606-9b02815c2c5a"),
  namkeen: placeholder("1599490659213-e2c9d7d15ff3"),
  bhujia: placeholder("1599490659213-e2c9d7d15ff3"),
  mathri: placeholder("1599490659213-e2c9d7d15ff3"),
  samosa: placeholder("1601050690597-df0568f70950"),
};

const bakeryImages = {
  bread: placeholder("1509440159596-0249088772ff"),
  milkBread: placeholder("1598373182133-52452f7691ef"),
  brownBread: placeholder("1586444248902-2f64eddc13df"),
  bun: placeholder("1558961363-fa8fdf82db35"),
  toast: placeholder("1619535860434-ba1d8fa12536"),
  rusk: placeholder("1558303926-7ee5e8a7eab8"),
  cookies: placeholder("1499636136210-6f4ee915583e"),
  nankhatai: placeholder("1558303926-7ee5e8a7eab8"),
  cake: placeholder("1578985545062-69928b1d9587"),
  muffin: placeholder("1607958996333-41aef7caefaa"),
  croissant: placeholder("1555507036-ab1f4038808a"),
  puff: placeholder("1603532648955-039310d96a23"),
};

const chatImages = {
  paniPuri: placeholder("1601050690117-94f5f6fa8bd7"),
  bhelPuri: placeholder("1606491048802-8c8fa4a4f7a3"),
  sevPuri: placeholder("1601050690117-94f5f6fa8bd7"),
  dahiPuri: placeholder("1601050690117-94f5f6fa8bd7"),
  papdiChat: placeholder("1606491048802-8c8fa4a4f7a3"),
  ragda: placeholder("1601050690597-df0568f70950"),
  samosaChat: placeholder("1601050690597-df0568f70950"),
  alooTikki: placeholder("1601050690597-df0568f70950"),
  masala: placeholder("1596040033229-a9821ebd058d"),
  chutney: placeholder("1599490659213-e2c9d7d15ff3"),
  papdi: placeholder("1599490659213-e2c9d7d15ff3"),
};

// Real Masqati Products
export const products: Product[] = [
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

  // ==================== ICE CREAMS ====================
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

  // ==================== NAMKEEN & SWEETS ====================
  { id: "ns1", name: "Gulab Jamun", packSize: "6 Pieces", mrp: 120, category: "namkeen-sweets", image: sweetImages.gulabJamun, badge: "bestseller" },
  { id: "ns2", name: "Gulab Jamun", packSize: "12 Pieces", mrp: 220, category: "namkeen-sweets", image: sweetImages.gulabJamun },
  { id: "ns3", name: "Rasgulla", packSize: "6 Pieces", mrp: 100, category: "namkeen-sweets", image: sweetImages.rasgulla, badge: "hot" },
  { id: "ns4", name: "Rasgulla", packSize: "12 Pieces", mrp: 180, category: "namkeen-sweets", image: sweetImages.rasgulla },
  { id: "ns5", name: "Kaju Katli", packSize: "250g", mrp: 280, category: "namkeen-sweets", image: sweetImages.kajuKatli, badge: "bestseller" },
  { id: "ns6", name: "Kaju Katli", packSize: "500g", mrp: 540, category: "namkeen-sweets", image: sweetImages.kajuKatli },
  { id: "ns7", name: "Motichoor Ladoo", packSize: "500g", mrp: 280, category: "namkeen-sweets", image: sweetImages.ladoo, badge: "hot" },
  { id: "ns8", name: "Besan Ladoo", packSize: "500g", mrp: 260, category: "namkeen-sweets", image: sweetImages.ladoo },
  { id: "ns9", name: "Barfi Assorted", packSize: "500g", mrp: 320, category: "namkeen-sweets", image: sweetImages.barfi, badge: "bestseller" },
  { id: "ns10", name: "Soan Papdi", packSize: "250g", mrp: 120, category: "namkeen-sweets", image: sweetImages.soanPapdi },
  { id: "ns11", name: "Soan Papdi", packSize: "500g", mrp: 220, category: "namkeen-sweets", image: sweetImages.soanPapdi, badge: "hot" },
  { id: "ns12", name: "Jalebi Fresh", packSize: "500g", mrp: 180, category: "namkeen-sweets", image: sweetImages.jalebi, badge: "bestseller" },
  { id: "ns13", name: "Imarti Fresh", packSize: "500g", mrp: 200, category: "namkeen-sweets", image: sweetImages.imarti },
  { id: "ns14", name: "Mysore Pak", packSize: "250g", mrp: 180, category: "namkeen-sweets", image: sweetImages.mysorePak },
  { id: "ns15", name: "Peda", packSize: "250g", mrp: 200, category: "namkeen-sweets", image: sweetImages.peda, badge: "hot" },
  { id: "ns16", name: "Kheer Kadam", packSize: "6 Pieces", mrp: 150, category: "namkeen-sweets", image: sweetImages.kheerKadam, badge: "new" },
  { id: "ns17", name: "Namkeen Mix", packSize: "200g", mrp: 60, category: "namkeen-sweets", image: sweetImages.namkeen },
  { id: "ns18", name: "Namkeen Mix", packSize: "500g", mrp: 140, category: "namkeen-sweets", image: sweetImages.namkeen, badge: "bestseller" },
  { id: "ns19", name: "Bhujia Sev", packSize: "200g", mrp: 55, category: "namkeen-sweets", image: sweetImages.bhujia },
  { id: "ns20", name: "Bhujia Sev", packSize: "500g", mrp: 130, category: "namkeen-sweets", image: sweetImages.bhujia, badge: "hot" },
  { id: "ns21", name: "Aloo Bhujia", packSize: "200g", mrp: 50, category: "namkeen-sweets", image: sweetImages.bhujia },
  { id: "ns22", name: "Moong Dal", packSize: "200g", mrp: 65, category: "namkeen-sweets", image: sweetImages.namkeen, badge: "bestseller" },
  { id: "ns23", name: "Khatta Meetha", packSize: "200g", mrp: 55, category: "namkeen-sweets", image: sweetImages.namkeen },
  { id: "ns24", name: "Mathri", packSize: "250g", mrp: 70, category: "namkeen-sweets", image: sweetImages.mathri, badge: "hot" },
  { id: "ns25", name: "Samosa (Frozen)", packSize: "6 Pieces", mrp: 90, category: "namkeen-sweets", image: sweetImages.samosa },

  // ==================== BAKERY ====================
  { id: "b1", name: "Fresh Bread", packSize: "400g", mrp: 35, category: "bakery", image: bakeryImages.bread, badge: "bestseller" },
  { id: "b2", name: "Milk Bread", packSize: "400g", mrp: 45, category: "bakery", image: bakeryImages.milkBread },
  { id: "b3", name: "Brown Bread", packSize: "400g", mrp: 50, category: "bakery", image: bakeryImages.brownBread, badge: "hot" },
  { id: "b4", name: "Multigrain Bread", packSize: "400g", mrp: 60, category: "bakery", image: bakeryImages.brownBread },
  { id: "b5", name: "Pav Bun", packSize: "8 Pieces", mrp: 30, category: "bakery", image: bakeryImages.bun, badge: "bestseller" },
  { id: "b6", name: "Burger Bun", packSize: "4 Pieces", mrp: 40, category: "bakery", image: bakeryImages.bun },
  { id: "b7", name: "Hot Dog Bun", packSize: "4 Pieces", mrp: 45, category: "bakery", image: bakeryImages.bun, badge: "new" },
  { id: "b8", name: "Butter Toast", packSize: "200g", mrp: 40, category: "bakery", image: bakeryImages.toast },
  { id: "b9", name: "Rusk Plain", packSize: "300g", mrp: 55, category: "bakery", image: bakeryImages.rusk, badge: "hot" },
  { id: "b10", name: "Rusk Elaichi", packSize: "300g", mrp: 65, category: "bakery", image: bakeryImages.rusk },
  { id: "b11", name: "Cake Rusk", packSize: "200g", mrp: 50, category: "bakery", image: bakeryImages.rusk, badge: "bestseller" },
  { id: "b12", name: "Khari Biscuit", packSize: "200g", mrp: 45, category: "bakery", image: bakeryImages.cookies },
  { id: "b13", name: "Fan Cookies", packSize: "250g", mrp: 70, category: "bakery", image: bakeryImages.cookies, badge: "hot" },
  { id: "b14", name: "Nankhatai", packSize: "250g", mrp: 80, category: "bakery", image: bakeryImages.nankhatai, badge: "bestseller" },
  { id: "b15", name: "Fruit Cake", packSize: "200g", mrp: 90, category: "bakery", image: bakeryImages.cake },
  { id: "b16", name: "Plum Cake", packSize: "200g", mrp: 95, category: "bakery", image: bakeryImages.cake, badge: "new" },
  { id: "b17", name: "Muffin Chocolate", packSize: "2 Pieces", mrp: 60, category: "bakery", image: bakeryImages.muffin },
  { id: "b18", name: "Croissant Plain", packSize: "2 Pieces", mrp: 70, category: "bakery", image: bakeryImages.croissant, badge: "hot" },
  { id: "b19", name: "Puff Veg", packSize: "2 Pieces", mrp: 50, category: "bakery", image: bakeryImages.puff, badge: "bestseller" },
  { id: "b20", name: "Patties Veg", packSize: "2 Pieces", mrp: 55, category: "bakery", image: bakeryImages.puff },

  // ==================== CHAT ====================
  { id: "c1", name: "Pani Puri Kit", packSize: "Complete Set", mrp: 80, category: "chat", image: chatImages.paniPuri, badge: "bestseller" },
  { id: "c2", name: "Bhel Puri Kit", packSize: "Complete Set", mrp: 70, category: "chat", image: chatImages.bhelPuri },
  { id: "c3", name: "Sev Puri Kit", packSize: "Complete Set", mrp: 75, category: "chat", image: chatImages.sevPuri, badge: "hot" },
  { id: "c4", name: "Dahi Puri Kit", packSize: "Complete Set", mrp: 85, category: "chat", image: chatImages.dahiPuri },
  { id: "c5", name: "Papdi Chat Kit", packSize: "Complete Set", mrp: 90, category: "chat", image: chatImages.papdiChat, badge: "bestseller" },
  { id: "c6", name: "Ragda Pattice", packSize: "2 Servings", mrp: 100, category: "chat", image: chatImages.ragda },
  { id: "c7", name: "Samosa Chat Kit", packSize: "4 Pieces + Chutneys", mrp: 120, category: "chat", image: chatImages.samosaChat, badge: "hot" },
  { id: "c8", name: "Aloo Tikki", packSize: "4 Pieces", mrp: 80, category: "chat", image: chatImages.alooTikki },
  { id: "c9", name: "Chat Masala", packSize: "100g", mrp: 35, category: "chat", image: chatImages.masala, badge: "bestseller" },
  { id: "c10", name: "Green Chutney", packSize: "200g", mrp: 40, category: "chat", image: chatImages.chutney },
  { id: "c11", name: "Sweet Chutney", packSize: "200g", mrp: 45, category: "chat", image: chatImages.chutney, badge: "hot" },
  { id: "c12", name: "Papdi (Ready)", packSize: "200g", mrp: 50, category: "chat", image: chatImages.papdi },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};
