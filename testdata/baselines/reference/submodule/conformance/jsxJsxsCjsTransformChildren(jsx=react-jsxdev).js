//// [tests/cases/conformance/jsx/jsxs/jsxJsxsCjsTransformChildren.tsx] ////

//// [jsxJsxsCjsTransformChildren.tsx]
/// <reference path="/.lib/react16.d.ts" />
const a = <div>text</div>;

export {};


//// [jsxJsxsCjsTransformChildren.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_dev_runtime_1 = require("react/jsx-dev-runtime");
const _jsxFileName = "jsxJsxsCjsTransformChildren.tsx";
/// <reference path="react16.d.ts" />
const a = jsx_dev_runtime_1.jsxDEV("div", { children: "text" }, void 0, false, { fileName: _jsxFileName, lineNumber: 2, columnNumber: 10 }, this);
