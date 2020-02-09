webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/shared.js":
/*!*************************!*\
  !*** ./pages/shared.js ***!
  \*************************/
/*! exports provided: Header, Layout, getRenderedBy, PostLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRenderedBy", function() { return getRenderedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLink", function() { return PostLink; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var linkStyle = {
  marginRight: 15
};
var Header = function Header() {
  return __jsx("div", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/"
  }, __jsx("a", {
    style: linkStyle
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about"
  }, __jsx("a", {
    style: linkStyle
  }, "About")));
};
var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};
var Layout = function Layout(props) {
  return __jsx("div", {
    style: layoutStyle
  }, __jsx(Header, null), props.children);
};
function getRenderedBy() {
  return  true && window.document ? 'client' : 'server';
}
var PostLink = function PostLink(props) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/p/".concat(props.id),
    href: "/post?title=".concat(props.title)
  }, __jsx("a", {
    style: linkStyle
  }, props.title));
};

/***/ })

})
//# sourceMappingURL=index.js.7f7cb94c8bd8dae9b0dc.hot-update.js.map