//// [tests/cases/conformance/es6/decorators/class/method/parameter/decoratorOnClassMethodParameter1.es6.ts] ////

//// [decoratorOnClassMethodParameter1.es6.ts]
declare function dec(target: Object, propertyKey: string | symbol, parameterIndex: number): void;

export default class {
    method(@dec p: number) {}
}

//// [decoratorOnClassMethodParameter1.es6.js]
export default class {
    method(p) { }
}
