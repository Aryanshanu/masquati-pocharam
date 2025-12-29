export interface Product {
  id: string;
  name: string;
  packSize: string;
  mrp: number;
  salePrice?: number;
  category: string;
  subcategory: string;
  badge?: 'bestseller' | 'hot' | 'new' | 'sale';
  validity?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "ice-cream", name: "Ice Creams & Cakes", icon: "🍦" },
  { id: "namkeen", name: "Namkeens & Snacks", icon: "🍿" },
  { id: "dairy", name: "Dairy Products", icon: "🥛" },
  { id: "others", name: "Sweets, Bakery & More", icon: "🍪" },
];

export const subcategories: { [key: string]: string[] } = {
  "ice-cream": ["Ice Cream Cups", "Ice Cream Cakes", "Sticks", "Novelties", "Cones", "Premium Sticks", "Bulk Ripples"],
  "namkeen": ["Namkeens", "Mini Snacks"],
  "dairy": ["Fresh Milk", "Long Life Milk", "Curd", "Ghee"],
  "others": ["Paneer", "Khowa", "Butter", "Cream", "Flavoured Milk", "Beverages", "Sweets", "Biscuits", "Cookies", "Bread"],
};

export const products: Product[] = [
  // ==================== CATEGORY 1: ICE CREAM CUPS ====================
  // Vanilla (5 sizes)
  { id: "ic-vanilla-50ml", name: "Vanilla Cup", packSize: "50ml", mrp: 10, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-vanilla-100ml", name: "Vanilla Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-vanilla-125ml", name: "Vanilla Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-vanilla-500ml", name: "Vanilla Cup", packSize: "500ml", mrp: 200, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-vanilla-1l", name: "Vanilla Cup", packSize: "1 Litre", mrp: 400, category: "ice-cream", subcategory: "Ice Cream Cups", badge: "hot", validity: "180 Days" },
  
  // Strawberry (5 sizes)
  { id: "ic-strawberry-50ml", name: "Strawberry Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-strawberry-100ml", name: "Strawberry Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-strawberry-125ml", name: "Strawberry Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-strawberry-500ml", name: "Strawberry Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-strawberry-1l", name: "Strawberry Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Butter Scotch (5 sizes)
  { id: "ic-butterscotch-50ml", name: "Butter Scotch Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-butterscotch-100ml", name: "Butter Scotch Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-butterscotch-125ml", name: "Butter Scotch Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-butterscotch-500ml", name: "Butter Scotch Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", badge: "bestseller", validity: "180 Days" },
  { id: "ic-butterscotch-1l", name: "Butter Scotch Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Green Pista (5 sizes)
  { id: "ic-greenpista-50ml", name: "Green Pista Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-greenpista-100ml", name: "Green Pista Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-greenpista-125ml", name: "Green Pista Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-greenpista-500ml", name: "Green Pista Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-greenpista-1l", name: "Green Pista Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Tuty Fruity (5 sizes)
  { id: "ic-tutyfruity-50ml", name: "Tuty Fruity Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-tutyfruity-100ml", name: "Tuty Fruity Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-tutyfruity-125ml", name: "Tuty Fruity Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-tutyfruity-500ml", name: "Tuty Fruity Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-tutyfruity-1l", name: "Tuty Fruity Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Mango (5 sizes)
  { id: "ic-mango-50ml", name: "Mango Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-mango-100ml", name: "Mango Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-mango-125ml", name: "Mango Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-mango-500ml", name: "Mango Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-mango-1l", name: "Mango Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Choco Chips (5 sizes)
  { id: "ic-chocochips-50ml", name: "Choco Chips Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-chocochips-100ml", name: "Choco Chips Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-chocochips-125ml", name: "Choco Chips Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-chocochips-500ml", name: "Choco Chips Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", badge: "hot", validity: "180 Days" },
  { id: "ic-chocochips-1l", name: "Choco Chips Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Honey Almond (5 sizes)
  { id: "ic-honeyalmond-50ml", name: "Honey Almond Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-honeyalmond-100ml", name: "Honey Almond Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-honeyalmond-125ml", name: "Honey Almond Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-honeyalmond-500ml", name: "Honey Almond Cup", packSize: "500ml", mrp: 280, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-honeyalmond-1l", name: "Honey Almond Cup", packSize: "1 Litre", mrp: 560, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Anjeer (5 sizes)
  { id: "ic-anjeer-50ml", name: "Anjeer Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-anjeer-100ml", name: "Anjeer Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-anjeer-125ml", name: "Anjeer Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-anjeer-500ml", name: "Anjeer Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-anjeer-1l", name: "Anjeer Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  
  // Black Current (5 sizes)
  { id: "ic-blackcurrent-50ml", name: "Black Current Cup", packSize: "50ml", mrp: 15, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-blackcurrent-100ml", name: "Black Current Cup", packSize: "100ml", mrp: 30, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-blackcurrent-125ml", name: "Black Current Cup", packSize: "125ml", mrp: 60, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-blackcurrent-500ml", name: "Black Current Cup", packSize: "500ml", mrp: 250, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },
  { id: "ic-blackcurrent-1l", name: "Black Current Cup", packSize: "1 Litre", mrp: 500, category: "ice-cream", subcategory: "Ice Cream Cups", validity: "180 Days" },

  // ==================== ICE CREAM CAKES ====================
  { id: "cake-butterscotch-1kg", name: "Butterscotch Round Cake", packSize: "1 Kg", mrp: 700, category: "ice-cream", subcategory: "Ice Cream Cakes", badge: "bestseller", validity: "6 Months" },
  { id: "cake-chocolate-1kg", name: "Chocolate Round Cake", packSize: "1 Kg", mrp: 700, category: "ice-cream", subcategory: "Ice Cream Cakes", badge: "hot", validity: "6 Months" },
  { id: "cake-redvelvet-1kg", name: "Red Velvet Round Cake", packSize: "1 Kg", mrp: 700, category: "ice-cream", subcategory: "Ice Cream Cakes", badge: "new", validity: "6 Months" },

  // ==================== STICKS ====================
  { id: "stick-chacobar-dairy", name: "Chaco Bar (Dairy)", packSize: "1 pc", mrp: 30, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-minichoco-fd", name: "Mini Choco Bar (FD)", packSize: "1 pc", mrp: 15, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-mango-duet", name: "Mango Duet", packSize: "1 pc", mrp: 40, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-strawberry-duet", name: "Strawberry Duet", packSize: "1 pc", mrp: 40, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-orange-bar", name: "Orange Bar", packSize: "1 pc", mrp: 10, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-mango-bar", name: "Mango Bar", packSize: "1 pc", mrp: 10, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },
  { id: "stick-strawberry-bar", name: "Strawberry Bar", packSize: "1 pc", mrp: 10, category: "ice-cream", subcategory: "Sticks", validity: "6 Months" },

  // ==================== NOVELTIES ====================
  { id: "novelty-matka-kulfi", name: "Matka Kulfi", packSize: "1 pc", mrp: 70, category: "ice-cream", subcategory: "Novelties", badge: "bestseller", validity: "6 Months" },
  { id: "novelty-snowball-vanilla", name: "Snow Ball Vanilla", packSize: "1 pc", mrp: 40, category: "ice-cream", subcategory: "Novelties", validity: "6 Months" },
  { id: "novelty-plastic-cassata", name: "Plastic Cassata", packSize: "1 pc", mrp: 60, category: "ice-cream", subcategory: "Novelties", validity: "6 Months" },

  // ==================== CONES ====================
  { id: "cone-king-chocolate", name: "King Cone Chocolate", packSize: "1 pc", mrp: 60, category: "ice-cream", subcategory: "Cones", validity: "6 Months" },
  { id: "cone-king-butterscotch", name: "King Cone Butterscotch", packSize: "1 pc", mrp: 60, category: "ice-cream", subcategory: "Cones", validity: "6 Months" },

  // ==================== PREMIUM STICKS ====================
  { id: "premium-zafrani-kulfi", name: "Zafrani Kulfi Stick", packSize: "1 pc", mrp: 110, category: "ice-cream", subcategory: "Premium Sticks", badge: "hot", validity: "6 Months" },

  // ==================== BULK RIPPLES ====================
  { id: "ripple-mellojello-4l", name: "Mello Jello Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },
  { id: "ripple-strawberry-4l", name: "Strawberry Ripple Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },
  { id: "ripple-mango-4l", name: "Mango Ripple Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },
  { id: "ripple-chocolate-4l", name: "Chocolate Ripple Bulk", packSize: "4 Litre", mrp: 1450, category: "ice-cream", subcategory: "Bulk Ripples", validity: "6 Months" },

  // ==================== CATEGORY 2: NAMKEENS ====================
  { id: "namkeen-makai-churva", name: "Makai Churva", packSize: "200g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-poha-churva", name: "Poha Churva", packSize: "200g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-barik-sev", name: "Barik Sev", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-masala-sev", name: "Masala Sev", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-chana-dal", name: "Chana Dal", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-masala-phalli", name: "Masala Phalli", packSize: "250g", mrp: 100, category: "namkeen", subcategory: "Namkeens", badge: "bestseller", validity: "3 Months" },
  { id: "namkeen-moong-dal", name: "Moong Dal", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-chana-moth", name: "Chana Moth", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-dal-moth", name: "Dal Moth", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-namak-para", name: "Namak Para", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-sweet-para", name: "Sweet Para", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-methi-stick", name: "Methi Stick", packSize: "250g", mrp: 80, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },
  { id: "namkeen-allinone-mixture", name: "All In One Mixture", packSize: "250g", mrp: 70, category: "namkeen", subcategory: "Namkeens", validity: "3 Months" },

  // ==================== MINI SNACKS ====================
  { id: "mini-makai-chiwda", name: "Makai Chiwda", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-khatta-meetha", name: "Khatta Meetha", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-yummy-peanuts", name: "Yummy Peanuts", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-allinone", name: "All In One", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-spicy-tomato-rings", name: "Spicy Tomato Rings", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-spicy-wheels", name: "Spicy Wheels", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-pasta-snack", name: "Pasta Snack", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-happy-fries", name: "Happy Fries", packSize: "17g", mrp: 60, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-masala-phalli-pouch", name: "Masala Phalli Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-moong-dal-pouch", name: "Moong Dal Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-chana-moth-pouch", name: "Chana Moth Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },
  { id: "mini-dal-moth-pouch", name: "Dal Moth Pouch", packSize: "35g", mrp: 120, category: "namkeen", subcategory: "Mini Snacks", validity: "3 Months" },

  // ==================== CATEGORY 3: DAIRY - FRESH MILK ====================
  { id: "milk-whole-500ml", name: "Whole Milk", packSize: "500ml", mrp: 100, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },
  { id: "milk-whole-200ml", name: "Whole Milk", packSize: "200ml", mrp: 100, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },
  { id: "milk-toned-500ml", name: "Toned Milk", packSize: "500ml", mrp: 68, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },
  { id: "milk-toned-200ml", name: "Toned Milk", packSize: "200ml", mrp: 68, category: "dairy", subcategory: "Fresh Milk", validity: "48 Hours" },

  // ==================== LONG LIFE MILK ====================
  { id: "milk-tm-poly-500ml", name: "T.M. Poly Pack", packSize: "500ml", mrp: 68, category: "dairy", subcategory: "Long Life Milk", validity: "48 Hours" },
  { id: "milk-tm-poly-200ml", name: "T.M. Poly Pack", packSize: "200ml", mrp: 75, category: "dairy", subcategory: "Long Life Milk", validity: "48 Hours" },
  { id: "milk-tetra-whole-1l", name: "Tetra Pak Whole Milk", packSize: "1 Litre", mrp: 100, category: "dairy", subcategory: "Long Life Milk", validity: "90 Days" },
  { id: "milk-tetra-toned-1l", name: "Tetra Pak Toned Milk", packSize: "1 Litre", mrp: 80, category: "dairy", subcategory: "Long Life Milk", validity: "90 Days" },

  // ==================== CURD ====================
  { id: "curd-wm-10kg-bucket", name: "WM Curd Bucket", packSize: "10 Kg", mrp: 1200, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-wm-1000ml-pkt", name: "WM Curd Packet", packSize: "1000ml", mrp: 120, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-wm-500ml-pkt", name: "WM Curd Packet", packSize: "500ml", mrp: 60, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-wm-400ml-cup", name: "WM Curd Cup", packSize: "400ml", mrp: 55, category: "dairy", subcategory: "Curd", validity: "10 Days" },
  { id: "curd-wm-200ml-cup", name: "WM Curd Cup", packSize: "200ml", mrp: 30, category: "dairy", subcategory: "Curd", validity: "10 Days" },
  { id: "curd-wm-100ml-cup", name: "WM Curd Cup", packSize: "100ml", mrp: 18, category: "dairy", subcategory: "Curd", validity: "10 Days" },
  { id: "curd-tm-bulk-20kg", name: "TM Curd Bulk", packSize: "20 Kg", mrp: 1800, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-tm-bulk-10kg", name: "TM Curd Bulk", packSize: "10 Kg", mrp: 900, category: "dairy", subcategory: "Curd", validity: "7 Days" },
  { id: "curd-tm-bucket-1000ml", name: "TM Curd Bucket", packSize: "1000ml", mrp: 100, category: "dairy", subcategory: "Curd", validity: "7 Days" },

  // ==================== GHEE ====================
  { id: "ghee-buffalo-fb-1000ml", name: "Buffalo Ghee FB", packSize: "1000ml", mrp: 760, category: "dairy", subcategory: "Ghee", badge: "bestseller", validity: "12 Months" },
  { id: "ghee-buffalo-fb-500ml", name: "Buffalo Ghee FB", packSize: "500ml", mrp: 380, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-fb-200ml", name: "Buffalo Ghee FB", packSize: "200ml", mrp: 175, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-fb-100ml", name: "Buffalo Ghee FB", packSize: "100ml", mrp: 86, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-hb-1000ml", name: "Buffalo Ghee HB", packSize: "1000ml", mrp: 760, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-buffalo-hb-500ml", name: "Buffalo Ghee HB", packSize: "500ml", mrp: 380, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-cow-1000ml", name: "Pure Cow Ghee", packSize: "1000ml", mrp: 760, category: "dairy", subcategory: "Ghee", validity: "12 Months" },
  { id: "ghee-cow-500ml", name: "Pure Cow Ghee", packSize: "500ml", mrp: 380, category: "dairy", subcategory: "Ghee", validity: "12 Months" },

  // ==================== CATEGORY 4: OTHERS - PANEER ====================
  { id: "paneer-1000g", name: "Paneer", packSize: "1000g", mrp: 480, category: "others", subcategory: "Paneer", validity: "15 Days" },
  { id: "paneer-500g", name: "Paneer", packSize: "500g", mrp: 240, category: "others", subcategory: "Paneer", validity: "15 Days" },
  { id: "paneer-200g", name: "Paneer", packSize: "200g", mrp: 96, category: "others", subcategory: "Paneer", validity: "15 Days" },

  // ==================== KHOWA ====================
  { id: "khowa-1000g", name: "Khowa", packSize: "1000g", mrp: 500, category: "others", subcategory: "Khowa", validity: "10 Days" },
  { id: "khowa-500g", name: "Khowa", packSize: "500g", mrp: 250, category: "others", subcategory: "Khowa", validity: "10 Days" },
  { id: "khowa-200g", name: "Khowa", packSize: "200g", mrp: 100, category: "others", subcategory: "Khowa", validity: "10 Days" },

  // ==================== BUTTER ====================
  { id: "butter-table-500g", name: "Table Butter", packSize: "500g", mrp: 250, category: "others", subcategory: "Butter", validity: "6 Months" },
  { id: "butter-table-100g", name: "Table Butter", packSize: "100g", mrp: 50, category: "others", subcategory: "Butter", validity: "6 Months" },
  { id: "butter-white-cooking-1kg", name: "White Cooking Butter", packSize: "1 Kg", mrp: 500, category: "others", subcategory: "Butter", validity: "3 Months" },

  // ==================== CREAM ====================
  { id: "cream-fresh-1000g", name: "Fresh Cream", packSize: "1000g", mrp: 500, category: "others", subcategory: "Cream", validity: "15 Days" },
  { id: "cream-tetra-1l", name: "Tetra Pak Cream", packSize: "1 Litre", mrp: 300, category: "others", subcategory: "Cream", validity: "120 Days" },

  // ==================== FLAVOURED MILK ====================
  { id: "fm-badam-glass", name: "FM Badam Glass", packSize: "200ml", mrp: 40, category: "others", subcategory: "Flavoured Milk", validity: "90 Days" },
  { id: "fm-badam-tin", name: "FM Badam Tin", packSize: "200ml", mrp: 50, category: "others", subcategory: "Flavoured Milk", validity: "180 Days" },

  // ==================== BEVERAGES ====================
  { id: "beverage-mango-lassi", name: "Mango Lassi", packSize: "200ml", mrp: 25, category: "others", subcategory: "Beverages", validity: "7 Days" },
  { id: "beverage-sweet-lassi", name: "Sweet Lassi", packSize: "200ml", mrp: 25, category: "others", subcategory: "Beverages", validity: "7 Days" },
  { id: "beverage-butter-milk", name: "Butter Milk", packSize: "200ml", mrp: 20, category: "others", subcategory: "Beverages", validity: "7 Days" },

  // ==================== SWEETS ====================
  { id: "sweet-doodh-peda", name: "Doodh Peda", packSize: "200g", mrp: 200, category: "others", subcategory: "Sweets", badge: "bestseller", validity: "7 Days" },
  { id: "sweet-fresh-rabdi", name: "Fresh Rabdi", packSize: "100g", mrp: 40, category: "others", subcategory: "Sweets", validity: "3 Days" },
  { id: "sweet-gulab-jamun", name: "Gulab Jamun Small", packSize: "1 box", mrp: 300, category: "others", subcategory: "Sweets", validity: "7 Days" },
  { id: "sweet-soan-papdi", name: "Soan Papdi", packSize: "200g", mrp: 90, category: "others", subcategory: "Sweets", validity: "3 Months" },

  // ==================== BISCUITS ====================
  { id: "biscuit-osmania", name: "Osmania Biscuits", packSize: "200g", mrp: 120, category: "others", subcategory: "Biscuits", validity: "3 Months" },
  { id: "biscuit-fruit-200g", name: "Fruit Biscuits", packSize: "200g", mrp: 120, category: "others", subcategory: "Biscuits", validity: "3 Months" },
  { id: "biscuit-fruit-400g", name: "Fruit Biscuits", packSize: "400g", mrp: 180, category: "others", subcategory: "Biscuits", validity: "3 Months" },
  { id: "biscuit-zeera", name: "Zeera Biscuits", packSize: "200g", mrp: 100, category: "others", subcategory: "Biscuits", validity: "3 Months" },

  // ==================== COOKIES ====================
  { id: "cookie-kaju", name: "Kaju Biscuits", packSize: "200g", mrp: 150, category: "others", subcategory: "Cookies", validity: "3 Months" },
  { id: "cookie-badam", name: "Badam Biscuits", packSize: "200g", mrp: 150, category: "others", subcategory: "Cookies", validity: "3 Months" },
  { id: "cookie-pista", name: "Pista Biscuits", packSize: "200g", mrp: 150, category: "others", subcategory: "Cookies", validity: "3 Months" },

  // ==================== BREAD ====================
  { id: "bread-milk-400g", name: "Milk Bread", packSize: "400g", mrp: 50, category: "others", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-milk-200g", name: "Milk Bread", packSize: "200g", mrp: 30, category: "others", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-sandwich-800g", name: "Sandwich Bread", packSize: "800g", mrp: 80, category: "others", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-pav", name: "Pav", packSize: "200g", mrp: 30, category: "others", subcategory: "Bread", validity: "5 Days" },
  { id: "bread-bun", name: "Bun", packSize: "90g", mrp: 15, category: "others", subcategory: "Bread", validity: "5 Days" },
];

// Helper function to get products by category
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};

// Helper function to get products by subcategory
export const getProductsBySubcategory = (categoryId: string, subcategory: string): Product[] => {
  return products.filter((product) => product.category === categoryId && product.subcategory === subcategory);
};

// Get unique subcategories for a category
export const getSubcategoriesForCategory = (categoryId: string): string[] => {
  const categoryProducts = getProductsByCategory(categoryId);
  const subcats = [...new Set(categoryProducts.map(p => p.subcategory))];
  return subcats;
};
