import { MapPin, ChevronDown } from "lucide-react";
import masqatiLogo from "@/assets/masqati-logo.png";

const MAPS_URL = "https://www.google.com/maps/place/Masqati+Ice+Cream+Parlour+-+Pocharam/@17.4454102,78.6397626,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9db6889388a9:0xf94a56debefa0510!8m2!3d17.4454051!4d78.6423375!16s%2Fg%2F11ysz263r2?entry=ttu&g_ep=EgoyMDI2MDIyMi4wIKXMDSoASAFQAw%3D%3D";

const HeroSection = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi Masqati! I'd like to place an order.");
    window.open(`https://wa.me/917995686260?text=${message}`, "_blank");
  };

  const scrollToMenu = () => {
    const el = document.getElementById("product-list");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Subtle gold pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--gold)) 1px, transparent 1px), radial-gradient(circle at 75% 75%, hsl(var(--gold)) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative container mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <img
            src={masqatiLogo}
            alt="Masqati - Premium Ice Creams & Dairy"
            className="h-20 md:h-28 w-auto object-contain drop-shadow-lg"
          />

          {/* Tagline */}
          <div>
            <h1 className="font-display text-3xl md:text-5xl text-primary-foreground tracking-wide">
              MASQATI
            </h1>
            <p className="text-gold font-display text-lg md:text-xl italic mt-1">
              50+ Years of Sweet Legacy
            </p>
          </div>

          {/* Description */}
          <p className="text-primary-foreground/70 font-body text-sm md:text-base max-w-md leading-relaxed">
            Premium ice creams, fresh dairy, authentic namkeens, and now — our exclusive food & beverages menu. Crafted with love in Pocharam, Ghatkesar.
          </p>

          {/* Location Card */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/15 border border-gold/20 rounded-full px-5 py-2.5 transition-all group"
          >
            <MapPin className="h-4 w-4 text-gold group-hover:scale-110 transition-transform" />
            <span className="text-primary-foreground/90 font-body text-sm font-medium">
              Pocharam, Ghatkesar — View on Maps
            </span>
          </a>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <button
              onClick={scrollToMenu}
              className="gold-gradient text-primary font-body font-semibold text-sm px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Explore Menu
            </button>
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-body font-semibold text-sm px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </button>
          </div>

          {/* Scroll indicator */}
          <button onClick={scrollToMenu} className="mt-4 animate-bounce text-gold/50 hover:text-gold transition-colors">
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
