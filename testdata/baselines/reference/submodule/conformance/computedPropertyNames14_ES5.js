//// [tests/cases/conformance/es6/computedProperties/computedPropertyNames14_ES5.ts] ////

//// [computedPropertyNames14_ES5.ts]
var b: boolean;
class C {
    [b]() {}
    static [true]() { }
    [[]]() { }
    static [{}]() { }
    [undefined]() { }
    static [null]() { }
}

//// [computedPropertyNames14_ES5.js]
var b;
class C {
    [b]() { }
    static [true]() { }
    [[]]() { }
    static [{}]() { }
    [undefined]() { }
    static [null]() { }
}
