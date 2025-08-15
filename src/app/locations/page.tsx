import { useTranslations } from "next-intl";
import { H1 } from "@/components/ui/typography";

export default function Locations() {
  const t = useTranslations("Pages.Locations");

  return (
    <main>
      <H1>{t("title")}</H1>
    </main>
  );
}
