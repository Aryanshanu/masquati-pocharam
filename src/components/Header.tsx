import masqatiLogo from "@/assets/masqati-logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <img
              src={masqatiLogo}
              alt="Masqati - 50 Years of Quality Service"
              className="h-16 w-auto object-contain"
            />
            <p className="text-primary-foreground/80 text-xs font-body tracking-widest uppercase">
              50 Years of Quality Service
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
