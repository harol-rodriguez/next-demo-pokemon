import { chain } from "@/middlewares/chain";
import { withAuthMiddleware } from "@/middlewares/auth-middleware";
import { localeMiddleware } from "@/middlewares/locale-middleware";

export default chain([withAuthMiddleware, localeMiddleware]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
