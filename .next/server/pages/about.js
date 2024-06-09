"use strict";
(() => {
var exports = {};
exports.id = 2521;
exports.ids = [2521];
exports.modules = {

/***/ 1457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About)
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
;// CONCATENATED MODULE: ./src/images/logo_black.png
/* harmony default export */ const logo_black = ({"src":"/_next/static/media/logo_black.8ac56d3c.png","height":1350,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAlklEQVR42mNgl1cUUVBUVQYCFWUlEGBIMzdIMNZlkJNXVpBRUgJKKDH0hbrHWBkxKKnr6psDBUCqajOS1eRlgl1dJxdVmSooy6koM3TX1+7ftKGtvGhxUSKDrIqkhDgDEDSWFqVmF8rG5nT0TfSyt2FQV1MDimoERBn5Rm5fNCvKx51BUUlRT1tb38WDydTu0OyG7EBnAH/LJLjeTb/0AAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});
;// CONCATENATED MODULE: ./src/pages/about.jsx





function About() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "About me "
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "about me"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16 sm:mt-32",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:pl-20",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-w-xs px-2.5 lg:max-w-none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: logo_black,
                                    alt: "photo 2",
                                    sizes: "(min-width: 1024px) 32rem, 20rem",
                                    className: "aspect-square rotate-3 rounded-2xl bg-black object-cover dark:bg-zinc-800 shadow-xl drop-shadow-xl shadow-zinc-900/30 dark:shadow-zinc-400/10"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:order-first lg:row-span-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    className: "text-4xl font-black font-mono tracking-tighter text-zinc-800 dark:text-zinc-100 sm:text-5xl",
                                    children: "About"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "mt-6 space-y-7 text-base font-mono text-zinc-600 dark:text-zinc-400",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "I am a passionate learner and builder, dedicated to constantly expanding my knowledge and honing my skills. With a diverse background that includes playing at the national level in sports, I have developed a strong sense of discipline, teamwork, and perseverance. My experience in sports has also taught me the importance of strategic thinking and adaptability, qualities that I bring to every aspect of my life."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "In the field of computer science, I have a solid foundation in data structures and algorithms (DSA), which I am currently refining to stay at the cutting edge of technology. My commitment to excellence drives me to continuously improve and innovate, aiming to become one of the most influential figures in the tech industry."
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "I thrive on challenges and am excited about the opportunity to contribute my skills and enthusiasm to a dynamic team. Whether it's through developing robust software solutions or optimizing complex algorithms, I am eager to make a significant impact and grow alongside like-minded professionals."
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "lg:pl-20"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [7398,5675,7527], () => (__webpack_exec__(1457)));
module.exports = __webpack_exports__;

})();