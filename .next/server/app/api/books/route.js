"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/books/route";
exports.ids = ["app/api/books/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_gspiteri1_Documents_BookInventoryMgmt_app_api_books_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/books/route.ts */ \"(rsc)/./app/api/books/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/books/route\",\n        pathname: \"/api/books\",\n        filename: \"route\",\n        bundlePath: \"app/api/books/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\gspiteri1\\\\Documents\\\\BookInventoryMgmt\\\\app\\\\api\\\\books\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_gspiteri1_Documents_BookInventoryMgmt_app_api_books_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/books/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZib29rcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGYm9va3MlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZib29rcyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNnc3BpdGVyaTElNUNEb2N1bWVudHMlNUNCb29rSW52ZW50b3J5TWdtdCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDZ3NwaXRlcmkxJTVDRG9jdW1lbnRzJTVDQm9va0ludmVudG9yeU1nbXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1pbnZlbnRvcnktbWdtdC8/NWQwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxnc3BpdGVyaTFcXFxcRG9jdW1lbnRzXFxcXEJvb2tJbnZlbnRvcnlNZ210XFxcXGFwcFxcXFxhcGlcXFxcYm9va3NcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2Jvb2tzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYm9va3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2Jvb2tzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcZ3NwaXRlcmkxXFxcXERvY3VtZW50c1xcXFxCb29rSW52ZW50b3J5TWdtdFxcXFxhcHBcXFxcYXBpXFxcXGJvb2tzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9ib29rcy9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/books/route.ts":
/*!********************************!*\
  !*** ./app/api/books/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongodb */ \"(rsc)/./libs/mongodb.ts\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _models_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/book */ \"(rsc)/./models/book.ts\");\n\n\n\nasync function POST(request) {\n    try {\n        const { title, names, cover, isbn, notes, rating } = await request.json();\n        await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        await _models_book__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create({\n            title: title,\n            names: names,\n            cover: cover,\n            isbn: isbn,\n            notes: notes,\n            rating: rating\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Book Created\"\n        }, {\n            status: 201\n        });\n    } catch (e) {\n        console.error(\"Unable to save to Mongo\");\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            status: 500,\n            error: e\n        });\n    }\n}\nasync function GET() {\n    try {\n        await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        const books = await _models_book__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            books\n        }, {\n            status: 200\n        });\n    } catch (e) {\n        console.error(\"Unable to reach Mongo\");\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            status: 500,\n            error: e\n        });\n    }\n}\nasync function DELETE(request) {\n    try {\n        const id = request.nextUrl.searchParams.get(\"id\");\n        await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n        await _models_book__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findByIdAndDelete(id);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Book deleted\"\n        }, {\n            status: 200\n        });\n    } catch (e) {\n        console.error(\"Unable to delete from Mongo\");\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            status: 500,\n            error: e\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2Jvb2tzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QztBQUNEO0FBRVY7QUFFMUIsZUFBZUcsS0FBS0MsT0FBb0I7SUFDM0MsSUFBSTtRQUNBLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRSxHQUFHLE1BQU1OLFFBQVFPLElBQUk7UUFDdkUsTUFBTVgseURBQWNBO1FBQ3BCLE1BQU1FLG9EQUFJQSxDQUFDVSxNQUFNLENBQUM7WUFBRVAsT0FBT0E7WUFBT0MsT0FBT0E7WUFBT0MsT0FBT0E7WUFBT0MsTUFBTUE7WUFBTUMsT0FBT0E7WUFBT0MsUUFBUUE7UUFBTztRQUN2RyxPQUFPVCxxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVFLFNBQVM7UUFBZSxHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUN4RSxFQUFFLE9BQU9DLEdBQUc7UUFDUkMsUUFBUUMsS0FBSyxDQUFDO1FBQ2QsT0FBT2hCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUcsUUFBUTtZQUFLRyxPQUFPRjtRQUFFO0lBQ3JEO0FBQ0o7QUFFTyxlQUFlRztJQUNsQixJQUFJO1FBQ0EsTUFBTWxCLHlEQUFjQTtRQUNwQixNQUFNbUIsUUFBUSxNQUFNakIsb0RBQUlBLENBQUNrQixJQUFJO1FBQzdCLE9BQU9uQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVRO1FBQU0sR0FBRztZQUFFTCxRQUFRO1FBQUk7SUFDdEQsRUFBRSxPQUFPQyxHQUFHO1FBQ1JDLFFBQVFDLEtBQUssQ0FBQztRQUNkLE9BQU9oQixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVHLFFBQVE7WUFBS0csT0FBT0Y7UUFBRTtJQUNyRDtBQUNKO0FBRU8sZUFBZU0sT0FBT2pCLE9BQW9CO0lBQzdDLElBQUk7UUFDQSxNQUFNa0IsS0FBS2xCLFFBQVFtQixPQUFPLENBQUNDLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO1FBQzVDLE1BQU16Qix5REFBY0E7UUFDcEIsTUFBTUUsb0RBQUlBLENBQUN3QixpQkFBaUIsQ0FBQ0o7UUFDN0IsT0FBT3JCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUUsU0FBUztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3hFLEVBQUUsT0FBT0MsR0FBRztRQUNSQyxRQUFRQyxLQUFLLENBQUM7UUFDZCxPQUFPaEIscURBQVlBLENBQUNVLElBQUksQ0FBQztZQUFFRyxRQUFRO1lBQUtHLE9BQU9GO1FBQUU7SUFDckQ7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2Jvb2staW52ZW50b3J5LW1nbXQvLi9hcHAvYXBpL2Jvb2tzL3JvdXRlLnRzPzhjZjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3RNb25nb0RCIGZyb20gJ0AvbGlicy9tb25nb2RiJztcclxuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSAnbmV4dC9zZXJ2ZXInO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCB9IGZyb20gJ25leHQvc2VydmVyJztcclxuaW1wb3J0IEJvb2sgZnJvbSAnQC9tb2RlbHMvYm9vayc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7IHRpdGxlLCBuYW1lcywgY292ZXIsIGlzYm4sIG5vdGVzLCByYXRpbmcgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpO1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICAgICAgYXdhaXQgQm9vay5jcmVhdGUoeyB0aXRsZTogdGl0bGUsIG5hbWVzOiBuYW1lcywgY292ZXI6IGNvdmVyLCBpc2JuOiBpc2JuLCBub3Rlczogbm90ZXMsIHJhdGluZzogcmF0aW5nIH0pO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6ICdCb29rIENyZWF0ZWQnIH0sIHsgc3RhdHVzOiAyMDEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIHNhdmUgdG8gTW9uZ28nKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IDUwMCwgZXJyb3I6IGUgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICAgICAgY29uc3QgYm9va3MgPSBhd2FpdCBCb29rLmZpbmQoKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBib29rcyB9LCB7IHN0YXR1czogMjAwIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuYWJsZSB0byByZWFjaCBNb25nbycpO1xyXG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHN0YXR1czogNTAwLCBlcnJvcjogZSB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIERFTEVURShyZXF1ZXN0OiBOZXh0UmVxdWVzdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBpZCA9IHJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KCdpZCcpO1xyXG4gICAgICAgIGF3YWl0IGNvbm5lY3RNb25nb0RCKCk7XHJcbiAgICAgICAgYXdhaXQgQm9vay5maW5kQnlJZEFuZERlbGV0ZShpZCk7XHJcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogJ0Jvb2sgZGVsZXRlZCcgfSwgeyBzdGF0dXM6IDIwMCB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gZGVsZXRlIGZyb20gTW9uZ28nKTtcclxuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdGF0dXM6IDUwMCwgZXJyb3I6IGUgfSk7XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImNvbm5lY3RNb25nb0RCIiwiTmV4dFJlc3BvbnNlIiwiQm9vayIsIlBPU1QiLCJyZXF1ZXN0IiwidGl0bGUiLCJuYW1lcyIsImNvdmVyIiwiaXNibiIsIm5vdGVzIiwicmF0aW5nIiwianNvbiIsImNyZWF0ZSIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlIiwiY29uc29sZSIsImVycm9yIiwiR0VUIiwiYm9va3MiLCJmaW5kIiwiREVMRVRFIiwiaWQiLCJuZXh0VXJsIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmluZEJ5SWRBbmREZWxldGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/books/route.ts\n");

/***/ }),

/***/ "(rsc)/./libs/mongodb.ts":
/*!*************************!*\
  !*** ./libs/mongodb.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongoDB = async ()=>{\n    try {\n        if (!process.env.MONGODB_URI) {\n            throw new Error(\"Please add your Mongo URI to .env.local\");\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n        console.log(\"connected to MongoDB\");\n    } catch (e) {\n        console.log(e);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGlCQUFpQjtJQUNuQixJQUFJO1FBQ0EsSUFBSSxDQUFDQyxRQUFRQyxHQUFHLENBQUNDLFdBQVcsRUFBRTtZQUMxQixNQUFNLElBQUlDLE1BQU07UUFDbEI7UUFDRixNQUFNTCx1REFBZ0IsQ0FBQ0UsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO1FBQzlDRyxRQUFRQyxHQUFHLENBQUM7SUFDaEIsRUFBRSxPQUFPQyxHQUFHO1FBQ1JGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDaEI7QUFDSjtBQUVBLGlFQUFlUixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYm9vay1pbnZlbnRvcnktbWdtdC8uL2xpYnMvbW9uZ29kYi50cz80YjQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XHJcblxyXG5jb25zdCBjb25uZWN0TW9uZ29EQiA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYgKCFwcm9jZXNzLmVudi5NT05HT0RCX1VSSSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBhZGQgeW91ciBNb25nbyBVUkkgdG8gLmVudi5sb2NhbCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkhKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIE1vbmdvREInKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3RNb25nb0RCO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0TW9uZ29EQiIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./models/book.ts":
/*!************************!*\
  !*** ./models/book.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst bookSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    names: String,\n    cover: String,\n    isbn: String,\n    notes: String,\n    rating: Number\n}, {\n    timestamps: true\n});\nconst Book = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Book || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Book\", bookSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvYm9vay50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEM7QUFJNUMsTUFBTUUsYUFBYSxJQUFJRCw0Q0FBTUEsQ0FDekI7SUFDSUUsT0FBT0M7SUFDUEMsT0FBT0Q7SUFDUEUsT0FBT0Y7SUFDUEcsTUFBTUg7SUFDTkksT0FBT0o7SUFDUEssUUFBUUM7QUFDWixHQUNBO0lBQ0lDLFlBQVk7QUFDaEI7QUFHSixNQUFNQyxPQUFPWix3REFBZSxDQUFDWSxJQUFJLElBQUlaLHFEQUFjLENBQUMsUUFBUUU7QUFFNUQsaUVBQWVVLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLWludmVudG9yeS1tZ210Ly4vbW9kZWxzL2Jvb2sudHM/YzU1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgU2NoZW1hIH0gZnJvbSAnbW9uZ29vc2UnO1xyXG5cclxuXHJcblxyXG5jb25zdCBib29rU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgICAgIG5hbWVzOiBTdHJpbmcsXHJcbiAgICAgICAgY292ZXI6IFN0cmluZyxcclxuICAgICAgICBpc2JuOiBTdHJpbmcsXHJcbiAgICAgICAgbm90ZXM6IFN0cmluZyxcclxuICAgICAgICByYXRpbmc6IE51bWJlclxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aW1lc3RhbXBzOiB0cnVlLFxyXG4gICAgfVxyXG4pO1xyXG5cclxuY29uc3QgQm9vayA9IG1vbmdvb3NlLm1vZGVscy5Cb29rIHx8IG1vbmdvb3NlLm1vZGVsKCdCb29rJywgYm9va1NjaGVtYSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rO1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJTY2hlbWEiLCJib29rU2NoZW1hIiwidGl0bGUiLCJTdHJpbmciLCJuYW1lcyIsImNvdmVyIiwiaXNibiIsIm5vdGVzIiwicmF0aW5nIiwiTnVtYmVyIiwidGltZXN0YW1wcyIsIkJvb2siLCJtb2RlbHMiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/book.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fbooks%2Froute&page=%2Fapi%2Fbooks%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fbooks%2Froute.ts&appDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cgspiteri1%5CDocuments%5CBookInventoryMgmt&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();