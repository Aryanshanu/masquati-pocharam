import { Plus, Minus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

interface ProductCardProps {
  product: Product;
}

const getBadgeStyles = (badge: string) => {
  switch (badge) {
    case 'bestseller':
      return 'bg-amber-500 text-white';
    case 'hot':
      return 'bg-red-500 text-white';
    case 'new':
      return 'bg-emerald-500 text-white';
    case 'sale':
      return 'bg-blue-500 text-white';
    default:
      return 'bg-primary text-primary-foreground';
  }
};

const getBadgeLabel = (badge: string) => {
  switch (badge) {
    case 'bestseller':
      return '⭐ Bestseller';
    case 'hot':
      return '🔥 Hot';
    case 'new':
      return '✨ New';
    case 'sale':
      return '💰 Sale';
    default:
      return badge;
  }
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const quantity = getItemQuantity(product.id);
  const favorited = isFavorite(product.id);

  return (
    <div className="bg-card rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow duration-200 p-3 sm:p-4">
      <div className="flex items-start justify-between gap-2 sm:gap-3">
        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <h3 className="font-display text-sm sm:text-base font-semibold text-foreground leading-tight">
              {product.name}
            </h3>
            {product.badge && (
              <span className={`px-1.5 sm:px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-bold ${getBadgeStyles(product.badge)}`}>
                {getBadgeLabel(product.badge)}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm font-body mt-0.5 sm:mt-1">
            {product.packSize}
          </p>
        </div>

        {/* Favorite Button - Larger touch target */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="p-2.5 sm:p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors group flex-shrink-0 active:scale-90"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 sm:h-4 sm:w-4 transition-all duration-200 ${
              favorited
                ? "text-red-500 fill-red-500 scale-110"
                : "text-muted-foreground group-hover:text-red-400 group-hover:scale-110"
            }`}
          />
        </button>
      </div>

      {/* Price and Cart Controls */}
      <div className="mt-2 sm:mt-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <p className="font-display text-lg sm:text-xl font-bold text-primary">
            ₹{product.salePrice || product.mrp}
          </p>
          {product.salePrice && (
            <p className="text-xs sm:text-sm text-muted-foreground line-through">
              ₹{product.mrp}
            </p>
          )}
        </div>

        {quantity === 0 ? (
          <Button
            onClick={() => addToCart(product)}
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium rounded-full px-4 sm:px-4 h-10 sm:h-9 text-sm active:scale-95 transition-transform"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        ) : (
          <div className="flex items-center gap-1 sm:gap-2 bg-secondary rounded-full px-1.5 sm:px-2 py-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="h-9 w-9 sm:h-7 sm:w-7 rounded-full hover:bg-destructive/10 hover:text-destructive active:scale-90 transition-transform"
            >
              <Minus className="h-4 w-4 sm:h-3 sm:w-3" />
            </Button>
            <span className="font-body font-semibold text-foreground w-6 sm:w-5 text-center text-sm">
              {quantity}
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="h-9 w-9 sm:h-7 sm:w-7 rounded-full hover:bg-accent/20 hover:text-accent active:scale-90 transition-transform"
            >
              <Plus className="h-4 w-4 sm:h-3 sm:w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
