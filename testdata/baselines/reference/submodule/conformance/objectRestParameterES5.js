//// [tests/cases/conformance/types/rest/objectRestParameterES5.ts] ////

//// [objectRestParameterES5.ts]
function cloneAgain({ a, ...clone }: { a: number, b: string }): void {
}

declare function suddenly(f: (a: { x: { z, ka }, y: string }) => void);
suddenly(({ x: a, ...rest }) => rest.y);
suddenly(({ x: { z = 12, ...nested }, ...rest } = { x: { z: 1, ka: 1 }, y: 'noo' }) => rest.y + nested.ka);

class C {
    m({ a, ...clone }: { a: number, b: string}): void {
        // actually, never mind, don't clone
    }
    set p({ a, ...clone }: { a: number, b: string}) {
        // actually, never mind, don't clone
    }
}
function foobar({ bar={}, ...opts }: any = {}) {
}
foobar();
foobar({ baz: 'hello' });
foobar({ bar: { greeting: 'hello' } });


//// [objectRestParameterES5.js]
function cloneAgain({ a, ...clone }) {
}
suddenly(({ x: a, ...rest }) => rest.y);
suddenly(({ x: { z = 12, ...nested }, ...rest } = { x: { z: 1, ka: 1 }, y: 'noo' }) => rest.y + nested.ka);
class C {
    m({ a, ...clone }) {
        // actually, never mind, don't clone
    }
    set p({ a, ...clone }) {
        // actually, never mind, don't clone
    }
}
function foobar({ bar = {}, ...opts } = {}) {
}
foobar();
foobar({ baz: 'hello' });
foobar({ bar: { greeting: 'hello' } });
