import { Home } from "./pages/home.js";
import { aboutMe } from "./pages/aboutMe.js";
import { maintanancePage } from "./pages/maintanancePage.js";

export const routes = [
    {path: "/", render: Home},
    {path: "/Sobre", render: aboutMe},

    // exemplo de rota dinâmica (implementação futura)
    // { path: "/projetos/:slug", render: ProjectDetail },

    {path: "*", render: maintanancePage}
]

/**
 * Normaliza hash:
 *  - ""          -> "/"
 *  - "#/"        -> "/"
 *  - "#/contato" -> "/contato"
*/

// function getHashPath() {
//   const raw = window.location.hash || "#/";
//   const path = raw.replace(/^#/, "");
//   return path === "" ? "/" : path;
// }

function parseHashLocation() {
  // Ex: "#/?section=contact"  -> path="/" , query="section=contact"
  const raw = window.location.hash || "#/";
  const hash = raw.replace(/^#/, ""); // "/?section=contact"
  const [pathPart, queryString = ""] = hash.split("?");

  const path = pathPart === "" ? "/" : pathPart;

  const query = Object.fromEntries(new URLSearchParams(queryString).entries());
  return { path, query };
}


/**
 * Match simples com suporte a parâmetros tipo "/projetos/:slug"
 */
function matchRoute(path) {
  for (const route of routes) {
    if (route.path === "*") continue;

    // rota exata
    if (!route.path.includes(":") && route.path === path) {
      return { render: route.render, params: {} };
    }

    // rota dinâmica
    if (route.path.includes(":")) {
      const routeParts = route.path.split("/").filter(Boolean);
      const pathParts = path.split("/").filter(Boolean);

      if (routeParts.length !== pathParts.length) continue;

      const params = {};
      let ok = true;

      for (let i = 0; i < routeParts.length; i++) {
        const rp = routeParts[i];
        const pp = pathParts[i];

        if (rp.startsWith(":")) {
          params[rp.slice(1)] = decodeURIComponent(pp);
        } else if (rp !== pp) {
          ok = false;
          break;
        }
      }

      if (ok) return { render: route.render, params };
    }
  }

  // fallback "*"
  const fallback = routes.find(r => r.path === "*");
  return { render: fallback ? fallback.render : () => "", params: {} };
}

// export function router() {
//   const app = document.getElementById("app");
//   if (!app) return;

//   const path = getHashPath();
//   const { render, params } = matchRoute(path);

//   // render pode receber params se precisar
//   app.innerHTML = render(params);
// }

export function router() {
  const app = document.getElementById("app");
  if (!app) return;

  const { path, query } = parseHashLocation();
  const { render, params } = matchRoute(path);

  app.innerHTML = render({ ...params, query });

  // Scroll pós-render (se quiser que seja global)
  if (query.section) {
    const el = document.getElementById(query.section);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
