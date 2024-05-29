import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";

import { CustomMiddleware } from "./chain";

export function withAuthMiddleware(middleware: CustomMiddleware) {
  return async (
    request: NextRequest,
    event: NextFetchEvent,
    response: NextResponse,
  ) => {
    const pathname = request.nextUrl.pathname;

    const authToken = request.cookies.get("authToken");
    const isAuthenticated = !!authToken;
    const url = request.nextUrl.clone();

    if (isAuthenticated) {
      // Usuario autenticado
      response.cookies.set("authToken", authToken.value);
    }

    return middleware(request, event, response);
  };
}
