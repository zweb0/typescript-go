//// [tests/cases/compiler/derivedClassConstructorWithExplicitReturns01.ts] ////

//// [derivedClassConstructorWithExplicitReturns01.ts]
class C {
    cProp = 10;

    foo() { return "this never gets used."; }

    constructor(value: number) {
        return {
            cProp: value,
            foo() {
                return "well this looks kinda C-ish.";
            }
        }
    }
}

class D extends C {
    dProp = () => this;

    constructor(a = 100) {
        super(a);

        if (Math.random() < 0.5) {
            "You win!"
            return {
                cProp: 1,
                dProp: () => this,
                foo() { return "You win!!!!!" }
            };
        }
        else
            return null;
    }
}

//// [derivedClassConstructorWithExplicitReturns01.js]
class C {
    cProp = 10;
    foo() { return "this never gets used."; }
    constructor(value) {
        return {
            cProp: value,
            foo() {
                return "well this looks kinda C-ish.";
            }
        };
    }
}
class D extends C {
    dProp = () => this;
    constructor(a = 100) {
        super(a);
        if (Math.random() < 0.5) {
            "You win!";
            return {
                cProp: 1,
                dProp: () => this,
                foo() { return "You win!!!!!"; }
            };
        }
        else
            return null;
    }
}
//# sourceMappingURL=derivedClassConstructorWithExplicitReturns01.js.map