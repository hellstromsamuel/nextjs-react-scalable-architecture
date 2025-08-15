import en from "../messages/en.json";
import no from "../messages/no.json";

const messagesByLocale: Record<string, any> = { en, no };

const nextIntl = {
  defaultLocale: "en",
  messagesByLocale,
};

export default nextIntl;
