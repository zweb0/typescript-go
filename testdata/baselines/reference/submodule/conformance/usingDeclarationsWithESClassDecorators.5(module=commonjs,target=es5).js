//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithESClassDecorators.5.ts] ////

//// [usingDeclarationsWithESClassDecorators.5.ts]
export {};

declare var dec: any;

using before = null;

@dec
class C {
}

export { C };

//// [usingDeclarationsWithESClassDecorators.5.js]
"use strict";
var before, C;
Object.defineProperty(exports, "__esModule", { value: true });
exports.C = void 0;
const env_1 = { stack: [], error: void 0, hasError: false };
try {
    before = __addDisposableResource(env_1, null, false);
    exports.C = C = 
    @dec
    class C {
    };
}
catch (e_1) {
    env_1.error = e_1;
    env_1.hasError = true;
}
finally {
    __disposeResources(env_1);
}
