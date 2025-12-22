import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

interface FloatingCartButtonProps {
  onClick: () => void;
}

const FloatingCartButton = ({ onClick }: FloatingCartButtonProps) => {
  const { totalItems, totalAmount } = useCart();

  if (totalItems === 0) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <Button
        onClick={onClick}
        className="w-full h-14 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg font-body text-base"
      >
        <ShoppingCart className="h-5 w-5 mr-3" />
        <span className="font-semibold">{totalItems} items</span>
        <span className="mx-3 opacity-50">|</span>
        <span className="font-bold">₹{totalAmount}</span>
      </Button>
    </div>
  );
};

export default FloatingCartButton;
