(() => {
var exports = {};
exports.id = 4147;
exports.ids = [4147];
exports.modules = {

/***/ 9216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/components/Card.jsx
var Card = __webpack_require__(5834);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(7527);
// EXTERNAL MODULE: external "fast-glob"
var external_fast_glob_ = __webpack_require__(2479);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
;// CONCATENATED MODULE: ./src/helper/getAllIdeas.js


async function importIdea(ideaFilename) {
    let { meta , default: component  } = await __webpack_require__(2395)(`./${ideaFilename}`);
    return {
        slug: ideaFilename.replace(/(\/index)?\.mdx$/, ""),
        ...meta,
        component
    };
}
async function getAllIdeas() {
    let ideaFilenames = await glob([
        "*.mdx",
        "*/index.mdx"
    ], {
        cwd: path.join(process.cwd(), "src/pages/ideas/2024")
    });
    let ideas = await Promise.all(ideaFilenames.map(importIdea));
    return ideas;
}

;// CONCATENATED MODULE: ./src/pages/ideas/index.jsx




 // function Article({ article }) {
 //   return (
 //     <article className="mt-5 sm:mt-0 md:grid md:grid-flow-col md:grid-cols-4 md:items-baseline">
 //       <Card className="md:col-span-3">
 //         <Card.Title href={`/ideas/2024/${article.slug}`}>
 //           {article.title}
 //         </Card.Title>
 //         <Card.Description>{article.description}</Card.Description>
 //         <Card.Cta>Know More</Card.Cta>
 //       </Card>
 //     </article>
 //   )
 // }
 // export default function Ideas({ articles }) {
 //   return (
 //     <>
 //       {/* <Head>
 //         <title>Idea List</title>
 //         <meta name="description" content="Idea List for GSOC" />
 //       </Head>
 //       <Container className="mt-20 mb-28">
 //         <div className="">
 //           <p className="font-mono text-lg leading-7 text-zinc-600 dark:text-zinc-400">
 //             Explore the world of open-source possibilities with AOSSIE&apos;s{' '}
 //             <b>Idea List</b>. As part of Google Summer of Code, we offer
 //             a unique opportunity for developers to explore new ideas,  a wide
 //             variety of projects for developers to choose from and contribute to.
 //             From developing new features to fixing critical bugs, our idea list
 //             is your go-to destination for finding your next big project and
 //             kickstart your open-source journey.
 //           </p>
 //         </div>
 //         <Container.Inner>
 //           <div className="mt-10 flex justify-center sm:mt-20">
 //             <div className="grid gap-6 gap-y-8 md:grid-flow-col md:grid-rows-4">
 //               {articles.map((article) => (
 //                 <Article key={article.slug} article={article} />
 //               ))}
 //             </div>
 //           </div>
 //           <div className="mt-16 text-center">
 //             <Link
 //               className="group order-2 mx-auto items-center overflow-hidden rounded-lg bg-zinc-800 px-8 py-3 text-white focus:outline-none dark:bg-white dark:text-black"
 //               href="/ideas/2023"
 //             >
 //               <span className="text-center font-mono font-semibold">
 //                 View 2023 Idea List
 //               </span>
 //             </Link>
 //           </div>
 //         </Container.Inner>
 //       </Container>
 //     </> */}
 //   )
 // }
 // export async function getStaticProps() {
 //   return {
 //     props: {
 //       articles: (await getAllIdeas()).map(({ component, ...meta }) => meta),
 // //     },
 //   }
 // }


/***/ }),

/***/ 2395:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./agora-blockchain.mdx": [
		5518,
		1151,
		8866,
		5518
	],
	"./agora-vote-android.mdx": [
		8296,
		1151,
		8866,
		8296
	],
	"./agora-vote-ios.mdx": [
		8455,
		1151,
		8866,
		8455
	],
	"./eduAid.mdx": [
		397,
		1151,
		8866,
		397
	],
	"./monumento-iPad.mdx": [
		8099,
		1151,
		8866,
		8099
	],
	"./monumento.mdx": [
		5826,
		1151,
		8866,
		5826
	],
	"./resonate-ios.mdx": [
		9208,
		1151,
		8866,
		9208
	],
	"./resonate-ui.mdx": [
		2457,
		1151,
		8866,
		2457
	],
	"./resonate.mdx": [
		6119,
		1151,
		8866,
		6119
	],
	"./social-street-smart.mdx": [
		4397,
		1151,
		8866,
		4397
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 2395;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 7197:
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 8103:
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ 2479:
/***/ ((module) => {

"use strict";
module.exports = require("fast-glob");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4563:
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7398,676,1664,7527,5834], () => (__webpack_exec__(9216)));
module.exports = __webpack_exports__;

})();