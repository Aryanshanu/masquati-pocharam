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
      <div id="product-list" className="container mx-auto px-3 pb-24">
        <div className="mb-4">
          <h2 className="font-display text-xl text-foreground">
            Search Results
          </h2>
          <span className="inline-block mt-1 px-2.5 py-0.5 bg-secondary rounded-full text-muted-foreground text-xs font-body font-medium">
            {filteredProducts.length} found
          </span>
        </div>
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground font-body">
              No products found for "{searchQuery}"
            </p>
          </div>
        ) : (
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="product-list" className="container mx-auto px-3 pb-24">
      {categories.map((category) => {
        const categoryProducts = getProductsByCategory(category.id);
        if (categoryProducts.length === 0) return null;

        const subcategories = getSubcategoriesForCategory(category.id);

        return (
          <div
            key={category.id}
            ref={(el) => (categoryRefs.current[category.id] = el)}
            className="mb-10 scroll-mt-28"
          >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{category.icon}</span>
                <div>
                  <h2 className="font-display text-xl text-foreground">
                    {category.name}
                  </h2>
                  <div className="h-0.5 w-12 bg-gold mt-1 rounded-full" />
                </div>
              </div>
              <span className="px-2.5 py-0.5 bg-secondary rounded-full text-muted-foreground text-xs font-body font-medium">
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
                    <h3 className="font-body text-xs font-semibold uppercase tracking-widest text-gold">
                      {subcategory}
                    </h3>
                    <span className="text-muted-foreground text-[10px] font-body px-1.5 py-0.5 bg-secondary rounded-full">
                      {subcatProducts.length}
                    </span>
                  </div>

                  {/* Products Grid */}
                  <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
