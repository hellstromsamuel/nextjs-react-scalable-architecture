"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "../../lib/utils";

interface Props {
  variant?: "outline" | "ghost";
  showText?: boolean;
  className?: string;
}

export function ThemeModeToggle({
  variant = "outline",
  showText = false,
  className,
}: Props) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={showText ? "default" : "icon"}
          className={className}
        >
          <div className="flex items-center gap-2">
            <Sun className="size-4 dark:hidden" />
            <Moon className="size-4 hidden dark:block" />
            <span className={cn("block dark:hidden", !showText && "sr-only")}>
              Light
            </span>
            <span className={cn("hidden dark:block", !showText && "sr-only")}>
              Dark
            </span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="size-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="size-4" />
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
