import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="sticky top-[48px] z-40 bg-card/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-3 py-2.5">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-0.5 snap-x snap-mandatory justify-start sm:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-200 font-body text-xs font-medium snap-start active:scale-95",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
