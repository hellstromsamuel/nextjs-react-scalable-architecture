import { Home, Settings, Map, LucideIcon, Heart } from "lucide-react";

export type SideBarTranslationKey = "home" | "map" | "locations" | "settings";

export interface SideBarLink {
  value: SideBarTranslationKey;
  href: string;
  icon: LucideIcon;
}

export const sideBarLinks: SideBarLink[] = [
  {
    value: "home",
    href: "/",
    icon: Home,
  },
  {
    value: "map",
    href: "/map",
    icon: Map,
  },
  {
    value: "locations",
    href: "/locations",
    icon: Heart,
  },
  {
    value: "settings",
    href: "/settings",
    icon: Settings,
  },
];
