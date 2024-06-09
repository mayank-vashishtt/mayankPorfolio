"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405];
exports.modules = {

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/alpa.8ac56d3c.png","height":1350,"width":1080,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAIAAABVpBlvAAAAlklEQVR42mNgl1cUUVBUVQYCFWUlEGBIMzdIMNZlkJNXVpBRUgJKKDH0hbrHWBkxKKnr6psDBUCqajOS1eRlgl1dJxdVmSooy6koM3TX1+7ftKGtvGhxUSKDrIqkhDgDEDSWFqVmF8rG5nT0TfSyt2FQV1MDimoERBn5Rm5fNCvKx51BUUlRT1tb38WDydTu0OyG7EBnAH/LJLjeTb/0AAAAAElFTkSuQmCC","blurWidth":6,"blurHeight":8});

/***/ }),

/***/ 6741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j": () => (/* binding */ Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
;// CONCATENATED MODULE: ./src/components/ContainerPattern.jsx


const styles = {
    xs: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2",
    sm: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12",
    md: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-6xl lg:px-8",
    lg: "mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8"
};
function ContainerPattern({ size ="sm" , className , ...props }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()(styles[size], className),
        ...props
    });
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Pattern.jsx


function Pattern({ size =40 , gapX =16 , gapY =8 , pattern =[
    [
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0
    ],
    [
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        1
    ],
    [
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        0
    ],
    [
        1,
        0,
        1,
        1,
        0,
        0,
        0,
        1
    ]
] , ...props }) {
    let id = (0,external_react_.useId)();
    let width = pattern[0].length * size + (pattern[0].length - 1) * gapX;
    let height = pattern.length * size + (pattern.length - 1) * gapY;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        "aria-hidden": "true",
        width: width,
        height: height,
        ...props,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("symbol", {
                        id: `${id}-0`,
                        width: size,
                        height: size,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                className: "fill-green-200 dark:fill-yellow-200",
                                width: size,
                                height: size
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                className: "fill-[#00843D] dark:fill-yellow-400",
                                cx: size / 2,
                                cy: size / 2,
                                r: size * (13 / 40)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("symbol", {
                        id: `${id}-1`,
                        width: size,
                        height: size,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                className: "fill-green-400 dark:fill-yellow-300 animate-pulse",
                                cx: size / 2,
                                cy: size / 2,
                                r: size / 2
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                className: "fill-[#00843D] dark:fill-yellow-400",
                                width: size / 2,
                                height: size / 2,
                                x: size / 4,
                                y: size / 4
                            })
                        ]
                    })
                ]
            }),
            pattern.map((row, rowIndex)=>row.map((shape, columnIndex)=>/*#__PURE__*/ jsx_runtime_.jsx("use", {
                        href: `#${id}-${shape}`,
                        x: columnIndex * size + columnIndex * gapX,
                        y: rowIndex * size + rowIndex * gapY
                    }, `${rowIndex}-${columnIndex}`)))
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/Banner.jsx




function Banner() {
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        "aria-label": "Apply Banner",
        className: "scroll-mt-14 bg-[#00843D] dark:bg-yellow-400 sm:scroll-mt-32",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "overflow-hidden lg:relative",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ContainerPattern, {
                size: "md",
                className: "relative grid grid-cols-1 items-end gap-y-12 lg:static lg:grid-cols-2 pt-24 pb-8 sm:py-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Pattern, {
                        className: "absolute -top-28 left-0 w-full sm:left-3/4 sm:-top-10 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Pattern, {
                        className: "absolute mt-2 -top-32 left-0 w-full sm:left-3/4 sm:top-36 sm:ml-8 sm:w-auto md:left-2/3 lg:left-auto lg:right-2 lg:ml-0 xl:right-auto xl:left-2/3 sm:visible invisible"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "font-mono text-5xl font-black tracking-tighter text-white dark:text-black sm:w-3/4 sm:text-5xl md:w-2/3 lg:w-auto",
                                children: "Building a Brand"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mt-4 text-lg tracking-tighter text-white dark:text-black font-medium font-mono",
                                children: "Coming Soon"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "group relative rounded-lg inline-flex items-center overflow-hidden bg-white dark:bg-black px-8 py-3 text-black dark:text-white focus:outline-none",
                                    href: "/apply",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "font-mono font-semibold ",
                                        children: "for more details"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ CardEffect)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


function CardEffect({ heading , content , logo  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: "group relative block h-[22rem] max-lg:w-72 max-xl:w-60 w-72 cursor-pointer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative shadow-xl flex h-full justify-center rounded-3xl border-2 border-gray-400 dark:border-gray-200 bg-white dark:bg-gray-800 md:p-8 p-8 px-16 lg:py-8 lg:px-0 xl:p-8",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "px-8 pb-4 self-center transition-opacity group-hover:absolute group-hover:opacity-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: logo,
                            width: 150,
                            unoptimized: true,
                            className: "mx-auto",
                            alt: "Project Logo"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "ml-0 leading-9 text-4xl text-center flex font-extrabold justify-center font-mono text-[#00843D] dark:text-yellow-400",
                            children: heading
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute self-center pr-6 lg:scale-90 lg:pb-0 lg:pl-3 lg:pr-0 xl:pl-0 md:p-0 md:scale-95 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 dark:text-zinc-300",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-4 font-mono sm:w-100 w-52",
                        children: content
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 934:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7527);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(303);
/* harmony import */ var _components_CardEffect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(736);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6741);
/* harmony import */ var _helper_projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9094);
/* harmony import */ var _images_alpa_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9473);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function Home() {
    const [randomProjects, setRandomProjects] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(_helper_projects__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setRandomProjects(_helper_projects__WEBPACK_IMPORTED_MODULE_11__/* ["default"].sort */ .Z.sort(()=>0.5 - Math.random()).slice(0, 3));
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Mayank Portfolio"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "My Website"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
                className: "mt-9",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col sm:flex-row",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 self-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: _images_alpa_png__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
                                    width: 320,
                                    height: 300,
                                    className: "mx-auto scale-110",
                                    alt: "photo1"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-1 sm:ml-10 lg:ml-0 lg:mt-0 mt-10",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "max-w-xl",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                            className: "text-6xl sm:text-6xl md:text-5xl font-mono lg:text-6xl font-extrabold tracking-tighter text-[#00843D] dark:text-yellow-400",
                                            children: [
                                                "I'm Learner ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                " I'm Builder"
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "mt-4 text-xl text-zinc-600 dark:text-zinc-400 leading-7 font-mono ",
                                            children: "I'm a passionate builder and problem solver‘ dedicated to crafting innovative solutions that leave a lasting impact. With a love for development and a drive for excellence‘ I'm here to showcase my journey of creating remarkable digital experiences. Let's build something extraordinary together!"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "mt-6 flex gap-6 ml-4",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    "aria-label": "Contact by Mail",
                                                    className: " text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition",
                                                    href: "https://www.linkedin.com/in/mayank-vashisht-910830171/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faLinkedin,
                                                        size: "2xl"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    "aria-label": "Follow on GitLab",
                                                    className: " text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition",
                                                    href: "https://gitlab.com/aossie",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faInstagram,
                                                        size: "2xl"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    "aria-label": "Follow on GitHub",
                                                    className: " text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition",
                                                    href: "https://github.com/mayank-vashishtt",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faGithub,
                                                        size: "2xl"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    "aria-label": "Join on Discord",
                                                    className: " text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition",
                                                    href: "",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faDiscord,
                                                        size: "2xl"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    "aria-label": "Follow on Twitter",
                                                    className: " text-zinc-500 hover:text-[#00843D] dark:text-zinc-400 dark:hover:text-yellow-400 transition",
                                                    href: "https://twitter.com/aossie_org",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__.FontAwesomeIcon, {
                                                        icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faTwitter,
                                                        size: "2xl"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-center mt-16",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/about",
                            className: "relative inline-block text-lg group",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    className: "relative z-10 block px-5 py-3 overflow-hidden transition-colors duration-300 ease-in-out border-2 border-gray-900 rounded-lg dark:group-hover:text-black group-hover:text-white",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-white"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "absolute left-0 w-72 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#00843D] dark:bg-yellow-400 group-hover:-rotate-180 ease-in-out"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "relative font-mono text-xl font-black tracking-tighter",
                                            children: "Shaping myself‘ moment by moment."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "absolute bottom-0 right-0 w-full h-14 mb-3 mr-2 transition-all duration-200 ease-linear bg-[#00843D] dark:bg-yellow-400 rounded-lg group-hover:m-0",
                                    "data-rounded": "rounded-lg"
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* .Container */ .W, {
                className: "mt-24 md:mt-28",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "mx-auto gap-y-20 lg:max-w-none lg:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "space-y-10 lg:pl-16 xl:pl-24",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "grid grid-cols-12",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: " bg-[#00843D] dark:bg-yellow-400 hidden md:flex p-2 w-12 h-12 items-center justify-center -left-2 top-2 transform translate-x-px relative rounded-full",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                "aria-hidden": "true",
                                                role: "img",
                                                className: "text-white dark:text-black scale-125 font-extrabold",
                                                viewBox: "0 0 24 24",
                                                width: "24",
                                                height: "24",
                                                fill: "currentColor",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M7.25 6a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5A.75.75 0 007.25 6zM12 6a.75.75 0 00-.75.75v4.5a.75.75 0 001.5 0v-4.5A.75.75 0 0012 6zm4 .75a.75.75 0 011.5 0v9.5a.75.75 0 01-1.5 0v-9.5z"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        fillRule: "evenodd",
                                                        d: "M3.75 2A1.75 1.75 0 002 3.75v16.5c0 .966.784 1.75 1.75 1.75h16.5A1.75 1.75 0 0022 20.25V3.75A1.75 1.75 0 0020.25 2H3.75zM3.5 3.75a.25.25 0 01.25-.25h16.5a.25.25 0 01.25.25v16.5a.25.25 0 01-.25.25H3.75a.25.25 0 01-.25-.25V3.75z"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-span-8 lg:col-start-2 lg:-ml-6 self-center mt-3",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                className: "text-3xl font-black tracking-tighter text-zinc-800 dark:text-white font-mono capitalize",
                                                children: "projects"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: " text-lg text-zinc-600 dark:text-zinc-400 font-mono ",
                                    children: [
                                        "Our Projects‘ where we showcase our tech wizardry and code-slinging skills!! ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " Be a part of our community and contribute to meaningful projects that are making a difference. Explore our selection of projects and find the perfect opportunity to showcase your skills and make an impact."
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col sm:flex-row gap-6 sm:gap-0 mt-10 sm:justify-evenly items-center",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* .Container.Inner */ .W.Inner, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3",
                                    children: randomProjects.map((project)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CardEffect__WEBPACK_IMPORTED_MODULE_9__/* .CardEffect */ .S, {
                                                heading: project.name,
                                                logo: project.logo,
                                                content: project.description
                                            })
                                        }, project.name))
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "group relative rounded-lg inline-flex items-center overflow-hidden bg-[#00843D] dark:bg-yellow-400 px-8 py-3 text-white dark:text-zinc-900 focus:outline-none active:bg-[#00843D]",
                                href: "/projects",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4 flex-shrink-0 rounded-full border border-current bg-white p-1 text-black",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                            className: "h-5 w-5",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M17 8l4 4m0 0l-4 4m4-4H3"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "font-mono font-semibold transition-all group-hover:mr-6",
                                        children: "View All Projects"
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_5__/* .Container.Outer */ .W.Outer, {
                className: "mt-28",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Banner__WEBPACK_IMPORTED_MODULE_10__/* .Banner */ .j, {})
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ }),

/***/ 303:
/***/ ((module) => {

module.exports = import("@fortawesome/free-brands-svg-icons");;

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7398,676,1664,5675,7527,9094], () => (__webpack_exec__(934)));
module.exports = __webpack_exports__;

})();