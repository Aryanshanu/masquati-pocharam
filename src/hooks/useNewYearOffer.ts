import { useMemo } from "react";
import { CartItem } from "@/context/CartContext";

// New Year Offer Constants
export const OFFER_COMBO_PRICE = 599;
export const OFFER_ICE_CREAM_LITRE_ID = "ic31"; // 1 Litre Ice Cream at ₹100
export const OFFER_NAMKEEN_THRESHOLD = 100; // ₹100 worth of namkeen

// Cake IDs eligible for offer (1 Kg cakes only)
export const OFFER_CAKE_IDS = ["ck1", "ck2", "ck3"]; // Butter Scotch, Red Velvet, Chocolate

export interface OfferStatus {
  isEligible: boolean;
  hasCake: boolean;
  cakeItem: CartItem | null;
  hasIceCream: boolean;
  iceCreamItem: CartItem | null;
  namkeenTotal: number;
  hasEnoughNamkeen: boolean;
  originalTotal: number;
  discountedTotal: number;
  savings: number;
  offerType: "ice-cream" | "namkeen" | null;
  missingMessage: string | null;
}

export const useNewYearOffer = (items: CartItem[]): OfferStatus => {
  return useMemo(() => {
    // Find eligible cake
    const cakeItem = items.find((item) =>
      OFFER_CAKE_IDS.includes(item.product.id)
    );
    const hasCake = !!cakeItem;

    // Find 1L ice cream
    const iceCreamItem = items.find(
      (item) => item.product.id === OFFER_ICE_CREAM_LITRE_ID
    );
    const hasIceCream = !!iceCreamItem;

    // Calculate namkeen total
    const namkeenTotal = items
      .filter((item) => item.product.category === "namkeen")
      .reduce((sum, item) => sum + item.product.mrp * item.quantity, 0);
    const hasEnoughNamkeen = namkeenTotal >= OFFER_NAMKEEN_THRESHOLD;

    // Determine offer type
    let offerType: "ice-cream" | "namkeen" | null = null;
    if (hasCake && hasIceCream) {
      offerType = "ice-cream";
    } else if (hasCake && hasEnoughNamkeen) {
      offerType = "namkeen";
    }

    const isEligible = !!offerType;

    // Calculate totals
    let originalTotal = items.reduce(
      (sum, item) => sum + item.product.mrp * item.quantity,
      0
    );

    let discountedTotal = originalTotal;
    let savings = 0;

    if (isEligible && cakeItem) {
      // Calculate what the combo items cost
      const cakeCost = cakeItem.product.mrp;
      const comboCost =
        offerType === "ice-cream"
          ? cakeCost + (iceCreamItem?.product.mrp || 0)
          : cakeCost + OFFER_NAMKEEN_THRESHOLD;

      // Apply offer: replace combo cost with ₹599
      if (offerType === "ice-cream" && iceCreamItem) {
        savings = cakeCost + iceCreamItem.product.mrp - OFFER_COMBO_PRICE;
      } else if (offerType === "namkeen") {
        savings = cakeCost + OFFER_NAMKEEN_THRESHOLD - OFFER_COMBO_PRICE;
      }
      
      discountedTotal = originalTotal - savings;
    }

    // Missing message
    let missingMessage: string | null = null;
    if (!hasCake) {
      missingMessage = "Add a 1 Kg Cake to unlock the New Year Offer!";
    } else if (!hasIceCream && !hasEnoughNamkeen) {
      const namkeenNeeded = OFFER_NAMKEEN_THRESHOLD - namkeenTotal;
      missingMessage = `Add 1L Ice Cream or ₹${namkeenNeeded} more Namkeen for offer`;
    }

    return {
      isEligible,
      hasCake,
      cakeItem,
      hasIceCream,
      iceCreamItem,
      namkeenTotal,
      hasEnoughNamkeen,
      originalTotal,
      discountedTotal,
      savings,
      offerType,
      missingMessage,
    };
  }, [items]);
};
