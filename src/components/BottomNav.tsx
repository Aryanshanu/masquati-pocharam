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
    <div className="fixed bottom-0 left-0 right-0 z-50 glass-effect rounded-t-2xl border-t border-gold/20 safe-area-bottom">
      <div className="container mx-auto px-3 py-2.5">
        <div className="flex items-center gap-2">
          {/* Favorites Button */}
          <button
            onClick={onFavoritesClick}
            className="relative flex items-center justify-center h-11 w-11 rounded-full border border-border bg-card hover:bg-secondary active:scale-95 transition-all"
            aria-label="View favorites"
          >
            <Heart className={`h-4.5 w-4.5 ${favCount > 0 ? 'text-destructive fill-destructive' : 'text-muted-foreground'}`} />
            {favCount > 0 && (
              <span className="absolute -top-1 -right-1 gold-gradient text-foreground text-[10px] font-bold rounded-full h-4.5 w-4.5 flex items-center justify-center min-w-[18px] min-h-[18px]">
                {favCount > 9 ? "9+" : favCount}
              </span>
            )}
          </button>

          {/* Cart Button */}
          <button
            onClick={onCartClick}
            className={`flex-1 flex items-center justify-between h-11 rounded-full px-4 active:scale-[0.98] transition-all font-body ${
              totalItems > 0
                ? 'gold-gradient text-foreground shadow-md'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            <div className="flex items-center gap-2">
              <ShoppingCart className="h-4.5 w-4.5" />
              <span className="font-semibold text-sm">
                {totalItems > 0 ? `${totalItems} items` : 'Cart is empty'}
              </span>
            </div>
            {totalItems > 0 && (
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm">₹{totalAmount}</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
