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
      <SheetContent side="bottom" className="h-[85vh] rounded-t-3xl bg-background">
        <SheetHeader className="border-b border-border pb-3">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-display text-xl">Your Cart</SheetTitle>
            {items.length > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearCart}
                className="text-destructive hover:text-destructive hover:bg-destructive/10 font-body h-10 active:scale-95"
              >
                <Trash2 className="h-4 w-4 mr-1" />
                Clear
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-3 max-h-[calc(85vh-200px)]">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-body text-base">
                Your cart is empty
              </p>
              <p className="text-muted-foreground/60 font-body text-xs mt-1">
                Add some delicious products!
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center gap-3 bg-card rounded-xl p-3 border border-border shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display text-sm text-foreground truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-muted-foreground text-xs font-body">
                      {item.product.packSize} × ₹{item.product.mrp}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="h-9 w-9 rounded-full active:scale-90 border-border"
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="font-body font-bold w-7 text-center text-sm">
                      {item.quantity}
                    </span>
                    <Button
                      size="icon"
                      variant="outline"
                      onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="h-9 w-9 rounded-full active:scale-90 border-border"
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <div className="text-right min-w-[55px]">
                    <p className="font-display text-sm text-gold">
                      ₹{item.product.mrp * item.quantity}
                    </p>
                  </div>

                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => removeFromCart(item.product.id)}
                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-90"
                  >
                    <X className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border pt-3 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-display text-lg">Total</span>
              <span className="font-display text-xl text-gold">
                ₹{cartTotal}
              </span>
            </div>

            <Button
              onClick={onCheckout}
              className="w-full h-12 gold-gradient text-foreground hover:opacity-90 rounded-full font-body text-base font-semibold active:scale-[0.98] transition-transform shadow-md"
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
