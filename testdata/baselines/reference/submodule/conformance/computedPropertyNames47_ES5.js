//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames47_ES5.ts] ////

//// [computedPropertyNames47_ES5.ts]
enum E1 { x }
enum E2 { x }
var o = {
    [E1.x || E2.x]: 0
};

//// [computedPropertyNames47_ES5.js]
var E1;
(function (E1) {
    E1[E1["x"] = 0] = "x";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["x"] = 0] = "x";
})(E2 || (E2 = {}));
var o = {
    [E1.x || E2.x]: 0
};
