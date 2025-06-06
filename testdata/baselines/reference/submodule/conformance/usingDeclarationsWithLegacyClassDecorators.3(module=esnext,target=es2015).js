//// [tests/cases/conformance/statements/VariableStatements/usingDeclarations/usingDeclarationsWithLegacyClassDecorators.3.ts] ////

//// [usingDeclarationsWithLegacyClassDecorators.3.ts]
export {};

declare var dec: any;

using before = null;

@dec
export default class C {
}


//// [usingDeclarationsWithLegacyClassDecorators.3.js]
var before, C, _default;
export { _default as default };
const env_1 = { stack: [], error: void 0, hasError: false };
try {
    before = __addDisposableResource(env_1, null, false);
    _default = C = 
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
