"use strict";
(() => {
var exports = {};
exports.id = 3805;
exports.ids = [3805];
exports.modules = {

/***/ 8571:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(7527);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/TimelineElement.jsx


function TimelineElement({ title , description , button , time , link , classCondition  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "mb-10 ml-6",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "absolute flex items-center justify-center w-6 h-6 bg-green-100 rounded-full -left-3 ring-8 ring-white dark:ring-zinc-900 dark:bg-yellow-900 scale-150",
                children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    "aria-hidden": "true",
                    className: "w-3 h-3 text-green-800 dark:text-yellow-300",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        fillRule: "evenodd",
                        d: "M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z",
                        clipRule: "evenodd"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "flex font-mono tracking-tighter items-center mb-1 text-xl font-bold text-gray-900 dark:text-white ml-2",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("time", {
                className: "block mb-2 font-mono text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
                children: time
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "mb-4 font-mono tracking-tight text-base font-normal text-gray-500 dark:text-gray-400 ml-2",
                children: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: link,
                className: external_clsx_default()(classCondition, "inline-flex font-mono items-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-100 hover:text-green-700 focus:z-10 focus:ring-2 focus:outline-none focus:ring-gray-300 focus:text-green-700 dark:bg-zinc-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"),
                children: button
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/images/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.ca169fe6.svg","height":26,"width":205});
;// CONCATENATED MODULE: ./src/pages/apply.jsx







function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Resume"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "my resume"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* Container */.W, {
                className: "mt-20 mb-28",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mt-5",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7",
                            children: "As a creative professional, I have explored the dynamic and transformative nature of lines, using them as a fundamental element to convey emotion, structure, and meaning. Within this portfolio, you will discover a diverse range of projects that showcase my dedication to precision, balance, and innovation in line-based compositions."
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container.Inner */.W.Inner, {
                        className: "mt-16",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                            className: "relative border-l-2 border-gray-200 dark:border-gray-700",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(TimelineElement, {
                                title: "Mayank Vashisht",
                                description: "Enthusiastic learner mastering DSA, web dev, and AI-ML, with strong man management skills. Passionate about space and sci-fi tech, ready to contribute to innovative projects.. ",
                                button: "Contact Me",
                                link: "https://www.linkedin.com/in/mayank-vashisht-910830171/"
                            })
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7398,676,1664,5675,7527], () => (__webpack_exec__(8571)));
module.exports = __webpack_exports__;

})();