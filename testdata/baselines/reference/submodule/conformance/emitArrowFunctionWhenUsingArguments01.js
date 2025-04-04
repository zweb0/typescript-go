//// [tests/cases/conformance/es6/arrowFunction/emitArrowFunctionWhenUsingArguments01.ts] ////

//// [emitArrowFunctionWhenUsingArguments01.ts]
var a = () => {
    var arg = arguments[0];  // error
}

var b = function () {
    var a = () => {
        var arg = arguments[0];  // error
    }
}

function baz() {
	() => {
		var arg = arguments[0];
	}
}

function foo(inputFunc: () => void) { }
foo(() => {
    var arg = arguments[0];  // error
});

function bar() {
    var arg = arguments[0];  // no error
}


() => {
	function foo() {
		var arg = arguments[0];  // no error
	}
}

//// [emitArrowFunctionWhenUsingArguments01.js]
var a = () => {
    var arg = arguments[0]; // error
};
var b = function () {
    var a = () => {
        var arg = arguments[0]; // error
    };
};
function baz() {
    () => {
        var arg = arguments[0];
    };
}
function foo(inputFunc) { }
foo(() => {
    var arg = arguments[0]; // error
});
function bar() {
    var arg = arguments[0]; // no error
}
() => {
    function foo() {
        var arg = arguments[0]; // no error
    }
};
