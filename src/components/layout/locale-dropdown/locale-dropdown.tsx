"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "../../../lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { supportedLocales } from "../../../i18n/locales";
import { SupportedLocale } from "../../../types/locale/supported-locale";

export function LocaleDropdown({
  variant = "outline",
  showText = false,
  className,
}: {
  variant?: "outline" | "ghost";
  showText?: boolean;
  className?: string;
}) {
  const locale = useLocale() as SupportedLocale;
  const t = useTranslations("Locale");

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) return;
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/`;
    window.location.reload();
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={variant}
          size={showText ? "default" : "icon"}
          className={className}
        >
          <span>{t(`${locale}.flag`)}</span>
          <span className={cn(!showText && "sr-only")}>
            {t(`${locale}.text`)}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLocales.map((supportedLocale) => (
          <DropdownMenuItem
            key={supportedLocale}
            onClick={() => handleLocaleChange(supportedLocale)}
          >
            <span>{t(`${supportedLocale}.flag`)}</span>
            <span>{t(`${supportedLocale}.text`)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
