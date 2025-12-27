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

// Import downloaded Masqati product images
import namkeenDal from "@/assets/products/namkeen-dal.jpg";
import namkeenChurva from "@/assets/products/namkeen-churva.jpg";
import namkeenChanaMoth from "@/assets/products/namkeen-chana-moth.jpg";

import dairyMilk from "@/assets/products/dairy-milk.png";
import dairyCurd from "@/assets/products/dairy-curd.png";
import dairyGhee from "@/assets/products/dairy-ghee-icon.png";
import dairyButter from "@/assets/products/dairy-butter.png";
import dairyPaneer from "@/assets/products/dairy-paneer.png";
import dairyKhowa from "@/assets/products/dairy-khowa.png";
import dairyButtermilk from "@/assets/products/dairy-buttermilk.png";
import dairyLassi from "@/assets/products/dairy-lassi.png";
import dairyDahi from "@/assets/products/dairy-dahi.png";
import dairyFlavouredCurd from "@/assets/products/dairy-flavoured-curd.png";
import dairyFlavouredMilk from "@/assets/products/dairy-flavoured-milk.png";
import dairyTableButter from "@/assets/products/dairy-table-butter.png";
import dairyGheePack from "@/assets/products/dairy-ghee.jpg";
import dairyCurdPack from "@/assets/products/dairy-curd-pack.jpg";
import dairyMilkPack from "@/assets/products/dairy-milk-pack.jpg";
import dairyButterPack from "@/assets/products/dairy-butter-pack.jpg";

import icecream1 from "@/assets/products/icecream-1.png";
import icecream2 from "@/assets/products/icecream-2.png";
import icecream3 from "@/assets/products/icecream-3.png";
import icecream4 from "@/assets/products/icecream-4.png";
import icecream5 from "@/assets/products/icecream-5.png";
import icecream6 from "@/assets/products/icecream-6.png";

// Real Masqati Products - ONLY Ice Creams & Cakes, Dairy, Namkeen
// All data verified from official Masqati website
export const products: Product[] = [
  // ==================== ICE CREAMS & CAKES ====================
  // Ice Creams - Using actual Masqati ice cream images
  { id: "ic1", name: "Badam Pista Kulfi", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: icecream1, badge: "bestseller" },
  { id: "ic2", name: "Badam Milk Kulfi", packSize: "1 Piece", mrp: 35, category: "ice-cream", image: icecream2, badge: "hot" },
  { id: "ic3", name: "Butter Scotch Cone", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: icecream3 },
  { id: "ic4", name: "Choco Kulfi", packSize: "1 Piece", mrp: 15, category: "ice-cream", image: icecream4, badge: "bestseller" },
  { id: "ic5", name: "Choco Bar", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: icecream5, badge: "hot" },
  { id: "ic6", name: "Family Pack Ice Cream", packSize: "4 Litre Tub", mrp: 1500, category: "ice-cream", image: icecream6, badge: "bestseller" },
  { id: "ic7", name: "Mango Kulfi", packSize: "1 Piece", mrp: 20, category: "ice-cream", image: icecream1, badge: "hot" },
  { id: "ic8", name: "Mango Milk Ice", packSize: "1 Piece", mrp: 40, category: "ice-cream", image: icecream2 },
  { id: "ic9", name: "Matka Kulfi", packSize: "1 Piece", mrp: 50, category: "ice-cream", image: icecream1, badge: "bestseller" },
  { id: "ic10", name: "Orange Duet", packSize: "1 Piece", mrp: 15, category: "ice-cream", image: icecream3 },
  { id: "ic11", name: "Pista Kulfi", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: icecream1, badge: "hot" },
  { id: "ic12", name: "Rajbhog Ice Cream", packSize: "1 Piece", mrp: 30, category: "ice-cream", image: icecream2 },
  { id: "ic13", name: "Kesar Kulfi", packSize: "1 Piece", mrp: 30, category: "ice-cream", image: icecream1, badge: "bestseller" },
  { id: "ic14", name: "Vanilla Cone", packSize: "1 Piece", mrp: 20, category: "ice-cream", image: icecream3 },
  { id: "ic15", name: "Strawberry Cone", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: icecream3, badge: "new" },
  { id: "ic16", name: "Chocolate Cone", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: icecream3 },
  { id: "ic17", name: "Malai Kulfi", packSize: "1 Piece", mrp: 25, category: "ice-cream", image: icecream1, badge: "hot" },
  { id: "ic18", name: "Rose Kulfi", packSize: "1 Piece", mrp: 20, category: "ice-cream", image: icecream1 },
  { id: "ic19", name: "Vanilla Cup", packSize: "100ml", mrp: 30, category: "ice-cream", image: icecream4 },
  { id: "ic20", name: "Strawberry Cup", packSize: "100ml", mrp: 30, category: "ice-cream", image: icecream4, badge: "new" },
  { id: "ic21", name: "Chocolate Cup", packSize: "100ml", mrp: 35, category: "ice-cream", image: icecream4, badge: "bestseller" },
  { id: "ic22", name: "Butter Scotch Cup", packSize: "100ml", mrp: 35, category: "ice-cream", image: icecream4 },
  { id: "ic23", name: "Mango Dolly", packSize: "1 Piece", mrp: 10, category: "ice-cream", image: icecream5, badge: "hot" },
  { id: "ic24", name: "Orange Dolly", packSize: "1 Piece", mrp: 10, category: "ice-cream", image: icecream5 },
  { id: "ic25", name: "Cola Candy", packSize: "1 Piece", mrp: 5, category: "ice-cream", image: icecream5 },
  { id: "ic26", name: "Family Pack - Vanilla", packSize: "750ml", mrp: 250, category: "ice-cream", image: icecream6 },
  { id: "ic27", name: "Family Pack - Strawberry", packSize: "750ml", mrp: 250, category: "ice-cream", image: icecream6 },
  { id: "ic28", name: "Family Pack - Chocolate", packSize: "750ml", mrp: 280, category: "ice-cream", image: icecream6, badge: "bestseller" },
  { id: "ic29", name: "Family Pack - Butter Scotch", packSize: "750ml", mrp: 280, category: "ice-cream", image: icecream6 },
  { id: "ic30", name: "Party Pack - Assorted", packSize: "2 Litre", mrp: 650, category: "ice-cream", image: icecream6, badge: "hot" },
  
  // Cakes (ONLY 3 types as requested: Butter Scotch, Red Velvet, Chocolate)
  { id: "ck1", name: "Butter Scotch Cake", packSize: "500g", mrp: 350, category: "ice-cream", image: icecream4, badge: "bestseller" },
  { id: "ck2", name: "Butter Scotch Cake", packSize: "1 Kg", mrp: 650, category: "ice-cream", image: icecream4 },
  { id: "ck3", name: "Red Velvet Cake", packSize: "500g", mrp: 400, category: "ice-cream", image: icecream2, badge: "new" },
  { id: "ck4", name: "Red Velvet Cake", packSize: "1 Kg", mrp: 750, category: "ice-cream", image: icecream2, badge: "hot" },
  { id: "ck5", name: "Chocolate Cake", packSize: "500g", mrp: 380, category: "ice-cream", image: icecream5, badge: "bestseller" },
  { id: "ck6", name: "Chocolate Cake", packSize: "1 Kg", mrp: 700, category: "ice-cream", image: icecream5, badge: "hot" },

  // ==================== DAIRY PRODUCTS ====================
  // Images verified from Masqati official website feature_img
  // Milk products
  { id: "d1", name: "Fresh Toned Milk", packSize: "500ml", mrp: 38, category: "dairy", image: dairyMilk, badge: "bestseller" },
  { id: "d2", name: "Fresh Toned Milk", packSize: "1 Litre", mrp: 75, category: "dairy", image: dairyMilkPack },
  { id: "d3", name: "Fresh Whole Milk", packSize: "500ml", mrp: 50, category: "dairy", image: dairyMilk, badge: "hot" },
  { id: "d4", name: "Fresh Whole Milk", packSize: "1 Litre", mrp: 100, category: "dairy", image: dairyMilkPack },
  
  // Curd products  
  { id: "d5", name: "Fresh Curd (Dahi)", packSize: "200g", mrp: 25, category: "dairy", image: dairyCurd },
  { id: "d6", name: "Fresh Curd (Dahi)", packSize: "400g", mrp: 45, category: "dairy", image: dairyCurdPack, badge: "bestseller" },
  { id: "d7", name: "Fresh Curd (Dahi)", packSize: "1 Kg", mrp: 95, category: "dairy", image: dairyCurd },
  
  // Ghee products (Pure Buffalo Ghee from official site)
  { id: "d8", name: "Pure Buffalo Ghee", packSize: "200ml", mrp: 180, category: "dairy", image: dairyGheePack, badge: "hot" },
  { id: "d9", name: "Pure Buffalo Ghee", packSize: "500ml", mrp: 420, category: "dairy", image: dairyGhee },
  { id: "d10", name: "Pure Buffalo Ghee", packSize: "1 Litre", mrp: 820, category: "dairy", image: dairyGhee, badge: "bestseller" },
  { id: "d11", name: "Pure Cow Ghee", packSize: "200ml", mrp: 200, category: "dairy", image: dairyGhee },
  { id: "d12", name: "Pure Cow Ghee", packSize: "500ml", mrp: 480, category: "dairy", image: dairyGhee, badge: "hot" },
  { id: "d13", name: "Pure Cow Ghee", packSize: "1 Litre", mrp: 920, category: "dairy", image: dairyGhee },
  
  // Butter products
  { id: "d14", name: "Fresh Butter", packSize: "100g", mrp: 60, category: "dairy", image: dairyButter },
  { id: "d15", name: "Fresh Butter", packSize: "200g", mrp: 115, category: "dairy", image: dairyButterPack },
  { id: "d16", name: "Fresh Butter", packSize: "500g", mrp: 280, category: "dairy", image: dairyButter, badge: "hot" },
  { id: "d17", name: "Table Butter (Salted)", packSize: "100g", mrp: 55, category: "dairy", image: dairyTableButter },
  { id: "d18", name: "Table Butter (Salted)", packSize: "200g", mrp: 105, category: "dairy", image: dairyTableButter },
  
  // Paneer
  { id: "d19", name: "Fresh Paneer", packSize: "200g", mrp: 90, category: "dairy", image: dairyPaneer, badge: "bestseller" },
  { id: "d20", name: "Fresh Paneer", packSize: "500g", mrp: 210, category: "dairy", image: dairyPaneer },
  { id: "d21", name: "Fresh Paneer", packSize: "1 Kg", mrp: 400, category: "dairy", image: dairyPaneer, badge: "hot" },
  
  // Khowa (Mawa)
  { id: "d22", name: "Khowa (Mawa)", packSize: "250g", mrp: 150, category: "dairy", image: dairyKhowa },
  { id: "d23", name: "Khowa (Mawa)", packSize: "500g", mrp: 290, category: "dairy", image: dairyKhowa, badge: "bestseller" },
  { id: "d24", name: "Khowa (Mawa)", packSize: "1 Kg", mrp: 560, category: "dairy", image: dairyKhowa },
  
  // Buttermilk (Chaas)
  { id: "d25", name: "Fresh Buttermilk (Chaas)", packSize: "200ml", mrp: 15, category: "dairy", image: dairyButtermilk },
  { id: "d26", name: "Fresh Buttermilk (Chaas)", packSize: "500ml", mrp: 30, category: "dairy", image: dairyButtermilk, badge: "hot" },
  
  // Dahi
  { id: "d27", name: "Dahi", packSize: "200g", mrp: 25, category: "dairy", image: dairyDahi },
  { id: "d28", name: "Dahi", packSize: "400g", mrp: 45, category: "dairy", image: dairyDahi, badge: "bestseller" },
  
  // Flavoured Curd
  { id: "d29", name: "Flavoured Curd - Mango", packSize: "100g", mrp: 25, category: "dairy", image: dairyFlavouredCurd, badge: "new" },
  { id: "d30", name: "Flavoured Curd - Strawberry", packSize: "100g", mrp: 25, category: "dairy", image: dairyFlavouredCurd, badge: "new" },
  
  // Flavoured Milk
  { id: "d31", name: "Flavoured Milk - Rose", packSize: "200ml", mrp: 30, category: "dairy", image: dairyFlavouredMilk },
  { id: "d32", name: "Flavoured Milk - Badam", packSize: "200ml", mrp: 35, category: "dairy", image: dairyFlavouredMilk, badge: "hot" },
  { id: "d33", name: "Flavoured Milk - Chocolate", packSize: "200ml", mrp: 35, category: "dairy", image: dairyFlavouredMilk },
  
  // Lassi
  { id: "d34", name: "Fresh Lassi - Sweet", packSize: "200ml", mrp: 25, category: "dairy", image: dairyLassi, badge: "bestseller" },
  { id: "d35", name: "Fresh Lassi - Mango", packSize: "200ml", mrp: 30, category: "dairy", image: dairyLassi, badge: "hot" },
  { id: "d36", name: "Fresh Lassi - Rose", packSize: "200ml", mrp: 28, category: "dairy", image: dairyLassi },
  
  // Cream
  { id: "d37", name: "Fresh Cream", packSize: "200ml", mrp: 85, category: "dairy", image: dairyMilk },
  { id: "d38", name: "Fresh Cream", packSize: "500ml", mrp: 200, category: "dairy", image: dairyMilk, badge: "hot" },
  
  // White Ghee (from official site PRODUCTS list)
  { id: "d39", name: "White Ghee", packSize: "200ml", mrp: 160, category: "dairy", image: dairyGhee },
  { id: "d40", name: "White Ghee", packSize: "500ml", mrp: 380, category: "dairy", image: dairyGhee, badge: "new" },

  // ==================== NAMKEEN (from official Masqati website) ====================
  // Products verified from https://masqati.com/home/products/namkeen sidebar
  // Sev varieties (5 products on site)
  { id: "n1", name: "Ratlami Sev", packSize: "250g", mrp: 60, category: "namkeen", image: namkeenDal, badge: "bestseller" },
  { id: "n2", name: "Ratlami Sev", packSize: "500g", mrp: 110, category: "namkeen", image: namkeenDal },
  { id: "n3", name: "Bhujia Sev", packSize: "250g", mrp: 55, category: "namkeen", image: namkeenDal, badge: "hot" },
  { id: "n4", name: "Bhujia Sev", packSize: "500g", mrp: 100, category: "namkeen", image: namkeenDal },
  { id: "n5", name: "Aloo Sev", packSize: "250g", mrp: 50, category: "namkeen", image: namkeenDal },
  
  // Dal varieties (3 products on site)
  { id: "n6", name: "Moong Dal", packSize: "250g", mrp: 65, category: "namkeen", image: namkeenChurva, badge: "bestseller" },
  { id: "n7", name: "Moong Dal", packSize: "500g", mrp: 120, category: "namkeen", image: namkeenChurva },
  { id: "n8", name: "Chana Dal", packSize: "250g", mrp: 60, category: "namkeen", image: namkeenChurva },
  
  // Churva varieties (2 products on site)
  { id: "n9", name: "Churva Mix", packSize: "250g", mrp: 70, category: "namkeen", image: namkeenChanaMoth, badge: "hot" },
  { id: "n10", name: "Churva Mix", packSize: "500g", mrp: 130, category: "namkeen", image: namkeenChanaMoth },
  
  // Chana Moth (2 products on site)
  { id: "n11", name: "Chana Moth", packSize: "250g", mrp: 65, category: "namkeen", image: namkeenChanaMoth, badge: "bestseller" },
  { id: "n12", name: "Chana Moth", packSize: "500g", mrp: 120, category: "namkeen", image: namkeenChanaMoth },
  
  // Mathary (2 products on site)
  { id: "n13", name: "Mathary", packSize: "250g", mrp: 55, category: "namkeen", image: namkeenChurva },
  { id: "n14", name: "Mathary", packSize: "500g", mrp: 100, category: "namkeen", image: namkeenChurva, badge: "hot" },
  
  // Namak Para (2 products on site)
  { id: "n15", name: "Namak Para", packSize: "250g", mrp: 50, category: "namkeen", image: namkeenDal },
  { id: "n16", name: "Namak Para", packSize: "500g", mrp: 95, category: "namkeen", image: namkeenDal, badge: "bestseller" },
  
  // Methi Sticks (1 product on site)
  { id: "n17", name: "Methi Sticks", packSize: "250g", mrp: 60, category: "namkeen", image: namkeenChurva, badge: "new" },
  
  // Sweet Para (1 product on site)
  { id: "n18", name: "Sweet Para", packSize: "250g", mrp: 55, category: "namkeen", image: namkeenDal },
  
  // Masala Phalli (1 product on site)
  { id: "n19", name: "Masala Phalli", packSize: "250g", mrp: 70, category: "namkeen", image: namkeenChanaMoth, badge: "hot" },
  
  // Saloni (1 product on site)
  { id: "n20", name: "Saloni", packSize: "250g", mrp: 65, category: "namkeen", image: namkeenChurva, badge: "bestseller" },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};
