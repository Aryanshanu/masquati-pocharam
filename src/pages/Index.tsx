import { useState } from "react";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import CategoryNav from "@/components/CategoryNav";
import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";
import FloatingCartButton from "@/components/FloatingCartButton";
import CartDrawer from "@/components/CartDrawer";
import CheckoutForm from "@/components/CheckoutForm";

const IndexContent = () => {
  const [activeCategory, setActiveCategory] = useState("daily-dairy");
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav
        activeCategory={activeCategory}
        onCategoryChange={(id) => {
          setActiveCategory(id);
          setSearchQuery("");
        }}
      />
      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <ProductList
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onCategoryInView={setActiveCategory}
      />
      <FloatingCartButton onClick={() => setIsCartOpen(true)} />
      <CartDrawer
        open={isCartOpen}
        onOpenChange={setIsCartOpen}
        onCheckout={handleCheckout}
      />
      <CheckoutForm open={isCheckoutOpen} onOpenChange={setIsCheckoutOpen} />
    </div>
  );
};

const Index = () => {
  return (
    <CartProvider>
      <IndexContent />
    </CartProvider>
  );
};

export default Index;