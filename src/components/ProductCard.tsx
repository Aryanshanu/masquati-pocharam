import { Plus, Minus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product, categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();
  const quantity = getItemQuantity(product.id);
  const favorited = isFavorite(product.id);

  // Get category emoji for fallback
  const categoryIcon = categories.find((c) => c.id === product.category)?.icon || "📦";

  return (
    <div className="bg-card rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-square bg-secondary/50">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-5xl">
            {categoryIcon}
          </div>
        )}
        
        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-2 right-2 p-2 rounded-full bg-background/90 hover:bg-background transition-colors shadow-sm group"
          aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`h-5 w-5 transition-all duration-200 ${
              favorited
                ? "text-red-500 fill-red-500 scale-110"
                : "text-muted-foreground group-hover:text-red-400 group-hover:scale-110"
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-display text-base font-semibold text-foreground leading-tight line-clamp-2">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-sm font-body mt-1">
          {product.packSize}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <p className="font-display text-xl font-bold text-primary">
            ₹{product.mrp}
          </p>

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
    </div>
  );
};

export default ProductCard;
