import { MapPin } from "lucide-react";

const LocationBar = () => {
  const handleLocationClick = () => {
    window.open(
      "https://maps.google.com/?q=Near+Infosys+Pocharam+Ghatkesar+Hyderabad+500088",
      "_blank"
    );
  };

  return (
    <div className="bg-secondary/50 border-t border-border py-2 px-4">
      <div className="container mx-auto flex flex-col items-center gap-1">
        <button
          onClick={handleLocationClick}
          className="flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
        >
          <MapPin className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-sm font-body">
            Near Infosys, Pocharam, Ghatkesar - Hyderabad - 500088
          </span>
        </button>
        <p className="text-xs font-body text-muted-foreground italic">
          Step In & Celebrate with Us!
        </p>
      </div>
    </div>
  );
};

export default LocationBar;
