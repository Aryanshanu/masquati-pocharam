import masqatiLogo from "@/assets/masqati-logo.png";
import PromoBanner from "./PromoBanner";
import LocationBar from "./LocationBar";

const Header = () => {
  const productHighlights = [
    "Ice Creams & Sundaes",
    "Kulfi & Milkshakes",
    "Celebration Cakes",
    "Snacks & More",
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-lg">
      {/* Christmas/New Year Promo Banner */}
      <PromoBanner />

      {/* Main Header */}
      <div className="bg-primary py-4 px-4">
        <div className="container mx-auto">
          {/* Tagline */}
          <p className="text-center text-primary-foreground/90 font-display italic text-sm md:text-base mb-2">
            Celebrating 50+ Years of Sweet Legacy
          </p>

          {/* Logo and Badge Section */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img
                src={masqatiLogo}
                alt="Masqati - 50 Years of Quality Service"
                className="h-14 md:h-20 w-auto object-contain"
              />
              <p className="text-primary-foreground/80 text-xs font-body tracking-widest uppercase mt-1">
                Since 1965 • Made in Hyderabad
              </p>
            </div>

            {/* Trust Badge */}
            <div className="hidden sm:flex flex-col items-center justify-center bg-gradient-to-br from-yellow-400 to-yellow-600 text-yellow-900 px-3 py-2 rounded-lg shadow-md transform rotate-2">
              <span className="text-xs font-bold uppercase tracking-wide">50+ Years</span>
              <span className="text-xs font-semibold">Trust & Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Highlights Strip */}
      <div className="bg-cream border-y border-gold/30 py-3 overflow-hidden">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 md:gap-6 flex-wrap">
            {productHighlights.map((item, index) => (
              <span key={item} className="flex items-center">
                <span className="text-sm md:text-base font-display font-medium text-navy tracking-wide whitespace-nowrap">
                  {item}
                </span>
                {index < productHighlights.length - 1 && (
                  <span className="text-gold font-bold mx-3 md:mx-6">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Location Bar */}
      <LocationBar />
    </header>
  );
};

export default Header;
