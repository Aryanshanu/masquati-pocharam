export interface Product {
  id: string;
  name: string;
  packSize: string;
  mrp: number;
  category: string;
  image?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "daily-dairy", name: "Daily Dairy", icon: "🥛" },
  { id: "curd", name: "Curd", icon: "🥣" },
  { id: "ghee", name: "Ghee", icon: "🫕" },
  { id: "butter", name: "Butter", icon: "🧈" },
  { id: "paneer", name: "Paneer", icon: "🧀" },
  { id: "khoa", name: "Khoa", icon: "🍮" },
  { id: "beverages", name: "Beverages", icon: "🥤" },
  { id: "ice-cream", name: "Ice Cream", icon: "🍨" },
  { id: "sweets", name: "Sweets", icon: "🍬" },
  { id: "bakery", name: "Bakery", icon: "🥐" },
  { id: "namkeen", name: "Namkeen", icon: "🥨" },
  { id: "hot-food", name: "Hot Food", icon: "🍲" },
];

// Helper to generate placeholder images
const getPlaceholder = (name: string, category: string) => 
  `https://placehold.co/200x200/1E3A5F/F5F1EB?text=${encodeURIComponent(name.split(' ').slice(0, 2).join('+'))}`;

export const products: Product[] = [
  // Daily Dairy
  { id: "dd-1", name: "Full Cream Milk", packSize: "500ml", mrp: 32, category: "daily-dairy", image: getPlaceholder("Full Cream Milk", "daily-dairy") },
  { id: "dd-2", name: "Full Cream Milk", packSize: "1L", mrp: 62, category: "daily-dairy", image: getPlaceholder("Full Cream Milk", "daily-dairy") },
  { id: "dd-3", name: "Toned Milk", packSize: "500ml", mrp: 28, category: "daily-dairy", image: getPlaceholder("Toned Milk", "daily-dairy") },
  { id: "dd-4", name: "Toned Milk", packSize: "1L", mrp: 54, category: "daily-dairy", image: getPlaceholder("Toned Milk", "daily-dairy") },
  { id: "dd-5", name: "Double Toned Milk", packSize: "500ml", mrp: 24, category: "daily-dairy", image: getPlaceholder("Double Toned", "daily-dairy") },
  { id: "dd-6", name: "Double Toned Milk", packSize: "1L", mrp: 46, category: "daily-dairy", image: getPlaceholder("Double Toned", "daily-dairy") },
  { id: "dd-7", name: "Standardised Milk", packSize: "500ml", mrp: 30, category: "daily-dairy", image: getPlaceholder("Standardised Milk", "daily-dairy") },
  { id: "dd-8", name: "Standardised Milk", packSize: "1L", mrp: 58, category: "daily-dairy", image: getPlaceholder("Standardised Milk", "daily-dairy") },
  { id: "dd-9", name: "Cow Milk", packSize: "500ml", mrp: 30, category: "daily-dairy", image: getPlaceholder("Cow Milk", "daily-dairy") },
  { id: "dd-10", name: "Cow Milk", packSize: "1L", mrp: 58, category: "daily-dairy", image: getPlaceholder("Cow Milk", "daily-dairy") },
  { id: "dd-11", name: "Buffalo Milk", packSize: "500ml", mrp: 40, category: "daily-dairy", image: getPlaceholder("Buffalo Milk", "daily-dairy") },
  { id: "dd-12", name: "Buffalo Milk", packSize: "1L", mrp: 78, category: "daily-dairy", image: getPlaceholder("Buffalo Milk", "daily-dairy") },
  { id: "dd-13", name: "Slim Milk", packSize: "500ml", mrp: 22, category: "daily-dairy", image: getPlaceholder("Slim Milk", "daily-dairy") },
  { id: "dd-14", name: "Slim Milk", packSize: "1L", mrp: 42, category: "daily-dairy", image: getPlaceholder("Slim Milk", "daily-dairy") },
  { id: "dd-15", name: "Fresh Cream", packSize: "200ml", mrp: 55, category: "daily-dairy", image: getPlaceholder("Fresh Cream", "daily-dairy") },
  { id: "dd-16", name: "Fresh Cream", packSize: "500ml", mrp: 130, category: "daily-dairy", image: getPlaceholder("Fresh Cream", "daily-dairy") },

  // Curd
  { id: "curd-1", name: "Fresh Curd", packSize: "200g", mrp: 20, category: "curd", image: getPlaceholder("Fresh Curd", "curd") },
  { id: "curd-2", name: "Fresh Curd", packSize: "400g", mrp: 38, category: "curd", image: getPlaceholder("Fresh Curd", "curd") },
  { id: "curd-3", name: "Fresh Curd", packSize: "1kg", mrp: 80, category: "curd", image: getPlaceholder("Fresh Curd", "curd") },
  { id: "curd-4", name: "Set Curd", packSize: "200g", mrp: 22, category: "curd", image: getPlaceholder("Set Curd", "curd") },
  { id: "curd-5", name: "Set Curd", packSize: "400g", mrp: 42, category: "curd", image: getPlaceholder("Set Curd", "curd") },
  { id: "curd-6", name: "Greek Yogurt", packSize: "100g", mrp: 40, category: "curd", image: getPlaceholder("Greek Yogurt", "curd") },
  { id: "curd-7", name: "Greek Yogurt", packSize: "200g", mrp: 75, category: "curd", image: getPlaceholder("Greek Yogurt", "curd") },
  { id: "curd-8", name: "Flavoured Yogurt - Strawberry", packSize: "100g", mrp: 30, category: "curd", image: getPlaceholder("Strawberry Yogurt", "curd") },
  { id: "curd-9", name: "Flavoured Yogurt - Mango", packSize: "100g", mrp: 30, category: "curd", image: getPlaceholder("Mango Yogurt", "curd") },
  { id: "curd-10", name: "Probiotic Curd", packSize: "200g", mrp: 35, category: "curd", image: getPlaceholder("Probiotic Curd", "curd") },

  // Ghee
  { id: "ghee-1", name: "Pure Cow Ghee", packSize: "200ml", mrp: 150, category: "ghee", image: getPlaceholder("Pure Cow Ghee", "ghee") },
  { id: "ghee-2", name: "Pure Cow Ghee", packSize: "500ml", mrp: 350, category: "ghee", image: getPlaceholder("Pure Cow Ghee", "ghee") },
  { id: "ghee-3", name: "Pure Cow Ghee", packSize: "1L", mrp: 680, category: "ghee", image: getPlaceholder("Pure Cow Ghee", "ghee") },
  { id: "ghee-4", name: "Buffalo Ghee", packSize: "200ml", mrp: 140, category: "ghee", image: getPlaceholder("Buffalo Ghee", "ghee") },
  { id: "ghee-5", name: "Buffalo Ghee", packSize: "500ml", mrp: 330, category: "ghee", image: getPlaceholder("Buffalo Ghee", "ghee") },
  { id: "ghee-6", name: "Buffalo Ghee", packSize: "1L", mrp: 640, category: "ghee", image: getPlaceholder("Buffalo Ghee", "ghee") },
  { id: "ghee-7", name: "Premium A2 Ghee", packSize: "500ml", mrp: 550, category: "ghee", image: getPlaceholder("Premium A2 Ghee", "ghee") },
  { id: "ghee-8", name: "Premium A2 Ghee", packSize: "1L", mrp: 1050, category: "ghee", image: getPlaceholder("Premium A2 Ghee", "ghee") },

  // Butter
  { id: "butter-1", name: "Salted Butter", packSize: "100g", mrp: 55, category: "butter", image: getPlaceholder("Salted Butter", "butter") },
  { id: "butter-2", name: "Salted Butter", packSize: "200g", mrp: 105, category: "butter", image: getPlaceholder("Salted Butter", "butter") },
  { id: "butter-3", name: "Salted Butter", packSize: "500g", mrp: 250, category: "butter", image: getPlaceholder("Salted Butter", "butter") },
  { id: "butter-4", name: "Unsalted Butter", packSize: "100g", mrp: 55, category: "butter", image: getPlaceholder("Unsalted Butter", "butter") },
  { id: "butter-5", name: "Unsalted Butter", packSize: "200g", mrp: 105, category: "butter", image: getPlaceholder("Unsalted Butter", "butter") },
  { id: "butter-6", name: "Unsalted Butter", packSize: "500g", mrp: 250, category: "butter", image: getPlaceholder("Unsalted Butter", "butter") },
  { id: "butter-7", name: "Garlic Butter", packSize: "100g", mrp: 70, category: "butter", image: getPlaceholder("Garlic Butter", "butter") },
  { id: "butter-8", name: "Cooking Butter", packSize: "500g", mrp: 230, category: "butter", image: getPlaceholder("Cooking Butter", "butter") },

  // Paneer
  { id: "paneer-1", name: "Fresh Paneer", packSize: "200g", mrp: 90, category: "paneer", image: getPlaceholder("Fresh Paneer", "paneer") },
  { id: "paneer-2", name: "Fresh Paneer", packSize: "500g", mrp: 210, category: "paneer", image: getPlaceholder("Fresh Paneer", "paneer") },
  { id: "paneer-3", name: "Fresh Paneer", packSize: "1kg", mrp: 400, category: "paneer", image: getPlaceholder("Fresh Paneer", "paneer") },
  { id: "paneer-4", name: "Malai Paneer", packSize: "200g", mrp: 100, category: "paneer", image: getPlaceholder("Malai Paneer", "paneer") },
  { id: "paneer-5", name: "Malai Paneer", packSize: "500g", mrp: 235, category: "paneer", image: getPlaceholder("Malai Paneer", "paneer") },
  { id: "paneer-6", name: "Low Fat Paneer", packSize: "200g", mrp: 85, category: "paneer", image: getPlaceholder("Low Fat Paneer", "paneer") },
  { id: "paneer-7", name: "Paneer Cubes", packSize: "200g", mrp: 95, category: "paneer", image: getPlaceholder("Paneer Cubes", "paneer") },

  // Khoa
  { id: "khoa-1", name: "Fresh Khoa", packSize: "250g", mrp: 150, category: "khoa", image: getPlaceholder("Fresh Khoa", "khoa") },
  { id: "khoa-2", name: "Fresh Khoa", packSize: "500g", mrp: 290, category: "khoa", image: getPlaceholder("Fresh Khoa", "khoa") },
  { id: "khoa-3", name: "Fresh Khoa", packSize: "1kg", mrp: 560, category: "khoa", image: getPlaceholder("Fresh Khoa", "khoa") },
  { id: "khoa-4", name: "Danedar Khoa", packSize: "250g", mrp: 160, category: "khoa", image: getPlaceholder("Danedar Khoa", "khoa") },
  { id: "khoa-5", name: "Pindi Khoa", packSize: "250g", mrp: 155, category: "khoa", image: getPlaceholder("Pindi Khoa", "khoa") },

  // Beverages
  { id: "bev-1", name: "Sweet Lassi", packSize: "200ml", mrp: 25, category: "beverages", image: getPlaceholder("Sweet Lassi", "beverages") },
  { id: "bev-2", name: "Sweet Lassi", packSize: "500ml", mrp: 55, category: "beverages", image: getPlaceholder("Sweet Lassi", "beverages") },
  { id: "bev-3", name: "Salted Lassi", packSize: "200ml", mrp: 22, category: "beverages", image: getPlaceholder("Salted Lassi", "beverages") },
  { id: "bev-4", name: "Mango Lassi", packSize: "200ml", mrp: 30, category: "beverages", image: getPlaceholder("Mango Lassi", "beverages") },
  { id: "bev-5", name: "Rose Lassi", packSize: "200ml", mrp: 28, category: "beverages", image: getPlaceholder("Rose Lassi", "beverages") },
  { id: "bev-6", name: "Buttermilk", packSize: "200ml", mrp: 15, category: "beverages", image: getPlaceholder("Buttermilk", "beverages") },
  { id: "bev-7", name: "Buttermilk", packSize: "500ml", mrp: 32, category: "beverages", image: getPlaceholder("Buttermilk", "beverages") },
  { id: "bev-8", name: "Masala Chaas", packSize: "200ml", mrp: 18, category: "beverages", image: getPlaceholder("Masala Chaas", "beverages") },
  { id: "bev-9", name: "Masala Chaas", packSize: "500ml", mrp: 38, category: "beverages", image: getPlaceholder("Masala Chaas", "beverages") },
  { id: "bev-10", name: "Chocolate Milk", packSize: "200ml", mrp: 28, category: "beverages", image: getPlaceholder("Chocolate Milk", "beverages") },
  { id: "bev-11", name: "Badam Milk", packSize: "200ml", mrp: 35, category: "beverages", image: getPlaceholder("Badam Milk", "beverages") },
  { id: "bev-12", name: "Kesar Milk", packSize: "200ml", mrp: 38, category: "beverages", image: getPlaceholder("Kesar Milk", "beverages") },

  // Ice Cream
  { id: "ic-1", name: "Vanilla Ice Cream", packSize: "500ml", mrp: 120, category: "ice-cream", image: getPlaceholder("Vanilla Ice Cream", "ice-cream") },
  { id: "ic-2", name: "Vanilla Ice Cream", packSize: "1L", mrp: 220, category: "ice-cream", image: getPlaceholder("Vanilla Ice Cream", "ice-cream") },
  { id: "ic-3", name: "Chocolate Ice Cream", packSize: "500ml", mrp: 130, category: "ice-cream", image: getPlaceholder("Chocolate Ice Cream", "ice-cream") },
  { id: "ic-4", name: "Chocolate Ice Cream", packSize: "1L", mrp: 240, category: "ice-cream", image: getPlaceholder("Chocolate Ice Cream", "ice-cream") },
  { id: "ic-5", name: "Mango Ice Cream", packSize: "500ml", mrp: 140, category: "ice-cream", image: getPlaceholder("Mango Ice Cream", "ice-cream") },
  { id: "ic-6", name: "Strawberry Ice Cream", packSize: "500ml", mrp: 130, category: "ice-cream", image: getPlaceholder("Strawberry Ice Cream", "ice-cream") },
  { id: "ic-7", name: "Butterscotch Ice Cream", packSize: "500ml", mrp: 135, category: "ice-cream", image: getPlaceholder("Butterscotch", "ice-cream") },
  { id: "ic-8", name: "Kesar Pista Ice Cream", packSize: "500ml", mrp: 160, category: "ice-cream", image: getPlaceholder("Kesar Pista", "ice-cream") },
  { id: "ic-9", name: "Kulfi Malai", packSize: "Each", mrp: 30, category: "ice-cream", image: getPlaceholder("Kulfi Malai", "ice-cream") },
  { id: "ic-10", name: "Kulfi Mango", packSize: "Each", mrp: 35, category: "ice-cream", image: getPlaceholder("Kulfi Mango", "ice-cream") },

  // Sweets
  { id: "sweet-1", name: "Gulab Jamun", packSize: "500g", mrp: 180, category: "sweets", image: getPlaceholder("Gulab Jamun", "sweets") },
  { id: "sweet-2", name: "Gulab Jamun", packSize: "1kg", mrp: 340, category: "sweets", image: getPlaceholder("Gulab Jamun", "sweets") },
  { id: "sweet-3", name: "Rasgulla", packSize: "500g", mrp: 160, category: "sweets", image: getPlaceholder("Rasgulla", "sweets") },
  { id: "sweet-4", name: "Rasgulla", packSize: "1kg", mrp: 300, category: "sweets", image: getPlaceholder("Rasgulla", "sweets") },
  { id: "sweet-5", name: "Kaju Katli", packSize: "250g", mrp: 280, category: "sweets", image: getPlaceholder("Kaju Katli", "sweets") },
  { id: "sweet-6", name: "Kaju Katli", packSize: "500g", mrp: 540, category: "sweets", image: getPlaceholder("Kaju Katli", "sweets") },
  { id: "sweet-7", name: "Milk Cake", packSize: "250g", mrp: 120, category: "sweets", image: getPlaceholder("Milk Cake", "sweets") },
  { id: "sweet-8", name: "Peda", packSize: "250g", mrp: 140, category: "sweets", image: getPlaceholder("Peda", "sweets") },
  { id: "sweet-9", name: "Barfi", packSize: "250g", mrp: 130, category: "sweets", image: getPlaceholder("Barfi", "sweets") },
  { id: "sweet-10", name: "Laddu", packSize: "500g", mrp: 200, category: "sweets", image: getPlaceholder("Laddu", "sweets") },

  // Bakery
  { id: "bakery-1", name: "Milk Bread", packSize: "400g", mrp: 40, category: "bakery", image: getPlaceholder("Milk Bread", "bakery") },
  { id: "bakery-2", name: "Brown Bread", packSize: "400g", mrp: 45, category: "bakery", image: getPlaceholder("Brown Bread", "bakery") },
  { id: "bakery-3", name: "Sandwich Bread", packSize: "450g", mrp: 50, category: "bakery", image: getPlaceholder("Sandwich Bread", "bakery") },
  { id: "bakery-4", name: "Pav", packSize: "6 pcs", mrp: 30, category: "bakery", image: getPlaceholder("Pav", "bakery") },
  { id: "bakery-5", name: "Butter Cookies", packSize: "200g", mrp: 80, category: "bakery", image: getPlaceholder("Butter Cookies", "bakery") },
  { id: "bakery-6", name: "Khari Biscuit", packSize: "200g", mrp: 50, category: "bakery", image: getPlaceholder("Khari Biscuit", "bakery") },
  { id: "bakery-7", name: "Cake Rusk", packSize: "300g", mrp: 60, category: "bakery", image: getPlaceholder("Cake Rusk", "bakery") },
  { id: "bakery-8", name: "Fruit Cake", packSize: "250g", mrp: 120, category: "bakery", image: getPlaceholder("Fruit Cake", "bakery") },

  // Namkeen
  { id: "namkeen-1", name: "Mixture", packSize: "200g", mrp: 70, category: "namkeen", image: getPlaceholder("Mixture", "namkeen") },
  { id: "namkeen-2", name: "Mixture", packSize: "400g", mrp: 130, category: "namkeen", image: getPlaceholder("Mixture", "namkeen") },
  { id: "namkeen-3", name: "Sev", packSize: "200g", mrp: 55, category: "namkeen", image: getPlaceholder("Sev", "namkeen") },
  { id: "namkeen-4", name: "Bhujia", packSize: "200g", mrp: 60, category: "namkeen", image: getPlaceholder("Bhujia", "namkeen") },
  { id: "namkeen-5", name: "Chivda", packSize: "200g", mrp: 65, category: "namkeen", image: getPlaceholder("Chivda", "namkeen") },
  { id: "namkeen-6", name: "Mathri", packSize: "250g", mrp: 75, category: "namkeen", image: getPlaceholder("Mathri", "namkeen") },
  { id: "namkeen-7", name: "Shakkar Para", packSize: "250g", mrp: 80, category: "namkeen", image: getPlaceholder("Shakkar Para", "namkeen") },
  { id: "namkeen-8", name: "Chakli", packSize: "200g", mrp: 70, category: "namkeen", image: getPlaceholder("Chakli", "namkeen") },

  // Hot Food
  { id: "hf-1", name: "Samosa", packSize: "2 pcs", mrp: 30, category: "hot-food", image: getPlaceholder("Samosa", "hot-food") },
  { id: "hf-2", name: "Kachori", packSize: "2 pcs", mrp: 35, category: "hot-food", image: getPlaceholder("Kachori", "hot-food") },
  { id: "hf-3", name: "Bread Pakora", packSize: "2 pcs", mrp: 40, category: "hot-food", image: getPlaceholder("Bread Pakora", "hot-food") },
  { id: "hf-4", name: "Veg Puff", packSize: "Each", mrp: 25, category: "hot-food", image: getPlaceholder("Veg Puff", "hot-food") },
  { id: "hf-5", name: "Paneer Puff", packSize: "Each", mrp: 35, category: "hot-food", image: getPlaceholder("Paneer Puff", "hot-food") },
  { id: "hf-6", name: "Vada Pav", packSize: "Each", mrp: 25, category: "hot-food", image: getPlaceholder("Vada Pav", "hot-food") },
  { id: "hf-7", name: "Poha", packSize: "Plate", mrp: 30, category: "hot-food", image: getPlaceholder("Poha", "hot-food") },
  { id: "hf-8", name: "Upma", packSize: "Plate", mrp: 30, category: "hot-food", image: getPlaceholder("Upma", "hot-food") },
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter((product) => product.category === categoryId);
};
