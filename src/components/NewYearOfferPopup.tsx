import { useState, useEffect } from "react";
import { X, Gift, Sparkles, PartyPopper } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const NewYearOfferPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup only once per session
    const hasSeenPopup = sessionStorage.getItem("masqati_newyear_popup_seen");
    if (!hasSeenPopup) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("masqati_newyear_popup_seen", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto p-0 overflow-hidden border-0 rounded-2xl">
        {/* Header with gradient */}
        <div className="relative bg-gradient-to-br from-red-600 via-amber-500 to-red-600 p-6 text-white text-center">
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] opacity-50" />
          
          <div className="relative z-10">
            <div className="flex justify-center items-center gap-2 mb-2">
              <PartyPopper className="h-8 w-8 animate-bounce" />
              <Sparkles className="h-6 w-6 animate-pulse text-yellow-200" />
              <PartyPopper className="h-8 w-8 animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
            <DialogTitle className="font-display text-3xl font-bold mb-1">
              🎉 New Year Offer! 🎉
            </DialogTitle>
            <p className="text-yellow-100 font-body text-sm">
              Celebrate with Masqati's Special Deal
            </p>
          </div>
        </div>

        {/* Offer content */}
        <div className="p-6 bg-card">
          <div className="text-center space-y-4">
            {/* Price badge */}
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-amber-400 to-yellow-500 text-navy font-display font-bold text-4xl px-8 py-3 rounded-full shadow-lg">
              ₹599
            </div>

            {/* Offer details */}
            <div className="space-y-3">
              <div className="flex items-center justify-center gap-3 text-foreground font-body">
                <span className="text-2xl">🎂</span>
                <span className="font-semibold">1 Kg Cake</span>
                <span className="text-muted-foreground">+</span>
              </div>
              
              <div className="bg-secondary/50 rounded-xl p-4 space-y-2">
                <p className="font-body text-sm text-muted-foreground">Choose one:</p>
                <div className="flex items-center justify-center gap-2 text-foreground font-body font-semibold">
                  <span className="text-xl">🍨</span>
                  <span>1 Litre Ice Cream</span>
                </div>
                <p className="text-muted-foreground text-sm font-body">— OR —</p>
                <div className="flex items-center justify-center gap-2 text-foreground font-body font-semibold">
                  <span className="text-xl">🥜</span>
                  <span>Namkeen worth ₹100</span>
                </div>
              </div>

              {/* Savings highlight */}
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-2">
                <p className="text-green-700 dark:text-green-400 font-body font-semibold text-sm">
                  🎁 Save ₹300 on this combo! Offer Valid till 01-01-2026
                </p>
              </div>
            </div>

            {/* CTA */}
            <Button
              onClick={() => setIsOpen(false)}
              className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg rounded-full"
            >
              <Gift className="h-5 w-5 mr-2" />
              Start Shopping
            </Button>

            <p className="text-muted-foreground text-xs font-body">
              *Cakes available: Butter Scotch, Red Velvet, Chocolate
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewYearOfferPopup;
