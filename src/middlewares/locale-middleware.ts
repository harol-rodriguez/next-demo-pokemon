import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { CustomMiddleware } from "./chain";

export function localeMiddleware(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next();

    const lang = request.cookies.get("lang")?.value || "en";

    response.cookies.set("lang", lang, { path: "/" });

    return middleware(request, event, response);
  };
}
