import { useTranslations } from "next-intl";
import { H1 } from "@/components/ui/typography";

export default function Settings() {
  const t = useTranslations("Pages.Settings");

  return (
    <main>
      <H1>{t("title")}</H1>
    </main>
  );
}
