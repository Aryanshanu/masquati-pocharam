import { ShoppingCart, Heart, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

interface BottomNavProps {
  onCartClick: () => void;
  onFavoritesClick: () => void;
}

const BottomNav = ({ onCartClick, onFavoritesClick }: BottomNavProps) => {
  const { totalItems, totalAmount } = useCart();
  const { favorites } = useFavorites();
  const favCount = favorites.length;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.1)] safe-area-bottom">
      <div className="container mx-auto px-3 py-2">
        <div className="flex items-center gap-2">
          {/* Favorites Button */}
          <button
            onClick={onFavoritesClick}
            className="relative flex items-center justify-center h-12 w-12 rounded-full bg-secondary hover:bg-secondary/80 active:scale-95 transition-all"
            aria-label="View favorites"
          >
            <Heart className={`h-5 w-5 ${favCount > 0 ? 'text-red-500 fill-red-500' : 'text-muted-foreground'}`} />
            {favCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {favCount > 9 ? "9+" : favCount}
              </span>
            )}
          </button>

          {/* Cart Button - Takes remaining space */}
          <button
            onClick={onCartClick}
            className={`flex-1 flex items-center justify-between h-12 rounded-full px-4 active:scale-[0.98] transition-all ${
              totalItems > 0
                ? 'bg-primary text-primary-foreground shadow-md'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-body font-semibold text-sm">
                {totalItems > 0 ? `${totalItems} items` : 'Cart is empty'}
              </span>
            </div>
            {totalItems > 0 && (
              <div className="flex items-center gap-2">
                <span className="font-display font-bold">₹{totalAmount}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
