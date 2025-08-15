import { useTranslations } from "next-intl";
import { H1 } from "@/components/ui/typography";

export default function Map() {
  const t = useTranslations("Pages.Map");

  return (
    <main>
      <H1>{t("title")}</H1>
    </main>
  );
}
