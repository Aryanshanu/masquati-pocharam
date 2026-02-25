import { Heart, Plus, Trash2, X } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useFavorites } from "@/context/FavoritesContext";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

interface FavoritesListProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const FavoritesList = ({ open, onOpenChange }: FavoritesListProps) => {
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();
  const { addToCart } = useCart();

  const favoriteProducts = products.filter((p) => favorites.includes(p.id));

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-md flex flex-col bg-background">
        <SheetHeader className="border-b border-border pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle className="font-display text-xl flex items-center gap-2">
              <Heart className="h-5 w-5 text-destructive fill-destructive" />
              My Favorites
            </SheetTitle>
          </div>
        </SheetHeader>

        {favoriteProducts.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
            <Heart className="h-12 w-12 text-muted-foreground/20 mb-4" />
            <p className="text-muted-foreground font-body">No favorites yet</p>
            <p className="text-xs text-muted-foreground/60 font-body mt-1">
              Tap the heart icon to save products
            </p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="space-y-3 py-4">
                {favoriteProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border shadow-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-sm text-foreground truncate">
                        {product.name}
                      </h4>
                      <span className="inline-block mt-0.5 text-xs text-muted-foreground font-body">
                        {product.packSize}
                      </span>
                      <p className="text-gold font-display mt-0.5">
                        ₹{product.mrp}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        onClick={() => addToCart(product)}
                        className="gold-gradient text-foreground hover:opacity-90 rounded-full font-body font-semibold active:scale-95"
                      >
                        <Plus className="h-3.5 w-3.5 mr-1" />
                        Add
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        onClick={() => removeFromFavorites(product.id)}
                        className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 active:scale-90"
                      >
                        <X className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t border-border pt-4 mt-auto">
              <Button
                variant="outline"
                onClick={clearFavorites}
                className="w-full text-destructive hover:bg-destructive/10 hover:text-destructive border-border"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Clear All Favorites
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default FavoritesList;
