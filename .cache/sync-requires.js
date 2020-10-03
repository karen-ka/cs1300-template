const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/404.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/imprint.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/index.js"))),
  "component---src-pages-persona-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/persona.js"))),
  "component---src-pages-privacy-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/privacy.js"))),
  "component---src-pages-project-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/project.js")))
}

