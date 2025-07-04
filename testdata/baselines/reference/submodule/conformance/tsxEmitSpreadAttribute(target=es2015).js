//// [tests/cases/conformance/jsx/tsxEmitSpreadAttribute.ts] ////

//// [test.tsx]
declare const React: any;

export function T1(a: any) {
    return <div className={"T1"} { ...a }>T1</div>;
}

export function T2(a: any, b: any) {
    return <div className={"T2"} { ...a } { ...b }>T2</div>;
}

export function T3(a: any, b: any) {
    return <div { ...a } className={"T3"} { ...b }>T3</div>;
}

export function T4(a: any, b: any) {
    return <div className={"T4"} { ...{ ...a, ...b } }>T4</div>;
}

export function T5(a: any, b: any, c: any, d: any) {
    return <div className={"T5"} { ...{ ...a, ...b, ...{ c, d } } }>T5</div>;
}

export function T6(a: any, b: any, c: any, d: any) {
    return <div className={"T6"} { ...{ ...a, ...b, ...{ ...c, ...d } } }>T6</div>;
}

export function T7(a: any, b: any, c: any, d: any) {
    return <div className={"T7"} { ...{ __proto__: null, dir: 'rtl' } }>T7</div>;
}

export function T8(a: any, b: any, c: any, d: any) {
    return <div className={"T8"} { ...{ "__proto__": null } }>T8</div>;
}

declare const __proto__: string;

export function T9(a: any, b: any, c: any, d: any) {
    return <div className={"T9"} { ...{ [__proto__]: null } }>T9</div>;
}

export function T10(a: any, b: any, c: any, d: any) {
    return <div className={"T10"} { ...{ ["__proto__"]: null } }>T10</div>;
}

export function T11(a: any, b: any, c: any, d: any) {
    return <div className={"T11"} { ...{ __proto__ } }>T11</div>;
}


//// [test.js]
export function T1(a) {
    return React.createElement("div", Object.assign({ className: "T1" }, a), "T1");
}
export function T2(a, b) {
    return React.createElement("div", Object.assign({ className: "T2" }, a, b), "T2");
}
export function T3(a, b) {
    return React.createElement("div", Object.assign({}, a, { className: "T3" }, b), "T3");
}
export function T4(a, b) {
    return React.createElement("div", Object.assign({ className: "T4" }, a, b), "T4");
}
export function T5(a, b, c, d) {
    return React.createElement("div", Object.assign({ className: "T5" }, a, b, { c, d }), "T5");
}
export function T6(a, b, c, d) {
    return React.createElement("div", Object.assign({ className: "T6" }, a, b, { ...c, ...d }), "T6");
}
export function T7(a, b, c, d) {
    return React.createElement("div", Object.assign({ className: "T7" }, { __proto__: null, dir: 'rtl' }), "T7");
}
export function T8(a, b, c, d) {
    return React.createElement("div", Object.assign({ className: "T8" }, { "__proto__": null }), "T8");
}
export function T9(a, b, c, d) {
    return React.createElement("div", { className: "T9", [__proto__]: null }, "T9");
}
export function T10(a, b, c, d) {
    return React.createElement("div", { className: "T10", ["__proto__"]: null }, "T10");
}
export function T11(a, b, c, d) {
    return React.createElement("div", { className: "T11", __proto__ }, "T11");
}
