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
    window.open("https://maps.app.goo.gl/frA9pRi4SsnLgR4R9", "_blank");
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
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <div className="container mx-auto py-6 px-4 relative">
          {/* Top Section - Logo & Trust Badge */}
          <div className="flex flex-col items-center gap-4 mb-6">
            {/* Sparkle Tagline */}
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-gold animate-pulse" />
              <p className="text-gold font-display italic text-sm md:text-base tracking-wide">
                Celebrating 50+ Years of Sweet Legacy
              </p>
              <Sparkles className="h-4 w-4 text-gold animate-pulse" />
            </div>

            {/* Logo & Badge Row */}
            <div className="flex items-center justify-center gap-6 md:gap-10">
              {/* Logo */}
              <div className="flex flex-col items-center">
                <img
                  src={masqatiLogo}
                  alt="Masqati - 50 Years of Quality Service"
                  className="h-16 md:h-24 w-auto object-contain drop-shadow-2xl"
                />
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-8 h-px bg-gradient-to-r from-transparent to-gold" />
                  <p className="text-cream/80 text-xs font-body tracking-[0.2em] uppercase">
                    Since 1965 • Hyderabad
                  </p>
                  <span className="w-8 h-px bg-gradient-to-l from-transparent to-gold" />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="hidden sm:flex flex-col items-center justify-center bg-gradient-to-br from-gold via-yellow-400 to-gold text-navy px-4 py-3 rounded-lg shadow-lg shadow-gold/20 transform -rotate-2 border border-gold/50">
                <span className="text-xs font-bold uppercase tracking-wider">50+ Years</span>
                <span className="text-sm font-display font-bold">Trust & Quality</span>
              </div>
            </div>
          </div>

          {/* Product Highlights */}
          <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap mb-6 py-3 border-y border-gold/20">
            {productHighlights.map((item, index) => (
              <span key={item} className="flex items-center">
                <span className="text-sm md:text-base font-display font-medium text-cream/90 tracking-wide whitespace-nowrap">
                  {item}
                </span>
                {index < productHighlights.length - 1 && (
                  <span className="text-gold font-bold mx-2 md:mx-4">✦</span>
                )}
              </span>
            ))}
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center gap-4">
            {/* Address */}
            <button
              onClick={handleLocationClick}
              className="flex items-center gap-2 text-cream/90 hover:text-gold transition-colors group"
            >
              <div className="p-1.5 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                <MapPin className="h-4 w-4 text-gold" />
              </div>
              <span className="text-sm font-body">
                Near Infosys, Pocharam, Ghatkesar - Hyderabad - 500088
              </span>
            </button>

            {/* Phone & WhatsApp Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6">
              {/* Phone 1 */}
              <a
                href="tel:9666942997"
                className="flex items-center gap-2 text-cream/90 hover:text-gold transition-colors group"
              >
                <div className="p-1.5 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <span className="text-sm font-body font-semibold tracking-wide">9666942997</span>
              </a>

              <span className="w-px h-5 bg-gold/30 hidden md:block" />

              {/* Phone 2 */}
              <a
                href="tel:7995686260"
                className="flex items-center gap-2 text-cream/90 hover:text-gold transition-colors group"
              >
                <div className="p-1.5 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
                  <Phone className="h-4 w-4 text-gold" />
                </div>
                <span className="text-sm font-body font-semibold tracking-wide">7995686260</span>
              </a>

              <span className="w-px h-5 bg-gold/30 hidden md:block" />

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded-full transition-all hover:scale-105 shadow-lg shadow-[#25D366]/30 font-semibold"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-sm">Order on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* Gold Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>
    </header>
  );
};

export default Header;
