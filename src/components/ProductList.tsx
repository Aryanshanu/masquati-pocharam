import { useMemo, useRef, useEffect } from "react";
import { categories, products, getProductsByCategory } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductListProps {
  activeCategory: string;
  searchQuery: string;
  onCategoryInView: (categoryId: string) => void;
}

const ProductList = ({ activeCategory, searchQuery, onCategoryInView }: ProductListProps) => {
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) {
      return null;
    }
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.packSize.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery && categoryRefs.current[activeCategory]) {
      categoryRefs.current[activeCategory]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeCategory, searchQuery]);

  if (filteredProducts) {
    return (
      <div className="container mx-auto px-4 pb-32">
        <div className="mb-4">
          <h2 className="font-display text-xl font-semibold text-foreground">
            Search Results ({filteredProducts.length})
          </h2>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground font-body">
              No products found for "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pb-32">
      {categories.map((category) => {
        const categoryProducts = getProductsByCategory(category.id);
        if (categoryProducts.length === 0) return null;

        return (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className="mb-8 scroll-mt-40"
          >
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-border">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="font-display text-xl font-semibold text-foreground">
                {category.name}
              </h2>
              <span className="text-muted-foreground text-sm font-body ml-auto">
                {categoryProducts.length} items
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {categoryProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
