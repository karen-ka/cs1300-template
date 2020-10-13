// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-persona-js": () => import("./../src/pages/persona.js" /* webpackChunkName: "component---src-pages-persona-js" */),
  "component---src-pages-redesign-js": () => import("./../src/pages/redesign.js" /* webpackChunkName: "component---src-pages-redesign-js" */)
}

