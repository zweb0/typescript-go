//// [tests/cases/compiler/newAbstractInstance2.ts] ////

//// [a.ts]
export default abstract class {}

//// [b.ts]
import A from "./a";
new A();


//// [a.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class default_1 {
}
exports.default = default_1;
//// [b.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_1 = require("./a");
new a_1.default();
