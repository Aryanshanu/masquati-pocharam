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
      return 'gold-gradient text-foreground';
    case 'hot':
      return 'pink-gradient text-white';
    case 'new':
      return 'bg-pink-dark text-white';
    case 'sale':
      return 'bg-primary text-primary-foreground';
    default:
      return 'bg-primary text-primary-foreground';
  }
};

const getBadgeLabel = (badge: string) => {
  switch (badge) {
    case 'bestseller':
      return '⭐ Best';
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
    <div className="bg-card rounded-2xl shadow-md card-hover p-4 relative animate-fade-in">
      {/* Badge */}
      {product.badge && (
        <span className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-[10px] font-body font-bold z-10 shadow-sm ${getBadgeStyles(product.badge)}`}>
          {getBadgeLabel(product.badge)}
        </span>
      )}

      {/* Heart Button */}
      <button
        onClick={() => toggleFavorite(product.id)}
        className="absolute top-3 right-3 p-2 rounded-full bg-secondary/80 backdrop-blur-sm hover:bg-secondary transition-all active:scale-90 z-10"
        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          className={`h-4 w-4 transition-all duration-200 ${
            favorited
              ? "text-destructive fill-destructive animate-heart-pop"
              : "text-muted-foreground hover:text-destructive"
          }`}
        />
      </button>

      {/* Product Info */}
      <div className="pt-1 pr-10">
        <h3 className="font-display text-base font-semibold text-foreground leading-tight line-clamp-2">
          {product.name}
        </h3>
        <span className="inline-block mt-1.5 px-2 py-0.5 bg-secondary rounded-lg text-muted-foreground text-[11px] font-body font-medium">
          {product.packSize}
        </span>
      </div>

      {/* Price and Cart Controls */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <p className="font-display text-xl text-gold font-bold">
            ₹{product.salePrice || product.mrp}
          </p>
          {product.salePrice && (
            <p className="text-xs text-muted-foreground line-through font-body">
              ₹{product.mrp}
            </p>
          )}
        </div>

        {quantity === 0 ? (
          <Button
            onClick={() => addToCart(product)}
            size="sm"
            className="pink-gold-gradient text-white hover:opacity-90 font-body font-semibold rounded-full px-5 h-9 text-xs active:scale-95 transition-all shadow-sm border-0"
          >
            <Plus className="h-3.5 w-3.5 mr-1" />
            Add
          </Button>
        ) : (
          <div className="flex items-center gap-1 bg-primary rounded-full px-1 py-0.5">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="h-7 w-7 rounded-full text-primary-foreground hover:bg-primary-foreground/10 active:scale-90 transition-transform"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="font-body font-bold text-primary-foreground w-5 text-center text-xs">
              {quantity}
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="h-7 w-7 rounded-full text-primary-foreground hover:bg-primary-foreground/10 active:scale-90 transition-transform"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
