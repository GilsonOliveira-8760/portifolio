import {Home} from "./pages/home.js";

const routes = {
    "/": Home,
};

export function router() {
    const path = window.location.pathname.replace("/portifolio", "") || "/";
    const page = routes[path] || Home;

    document.getElementById("app").innerHTML = page();
}