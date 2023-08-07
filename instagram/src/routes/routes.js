import { LoginPage } from "../pages/auth/login";
import { RegisterPage } from "../pages/auth/register";
import { HomePage } from "../pages/home/home";
import { Redirect } from "../pages/redirect/redirect";
import { ProtectedPage } from "./protected-page";

class RouteClass {
  constructor(path, element, needLogin = false, guestOnly = false) {
    this.path = path;
    this.element = (
      <ProtectedPage needLogin={needLogin} guestOnly={guestOnly}>
        {element}
      </ProtectedPage>
    );
  }
}

export const routes = [
  new RouteClass("login", <LoginPage />, false, true),
  new RouteClass("register", <RegisterPage />, false, true),
  new RouteClass("home", <HomePage />, true, false),
  new RouteClass("*", <Redirect />, false, true),
];
