import { MapPin } from "lucide-react";

const LocationBar = () => {
  const handleLocationClick = () => {
    window.open(
      "https://maps.google.com/?q=Near+Infosys+Pocharam+Ghatkesar+Hyderabad+500088",
      "_blank"
    );
  };

  return (
    <div className="bg-cream border-t border-gold/30 py-3 px-4">
      <div className="container mx-auto flex flex-col items-center gap-1.5">
        <button
          onClick={handleLocationClick}
          className="flex items-center gap-2 text-navy hover:text-primary transition-colors group"
        >
          <MapPin className="h-4 w-4 text-gold group-hover:scale-110 transition-transform" />
          <span className="text-sm font-display font-medium tracking-wide">
            Near Infosys, Pocharam, Ghatkesar - Hyderabad - 500088
          </span>
        </button>
        <p className="text-xs font-display text-navy/70 italic">
          Step In & Celebrate with Us!
        </p>
      </div>
    </div>
  );
};

export default LocationBar;
