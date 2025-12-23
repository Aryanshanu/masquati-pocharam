import { X } from "lucide-react";
import { useState } from "react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-red-600 via-red-500 to-green-600 text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="text-lg">🎄</span>
        <p className="text-sm md:text-base font-body font-semibold tracking-wide text-center">
          WE ARE NOW OPEN FOR CHRISTMAS & NEW YEAR!
        </p>
        <span className="text-lg">🎅</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
        aria-label="Dismiss banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default PromoBanner;
