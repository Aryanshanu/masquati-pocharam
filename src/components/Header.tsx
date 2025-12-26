import { useState } from "react";
import { MapPin, Phone, X, Sparkles } from "lucide-react";
import masqatiLogo from "@/assets/masqati-logo.png";

const Header = () => {
  const [showPromo, setShowPromo] = useState(true);

  const productHighlights = [
    "Ice Creams & Sundaes",
    "Kulfi & Milkshakes",
    "Celebration Cakes",
    "Snacks & More",
  ];

  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/JnxHSYLbM7vbQfCu5", "_blank");
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi Masqati! I'd like to place an order.");
    window.open(`https://wa.me/917995686260?text=${message}`, "_blank");
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Dismissible Promo Strip */}
      {showPromo && (
        <div className="relative bg-gradient-to-r from-red-600 via-green-700 to-red-600 py-2 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTAiIGN5PSIxMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30" />
          <div className="container mx-auto flex items-center justify-center gap-3 relative">
            <span className="text-2xl animate-bounce">🎄</span>
            <p className="text-white text-sm md:text-base font-display font-semibold tracking-wide text-center">
              WE ARE NOW OPEN FOR CHRISTMAS & NEW YEAR CELEBRATIONS!
            </p>
            <span className="text-2xl animate-bounce" style={{ animationDelay: "0.5s" }}>🎅</span>
          </div>
          <button
            onClick={() => setShowPromo(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors p-1"
            aria-label="Close promo banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Premium Main Banner */}
      <div className="relative bg-gradient-to-br from-navy via-navy/95 to-navy overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        {/* Gold Border Top */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="container mx-auto py-4 px-4 relative">
          {/* Compact Header Layout */}
          <div className="flex flex-col items-center gap-2">
            {/* Logo Row with Trust Badge */}
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <img
                  src={masqatiLogo}
                  alt="Masqati - 50 Years of Quality Service"
                  className="h-14 md:h-20 w-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Trust Badge */}
              <div className="hidden sm:flex flex-col items-center justify-center bg-gradient-to-br from-gold via-yellow-400 to-gold text-navy px-3 py-2 rounded-lg shadow-lg shadow-gold/20 transform -rotate-2 border border-gold/50">
                <span className="text-[10px] font-bold uppercase tracking-wider">50+ Years</span>
                <span className="text-xs font-display font-bold">Trust & Quality</span>
              </div>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-2">
              <Sparkles className="h-3 w-3 text-gold" />
              <p className="text-gold font-display font-semibold text-xs md:text-sm tracking-wide">
                Celebrating 50+ Years of Sweet Legacy
              </p>
              <Sparkles className="h-3 w-3 text-gold" />
            </div>

            {/* Since Line */}
            <p className="text-cream font-bold text-xs tracking-[0.15em] uppercase">
              Since 1965 • Hyderabad
            </p>

            {/* Product Highlights - Compact */}
            <div className="flex items-center justify-center gap-1 md:gap-2 flex-wrap py-2 border-y border-gold/20 mt-1 w-full">
              {productHighlights.map((item, index) => (
                <span key={item} className="flex items-center">
                  <span className="text-xs md:text-sm font-display font-bold text-cream tracking-wide whitespace-nowrap">
                    {item}
                  </span>
                  {index < productHighlights.length - 1 && (
                    <span className="text-gold font-bold mx-1 md:mx-2 text-xs">✦</span>
                  )}
                </span>
              ))}
            </div>

            {/* Contact Section - Single Row on Desktop */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-1">
              {/* Address */}
              <button
                onClick={handleLocationClick}
                className="flex items-center gap-1.5 text-cream hover:text-gold transition-colors group"
              >
                <MapPin className="h-3.5 w-3.5 text-gold" />
                <span className="text-xs font-bold">
                  Near Infosys, Pocharam, Ghatkesar - Hyderabad
                </span>
              </button>

              <span className="w-px h-4 bg-gold/40 hidden md:block" />

              {/* Phone Numbers & WhatsApp */}
              <div className="flex items-center gap-2 md:gap-3">
                <a
                  href="tel:9666942997"
                  className="flex items-center gap-1 text-cream hover:text-gold transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  <span className="text-xs font-bold tracking-wide">9666942997</span>
                </a>

                <span className="w-px h-4 bg-gold/40" />

                <a
                  href="tel:7995686260"
                  className="flex items-center gap-1 text-cream hover:text-gold transition-colors"
                >
                  <Phone className="h-3.5 w-3.5 text-gold" />
                  <span className="text-xs font-bold tracking-wide">7995686260</span>
                </a>

                <span className="w-px h-4 bg-gold/40" />

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppClick}
                  className="flex items-center gap-1.5 bg-[#25D366] hover:bg-[#20BD5A] text-white px-3 py-1.5 rounded-full transition-all hover:scale-105 shadow-md shadow-[#25D366]/30 font-bold text-xs"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-4 w-4 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gold Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </header>
  );
};

export default Header;
