//// [tests/cases/compiler/classUsedBeforeInitializedVariables.ts] ////

//// [classUsedBeforeInitializedVariables.ts]
class Test {
    p1 = 0;
    p2 = this.p1;
    p3 = this.p4;
    p4 = 0;
    p5?: number;

    p6?: string;
    p7 = {
        hello: (this.p6 = "string"),
    };

    directlyAssigned: any = this.directlyAssigned;

    withinArrowFunction: any = () => this.withinArrowFunction;

    withinFunction: any = function () {
        return this.withinFunction;
    };

    withinObjectLiteral: any = {
        [this.withinObjectLiteral]: true,
    };

    withinObjectLiteralGetterName: any = {
        get [this.withinObjectLiteralGetterName]() {
            return true;
        }
    };

    withinObjectLiteralSetterName: any = {
        set [this.withinObjectLiteralSetterName](_: any) {}
    };

    withinClassDeclarationExtension: any = (class extends this.withinClassDeclarationExtension { });

    fromOptional = this.p5;

    // These error cases are ignored (not checked by control flow analysis)

    assignedByArrowFunction: any = (() => this.assignedByFunction)();

    assignedByFunction: any = (function () {
        return this.assignedByFunction;
    })();
}


//// [classUsedBeforeInitializedVariables.js]
class Test {
    p1 = 0;
    p2 = this.p1;
    p3 = this.p4;
    p4 = 0;
    p5;
    p6;
    p7 = {
        hello: (this.p6 = "string"),
    };
    directlyAssigned = this.directlyAssigned;
    withinArrowFunction = () => this.withinArrowFunction;
    withinFunction = function () {
        return this.withinFunction;
    };
    withinObjectLiteral = {
        [this.withinObjectLiteral]: true,
    };
    withinObjectLiteralGetterName = {
        get [this.withinObjectLiteralGetterName]() {
            return true;
        }
    };
    withinObjectLiteralSetterName = {
        set [this.withinObjectLiteralSetterName](_) { }
    };
    withinClassDeclarationExtension = (class extends this.withinClassDeclarationExtension {
    });
    fromOptional = this.p5;
    // These error cases are ignored (not checked by control flow analysis)
    assignedByArrowFunction = (() => this.assignedByFunction)();
    assignedByFunction = (function () {
        return this.assignedByFunction;
    })();
}
