//// [tests/cases/compiler/augmentExportEquals2_1.ts] ////

//// [file1.d.ts]
declare module "file1" {
    function foo(): void;
    export = foo;
}

//// [file2.ts]
/// <reference path="file1.d.ts"/> 
import x = require("file1"); 

// should error since './file1' does not have namespace meaning
declare module "file1" {
    interface A { a }
}

//// [file3.ts]
import x = require("file1");
import "file2";
let a: x.A; // should not work

//// [file3.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("file2");
let a; // should not work
