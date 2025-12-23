import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/context/FavoritesContext";

interface FloatingFavoritesButtonProps {
  onClick: () => void;
}

const FloatingFavoritesButton = ({ onClick }: FloatingFavoritesButtonProps) => {
  const { favorites } = useFavorites();
  const count = favorites.length;

  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 left-6 h-14 w-14 rounded-full bg-white border-2 border-red-400 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 z-40"
      size="icon"
    >
      <div className="relative">
        <Heart className="h-6 w-6 text-red-500 fill-red-500" />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {count > 9 ? "9+" : count}
          </span>
        )}
      </div>
    </Button>
  );
};

export default FloatingFavoritesButton;
