import { useState } from "react";
import { MapPin, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface CheckoutFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WHATSAPP_NUMBER = "917995686260";

const CheckoutForm = ({ open, onOpenChange }: CheckoutFormProps) => {
  const { items, clearCart } = useCart();
  const { toast } = useToast();
  
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});

  const cartTotal = items.reduce(
    (sum, item) => sum + item.product.mrp * item.quantity,
    0
  );

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Location not supported",
        description: "Your browser doesn't support geolocation",
        variant: "destructive",
      });
      return;
    }

    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          const locationText = data.display_name || `${latitude}, ${longitude}`;
          setLocation(locationText);
          toast({
            title: "Location detected",
            description: "Your location has been added",
          });
        } catch {
          setLocation(`${latitude.toFixed(6)}, ${longitude.toFixed(6)}`);
        }
        setIsLoadingLocation(false);
      },
      (error) => {
        setIsLoadingLocation(false);
        toast({
          title: "Location error",
          description: "Could not get your location. Please enter manually.",
          variant: "destructive",
        });
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  const validateForm = () => {
    const newErrors: { name?: string; contact?: string } = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[6-9]\d{9}$/.test(contact.replace(/\s/g, ""))) {
      newErrors.contact = "Please enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    let message = `🛒 *New Order from Masqati Catalogue*\n\n`;
    message += `👤 *Customer Details*\n`;
    message += `Name: ${name}\n`;
    message += `Contact: +91 ${contact}\n`;
    if (address.trim()) message += `Address: ${address}\n`;
    if (location.trim()) message += `Location: ${location}\n`;
    message += `\n📦 *Order Items*\n`;
    
    items.forEach((item, index) => {
      const itemTotal = item.product.mrp * item.quantity;
      message += `${index + 1}. ${item.product.name} (${item.product.packSize}) × ${item.quantity} = ₹${itemTotal}\n`;
    });

    message += `\n💰 *Total: ₹${cartTotal}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");

    clearCart();
    setName("");
    setContact("");
    setAddress("");
    setLocation("");
    onOpenChange(false);

    toast({
      title: "Order sent!",
      description: "Your order has been sent via WhatsApp",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md mx-4 rounded-2xl bg-background">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            Complete Your Order
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-3">
          {/* Name Field */}
          <div className="space-y-1.5">
            <Label htmlFor="name" className="font-body font-medium text-sm">
              Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) setErrors({ ...errors, name: undefined });
              }}
              className={`h-11 rounded-xl font-body border-border focus:ring-ring ${errors.name ? "border-destructive" : ""}`}
            />
            {errors.name && (
              <p className="text-destructive text-xs font-body">{errors.name}</p>
            )}
          </div>

          {/* Contact Field */}
          <div className="space-y-1.5">
            <Label htmlFor="contact" className="font-body font-medium text-sm">
              Contact Number <span className="text-destructive">*</span>
            </Label>
            <div className="flex gap-2">
              <div className="flex items-center justify-center bg-secondary px-3 rounded-xl text-muted-foreground font-body text-sm">
                +91
              </div>
              <Input
                id="contact"
                type="tel"
                placeholder="Mobile number"
                value={contact}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setContact(value);
                  if (errors.contact) setErrors({ ...errors, contact: undefined });
                }}
                className={`h-11 rounded-xl font-body border-border focus:ring-ring ${errors.contact ? "border-destructive" : ""}`}
              />
            </div>
            {errors.contact && (
              <p className="text-destructive text-xs font-body">{errors.contact}</p>
            )}
          </div>

          {/* Address Field */}
          <div className="space-y-1.5">
            <Label htmlFor="address" className="font-body font-medium text-sm">
              Delivery Address <span className="text-muted-foreground text-xs">(Optional)</span>
            </Label>
            <Textarea
              id="address"
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="min-h-[70px] rounded-xl font-body resize-none border-border focus:ring-ring"
            />
          </div>

          {/* Location Field */}
          <div className="space-y-1.5">
            <Label htmlFor="location" className="font-body font-medium text-sm">
              Location <span className="text-muted-foreground text-xs">(Optional)</span>
            </Label>
            <div className="flex gap-2">
              <Input
                id="location"
                placeholder="Enter or detect"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="h-11 rounded-xl font-body flex-1 border-border focus:ring-ring"
              />
              <Button
                type="button"
                variant="outline"
                onClick={handleGetLocation}
                disabled={isLoadingLocation}
                className="h-11 px-3 rounded-xl border-border"
              >
                {isLoadingLocation ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <MapPin className="h-4 w-4 text-gold" />
                )}
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-card rounded-xl p-3.5 border border-border space-y-2">
            <div className="flex justify-between font-body text-xs text-muted-foreground">
              <span>{items.length} items</span>
              <span>{items.reduce((sum, item) => sum + item.quantity, 0)} units</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-display text-sm">Total Amount</span>
              <span className="font-display text-lg text-gold">
                ₹{cartTotal}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full font-body text-base font-semibold active:scale-[0.98] transition-transform"
          >
            <Send className="h-4 w-4 mr-2" />
            Place Order via WhatsApp
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutForm;
