import {
  NextResponse,
  type NextFetchEvent,
  type NextRequest,
} from "next/server";
import { redirect } from 'next/navigation'

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

    url.pathname = '/home';
    debugger;
    if (isAuthenticated) {
      // console.log("authToken", response.cookies);
      // // Usuario autenticado
      // response.cookies.set("authToken", authToken.value);
      // return NextResponse.redirect(url);
      // console.log(request)
    }

    return middleware(request, event, response);
  };
}
