//// [tests/cases/compiler/duplicateClassElements.ts] ////

//// [duplicateClassElements.ts]
class a {
    public a;
    public a;
    public b() {
    }
    public b() {
    }
    public x;
    get x() {
        return 10;
    }
    set x(_x: number) {
    }

    get y() {
        return "Hello";
    }
    set y(_y: string) {
    }

    public z() {
    }
    get z() {
        return "Hello";
    }
    set z(_y: string) {
    }

    get x2() {
        return 10;
    }
    set x2(_x: number) {
    }
    public x2;

    get z2() {
        return "Hello";
    }
    set z2(_y: string) {
    }
    public z2() {
    }

}

//// [duplicateClassElements.js]
class a {
    a;
    a;
    b() {
    }
    b() {
    }
    x;
    get x() {
        return 10;
    }
    set x(_x) {
    }
    get y() {
        return "Hello";
    }
    set y(_y) {
    }
    z() {
    }
    get z() {
        return "Hello";
    }
    set z(_y) {
    }
    get x2() {
        return 10;
    }
    set x2(_x) {
    }
    x2;
    get z2() {
        return "Hello";
    }
    set z2(_y) {
    }
    z2() {
    }
}
