import { Plus, Heart } from "lucide-react";
import { featuredProducts, getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useFavorites } from "@/context/FavoritesContext";

const TopPicks = () => {
  const { addToCart, getItemQuantity } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  return (
    <section className="bg-primary py-8 border-t border-gold/10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="font-display text-2xl md:text-3xl text-primary-foreground tracking-wide">
            Top Picks
          </h2>
          <div className="w-16 h-0.5 gold-gradient mx-auto mt-2 rounded-full" />
        </div>

        {/* Collections */}
        <div className="space-y-6">
          {Object.entries(featuredProducts).map(([collectionName, productIds]) => (
            <div key={collectionName}>
              {/* Collection Label */}
              <h3 className="font-display text-sm md:text-base text-gold mb-3 tracking-wide">
                {collectionName}
              </h3>

              {/* Horizontal Scroll Row */}
              <div className="flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {productIds.map((id) => {
                  const product = getProductById(id);
                  if (!product) return null;
                  const favorited = isFavorite(product.id);
                  const inCart = getItemQuantity(product.id) > 0;

                  return (
                    <div
                      key={product.id}
                      className="snap-start flex-shrink-0 w-[200px] bg-card rounded-2xl border-l-2 border-l-gold border border-border p-3 relative card-hover"
                    >
                      {/* Heart */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-secondary/70 hover:bg-secondary transition-colors active:scale-90 z-10"
                        aria-label={favorited ? "Remove from favorites" : "Add to favorites"}
                      >
                        <Heart
                          className={`h-3.5 w-3.5 transition-all duration-200 ${
                            favorited
                              ? "text-destructive fill-destructive"
                              : "text-muted-foreground hover:text-destructive"
                          }`}
                        />
                      </button>

                      {/* Info */}
                      <div className="pr-8">
                        <h4 className="font-display text-sm font-normal text-foreground leading-tight line-clamp-2">
                          {product.name}
                        </h4>
                        <span className="inline-block mt-1 px-1.5 py-0.5 bg-secondary rounded text-muted-foreground text-[10px] font-body font-medium">
                          {product.packSize}
                        </span>
                      </div>

                      {/* Price + Add */}
                      <div className="mt-2 flex items-center justify-between">
                        <p className="font-display text-lg text-gold">
                          ₹{product.salePrice || product.mrp}
                        </p>
                        <button
                          onClick={() => addToCart(product)}
                          className={`flex items-center gap-1 text-xs font-body font-semibold px-3 py-1.5 rounded-full active:scale-95 transition-all shadow-sm ${
                            inCart
                              ? "bg-primary text-primary-foreground"
                              : "gold-gradient text-foreground hover:opacity-90"
                          }`}
                        >
                          <Plus className="h-3 w-3" />
                          {inCart ? "More" : "Add"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
