import { categories } from "@/data/products";
import { cn } from "@/lib/utils";

interface CategoryNavProps {
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryNav = ({ activeCategory, onCategoryChange }: CategoryNavProps) => {
  return (
    <nav className="sticky top-[44px] z-40 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex gap-1.5 overflow-x-auto scrollbar-hide pb-0.5 snap-x snap-mandatory justify-start sm:justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                "flex items-center gap-1.5 px-4 py-2 rounded-full whitespace-nowrap transition-all duration-300 font-body text-xs font-semibold snap-start active:scale-95 relative",
                activeCategory === category.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="text-sm">{category.icon}</span>
              <span>{category.name.split('&')[0].trim()}</span>
              {/* Active underline indicator */}
              {activeCategory === category.id && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2.5px] gold-gradient rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CategoryNav;
