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
    <div className="bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200 p-4">
      <div className="flex items-start justify-between gap-3">
        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-base font-semibold text-foreground leading-tight">
              {product.name}
            </h3>
            {product.badge && (
              <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getBadgeStyles(product.badge)}`}>
                {getBadgeLabel(product.badge)}
              </span>
            )}
          </div>
          <p className="text-muted-foreground text-sm font-body mt-1">
            {product.packSize}
          </p>
          {product.validity && (
            <p className="text-muted-foreground/70 text-xs font-body mt-0.5">
              Validity: {product.validity}
            </p>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="p-2 rounded-full bg-secondary/50 hover:bg-secondary transition-colors group flex-shrink-0"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-4 w-4 transition-all duration-200 ${
              favorited
                ? "text-red-500 fill-red-500 scale-110"
                : "text-muted-foreground group-hover:text-red-400 group-hover:scale-110"
            }`}
          />
        </button>
      </div>

      {/* Price and Cart Controls */}
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p className="font-display text-xl font-bold text-primary">
            ₹{product.salePrice || product.mrp}
          </p>
          {product.salePrice && (
            <p className="text-sm text-muted-foreground line-through">
              ₹{product.mrp}
            </p>
          )}
        </div>

        {quantity === 0 ? (
          <Button
            onClick={() => addToCart(product)}
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium rounded-full px-4"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        ) : (
          <div className="flex items-center gap-2 bg-secondary rounded-full px-2 py-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="h-7 w-7 rounded-full hover:bg-destructive/10 hover:text-destructive"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="font-body font-semibold text-foreground w-5 text-center text-sm">
              {quantity}
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="h-7 w-7 rounded-full hover:bg-accent/20 hover:text-accent"
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
