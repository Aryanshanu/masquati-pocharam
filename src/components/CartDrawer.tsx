import { Minus, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCheckout: () => void;
}

const CartDrawer = ({ open, onOpenChange, onCheckout }: CartDrawerProps) => {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();

  const cartTotal = items.reduce(
    (sum, item) => sum + item.product.mrp * item.quantity,
    0
  );

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl">
        <SheetHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-display text-2xl">Your Cart</SheetTitle>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-destructive hover:text-destructive hover:bg-destructive/10 font-body"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear All
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-4 max-h-[calc(85vh-200px)]">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground font-body text-lg">
                Your cart is empty
              </p>
              <p className="text-muted-foreground/70 font-body text-sm mt-2">
                Add some delicious dairy products!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-4 bg-secondary/50 rounded-xl p-4"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-muted-foreground text-sm font-body">
                      {item.product.packSize} × ₹{item.product.mrp}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="h-8 w-8 rounded-full"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-body font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="h-8 w-8 rounded-full"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="text-right min-w-[70px]">
                    <p className="font-display font-bold text-primary">
                      ₹{item.product.mrp * item.quantity}
                    </p>
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromCart(item.product.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-display text-xl font-semibold">Total</span>
              <span className="font-display text-2xl font-bold text-primary">
                ₹{cartTotal}
              </span>
            </div>

            <Button
              onClick={onCheckout}
              className="w-full h-14 bg-accent text-accent-foreground hover:bg-accent/90 rounded-full font-body text-lg font-semibold"
            >
              Proceed to Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
