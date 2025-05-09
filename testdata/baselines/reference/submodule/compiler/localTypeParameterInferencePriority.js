//// [tests/cases/compiler/localTypeParameterInferencePriority.ts] ////

//// [localTypeParameterInferencePriority.ts]
export type UnrollOnHover<O extends object> = O extends object ?
    { [K in keyof O]: O[K]; } :
    never;


export type Schema = Record<string, unknown>;
class Table<S extends Schema>  {
    __schema!: S;

    // Removing this line, removes the error 
    getRows<C extends keyof S>(): Array<UnrollOnHover<Pick<S, C>>> {
        return null!
    }
}

class ColumnSelectViewImp<S extends Schema> extends Table<S> { }


const ColumnSelectView1: new <S extends Schema>() => Table<UnrollOnHover<S>> = ColumnSelectViewImp;
const ColumnSelectView2: new <S extends Schema>() => Table<UnrollOnHover<S>> = Table;

//// [localTypeParameterInferencePriority.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Table {
    __schema;
    // Removing this line, removes the error 
    getRows() {
        return null;
    }
}
class ColumnSelectViewImp extends Table {
}
const ColumnSelectView1 = ColumnSelectViewImp;
const ColumnSelectView2 = Table;
