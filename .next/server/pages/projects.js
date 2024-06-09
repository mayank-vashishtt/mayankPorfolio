"use strict";
(() => {
var exports = {};
exports.id = 3327;
exports.ids = [3327];
exports.modules = {

/***/ 6975:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Projects)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(7527);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/SectionHeading.jsx


function SectionHeading({ number , children , className , ...props }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
        className: external_clsx_default()(className, "inline-flex items-center rounded-full py-1 px-4 text-[#00843D] dark:text-yellow-400 ring-1 ring-inset ring-[#00843D] dark:ring-yellow-400"),
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-mono text-base font-semibold",
                "aria-hidden": "true"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-3 text-base font-semibold font-mono tracking-tighter",
                children: children
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/helper/projects.js + 4 modules
var projects = __webpack_require__(9094);
;// CONCATENATED MODULE: ./src/pages/projects.jsx







function LinkIcon(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z",
            fill: "currentColor"
        })
    });
}
function Projects() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Projects"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "My Projects"
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
                            children: "Throughout my journey in computer science, I have engaged in a variety of projects that have solidified my understanding and application of various technologies and concepts. My projects range from developing fundamental data structures and algorithms to building complex systems such as a multi-threaded file server, a basic operating system kernel, and web applications using modern frameworks."
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-16",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(SectionHeading, {
                                children: "Active Projects"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-zinc-600 dark:text-zinc-400 text-lg font-mono leading-7 mt-3"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                role: "list",
                                className: "grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 mt-12 mb-16",
                                children: projects/* default.map */.Z.map((project)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* Card */.Z, {
                                        as: "li",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "relative z-10 flex h-20 w-20 items-center justify-center rounded-lg bg-white shadow-md shadow-zinc-800/20 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-white/10 dark:shadow-white/10",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    src: project.logo,
                                                    alt: "Project Logo",
                                                    className: "p-2",
                                                    unoptimized: true
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: "mt-6 text-2xl font-semibold font-mono text-zinc-800 dark:text-zinc-100",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Link */.Z.Link, {
                                                    href: project.link.href,
                                                    children: project.name
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Card/* Card.Description */.Z.Description, {
                                                children: project.description
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                className: "relative z-10 mt-6 flex text-md font-semibold font-mono text-zinc-600 transition group-hover:text-[#00843D] dark:group-hover:text-yellow-400 dark:text-zinc-200",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(LinkIcon, {
                                                        className: "h-6 w-6 flex-none scale-110"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "ml-2",
                                                        children: project.link.label
                                                    })
                                                ]
                                            })
                                        ]
                                    }, project.name))
                            })
                        ]
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
var __webpack_exports__ = __webpack_require__.X(0, [7398,676,1664,5675,7527,5834,9094], () => (__webpack_exec__(6975)));
module.exports = __webpack_exports__;

})();