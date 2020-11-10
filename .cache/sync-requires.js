const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/404.js"))),
  "component---src-pages-abtesting-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/abtesting.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/index.js"))),
  "component---src-pages-iterative-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/iterative.js"))),
  "component---src-pages-persona-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/persona.js"))),
  "component---src-pages-redesign-js": hot(preferDefault(require("/Users/karenka/Desktop/CS/uiux/cs1300-template/src/pages/redesign.js")))
}

