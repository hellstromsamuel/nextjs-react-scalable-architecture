import type { Preview } from "@storybook/nextjs-vite";
import "../src/app/globals.css";
import nextIntl from "./next-intl";

const preview: Preview = {
  initialGlobals: {
    locale: "en",
    locales: {
      en: { icon: "🇺🇸", title: "English", right: "EN" },
      no: { icon: "🇳🇴", title: "Norsk", right: "NO" },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    nextIntl,
  },
};

export default preview;
