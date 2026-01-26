import { Home } from "./pages/home.js";
import { aboutMe } from "./pages/aboutMe.js";
import { maintanancePage } from "./pages/maintanancePage.js";

const routes = {
    "/": Home,
    // "/projectsBlog": null,
    "/aboutMe": aboutMe,
    "/maintanancePage": maintanancePage,
};

export function router() {
    const path = window.location.pathname.replace("/portifolio", "") || "/";
    const page = routes[path] || Home;

    document.getElementById("app").innerHTML = page();
}