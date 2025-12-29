import { useMemo, useRef, useEffect } from "react";
import { categories, products, getProductsByCategory, getSubcategoriesForCategory, getProductsBySubcategory } from "@/data/products";
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
        product.packSize.toLowerCase().includes(query) ||
        product.subcategory.toLowerCase().includes(query)
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
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

        const subcategories = getSubcategoriesForCategory(category.id);

        return (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className="mb-10 scroll-mt-40"
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6 pb-2 border-b-2 border-primary/20">
              <span className="text-2xl">{category.icon}</span>
              <h2 className="font-display text-xl font-semibold text-foreground">
                {category.name}
              </h2>
              <span className="text-muted-foreground text-sm font-body ml-auto">
                {categoryProducts.length} items
              </span>
            </div>

            {/* Subcategories */}
            {subcategories.map((subcategory) => {
              const subcatProducts = getProductsBySubcategory(category.id, subcategory);
              if (subcatProducts.length === 0) return null;

              return (
                <div key={subcategory} className="mb-6">
                  {/* Subcategory Header */}
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="font-display text-base font-medium text-foreground/80">
                      {subcategory}
                    </h3>
                    <span className="text-muted-foreground text-xs font-body">
                      ({subcatProducts.length})
                    </span>
                  </div>

                  {/* Products Grid */}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {subcatProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
