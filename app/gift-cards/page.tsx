import type { Metadata } from "next";
import GiftCardConfigurator from "@/components/GiftCardConfigurator";

export const metadata: Metadata = {
  title: "Gift Cards · Republic of the Rio Grande",
  description:
    "Republic, in any amount. Digital gift cards delivered instantly. Redeemable in-restaurant.",
};

export default function GiftCardsPage() {
  return <GiftCardConfigurator />;
}
