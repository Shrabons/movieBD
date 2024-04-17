import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["en", "bn"];

let defaultLocale = "en";

function getLocale(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
  const headers = { "accept-language": acceptedLanguage };
  const language = new Negotiator({ headers }).language();
  return match(language, locales, defaultLocale);
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  const pathnameMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && !pathname !== `/${locale}`
  );

  if (pathnameMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|assets|.*\\..*|_next).*)"],
};
