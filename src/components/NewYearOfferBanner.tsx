import { Gift, Sparkles } from "lucide-react";

const NewYearOfferBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-red-600 via-amber-500 to-red-600 py-3 px-4 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] opacity-50" />
      
      {/* Floating sparkles */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 animate-pulse">
        <Sparkles className="h-5 w-5 text-yellow-200" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "0.3s" }}>
        <Sparkles className="h-5 w-5 text-yellow-200" />
      </div>
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative">
        <div className="flex items-center gap-2">
          <Gift className="h-5 w-5 text-yellow-200 animate-bounce" />
          <span className="text-white font-display font-bold text-sm md:text-lg tracking-wide">
            🎉 NEW YEAR OFFER 🎉
          </span>
          <Gift className="h-5 w-5 text-yellow-200 animate-bounce" style={{ animationDelay: "0.2s" }} />
        </div>
        
        <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-1">
          <span className="text-white font-body font-semibold text-xs md:text-sm text-center">
            1 Kg Cake + 1L Ice Cream @ <span className="text-yellow-200 font-bold text-base md:text-lg">₹599</span> only!
          </span>
        </div>
        

    </div>
  );
};

export default NewYearOfferBanner;
