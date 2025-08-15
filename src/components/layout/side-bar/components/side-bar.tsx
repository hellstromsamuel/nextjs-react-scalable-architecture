import Link from "next/link";
import { cn } from "../../../../lib/utils";
import { ThemeModeToggle } from "../../../ui/theme-mode-toggle";
import { Button } from "../../../ui/button";
import { sideBarLinks } from "../utils/side-bar-links";

interface Props {
  className?: string;
}

function SideBar({ className }: Props) {
  return (
    <aside
      className={cn(
        "w-64 p-3 flex flex-col justify-between transition-all duration-200 ease-in-out",
        className
      )}
    >
      <div className="flex flex-col gap-2">
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
                {link.label}
              </Link>
            </Button>
          );
        })}
      </div>

      <div>
        <ThemeModeToggle
          variant="outline"
          showText
          className="w-full justify-between"
        />
      </div>
    </aside>
  );
}

export default SideBar;
