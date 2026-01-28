import {router} from "./routes.js";

// roda ao carregar
router();

// roda ao mudar hash (navegação)
window.addEventListener("hashchange", router);

// intercepta cliques para permitir ajustes futuros (analytics, close menu mobile etc.)
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[data-link]");
  if (!link) return;

  const href = link.getAttribute("href");
  if (!href || !href.startsWith("#/")) return;

  // com hash não precisa preventDefault; mas manter permite controle consistente
  e.preventDefault();
  window.location.hash = href;
});
