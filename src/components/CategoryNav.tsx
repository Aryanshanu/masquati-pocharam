import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="sticky top-[88px] z-40 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-2 py-3">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 font-body text-sm font-medium",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
