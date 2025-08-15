import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const nextCookies = await cookies();
  const locale = nextCookies.get("NEXT_LOCALE")?.value || "no";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
