const expect = require("../");

function test(arg) {
    expect(arg >= 0, () => `"arg" cannot be a negative number, was ${arg}`);
    console.log(arg);
}

test(-5);
