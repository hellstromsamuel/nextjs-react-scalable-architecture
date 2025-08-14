"use client";

import { cn } from "../../lib/utils";
import { ThemeModeToggle } from "../ui/theme-mode-toggle";

interface Props {
  className?: string;
}

function SideBar({ className }: Props) {
  return (
    <aside
      className={cn(
        "w-64 p-4 flex flex-col justify-between p-3 transition-all duration-200 ease-in-out",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span>Logo</span>
      </div>

      <div className="space-y-4 overflow-hidden">
        {/* Add your navigation items here */}
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
