import { Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const quantity = getItemQuantity(product.id);

  return (
    <div className="bg-card rounded-lg p-4 shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm font-body mt-1">
            {product.packSize}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className="font-display text-xl font-bold text-primary">
            ₹{product.mrp}
          </p>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        {quantity === 0 ? (
          <Button
            onClick={() => addToCart(product)}
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-medium rounded-full px-6"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        ) : (
          <div className="flex items-center gap-3 bg-secondary rounded-full px-2 py-1">
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="h-8 w-8 rounded-full hover:bg-destructive/10 hover:text-destructive"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-body font-semibold text-foreground w-6 text-center">
              {quantity}
            </span>
            <Button
              size="icon"
              variant="ghost"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="h-8 w-8 rounded-full hover:bg-accent/20 hover:text-accent"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
