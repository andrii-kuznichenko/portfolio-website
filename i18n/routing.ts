import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "de", "ua", "ru"],
  defaultLocale: "en",
});
