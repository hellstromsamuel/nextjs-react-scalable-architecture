import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeModeToggle } from "@/components/layout/theme-mode-toggle";
import { Button } from "@/components/ui/button";
import { sideBarLinks } from "@/utils/side-bar/side-bar-links";
import { useTranslations } from "next-intl";
import { LocaleSelect } from "@/components/layout/locale-select";

interface Props {
  className?: string;
}

function SideBar({ className }: Props) {
  const t = useTranslations("SideBar");

  return (
    <aside className={cn("p-3 flex flex-col justify-between", className)}>
      <div className="flex flex-col gap-2 mb-4">
        {sideBarLinks.map((link) => {
          return (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className="justify-start"
            >
              <Link href={link.href} className="flex items-center gap-2">
                <link.icon className="size-4" />
                {t(link.value)}
              </Link>
            </Button>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <LocaleSelect variant="outline" showText className="justify-start" />
        <ThemeModeToggle variant="outline" showText className="justify-start" />
      </div>
    </aside>
  );
}

export default SideBar;
