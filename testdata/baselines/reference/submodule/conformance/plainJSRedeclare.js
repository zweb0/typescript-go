//// [tests/cases/conformance/salsa/plainJSRedeclare.ts] ////

//// [plainJSRedeclare.js]
const orbitol = 1
var orbitol = 1 + false
orbitol.toExponential()


//// [plainJSRedeclare.js]
const orbitol = 1;
var orbitol = 1 + false;
orbitol.toExponential();
