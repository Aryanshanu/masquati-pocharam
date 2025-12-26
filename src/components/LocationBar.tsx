import { MapPin, Phone } from "lucide-react";

const LocationBar = () => {
  const handleLocationClick = () => {
    window.open("https://maps.app.goo.gl/frA9pRi4SsnLgR4R9", "_blank");
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:9666942997";
  };

  return (
    <div className="bg-gradient-to-r from-primary via-primary to-primary/90 border-t-2 border-gold py-4 px-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center gap-3">
        {/* Brand Name */}
        <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground tracking-wide">MASQATI</h2>

        {/* Tagline */}
        <p className="text-xs md:text-sm font-display text-primary-foreground/80 italic">
          Step In & Celebrate with Us!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-1">
          {/* Address */}
          <button
            onClick={handleLocationClick}
            className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors group"
          >
            <MapPin className="h-4 w-4 text-gold group-hover:scale-110 transition-transform" />
            <span className="text-sm font-body font-medium">
              Near Infosys, Pocharam, Ghatkesar - Hyderabad - 500088
            </span>
          </button>

          {/* Divider */}
          <span className="hidden sm:block w-px h-5 bg-primary-foreground/30" />

          {/* Phone Numbers */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => (window.location.href = "tel:9666942997")}
              className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors group"
            >
              <Phone className="h-4 w-4 text-gold group-hover:scale-110 transition-transform" />
              <span className="text-sm font-body font-bold tracking-wide">9666942997</span>
            </button>

            <span className="w-px h-4 bg-primary-foreground/30" />

            <button
              onClick={() => (window.location.href = "tel:7995686260")}
              className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors group"
            >
              <Phone className="h-4 w-4 text-gold group-hover:scale-110 transition-transform" />
              <span className="text-sm font-body font-bold tracking-wide">7995686260</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationBar;
