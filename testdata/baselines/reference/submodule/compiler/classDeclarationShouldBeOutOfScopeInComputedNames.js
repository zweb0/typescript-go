//// [tests/cases/compiler/classDeclarationShouldBeOutOfScopeInComputedNames.ts] ////

//// [classDeclarationShouldBeOutOfScopeInComputedNames.ts]
class A {
    static readonly p1 = Symbol();
    static readonly p2 = Symbol();
    // All of the below should be out of scope or TDZ - `A` has not finished being constructed as they are executed
    static readonly [A.p1] = 0;
    static [A.p2]() { return 0 };
    [A.p1]() { }
    [A.p2] = 0
}


//// [classDeclarationShouldBeOutOfScopeInComputedNames.js]
class A {
    static p1 = Symbol();
    static p2 = Symbol();
    // All of the below should be out of scope or TDZ - `A` has not finished being constructed as they are executed
    static [A.p1] = 0;
    static [A.p2]() { return 0; }
    ;
    [A.p1]() { }
    [A.p2] = 0;
}
