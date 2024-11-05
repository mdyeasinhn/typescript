"use strict";
var _a, _b;
{
    // ternaryOperator || optianal chanining || nullish coalescing operator
    var age = 30;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    //ternary
    var isAdult = age >= 18 ? "adult" : "not adult";
    console.log(isAdult);
    // nullish coalescing operator
    // null | undefined ---> decision makeing
    var isAuthenticated = '';
    var result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    var result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1: result1, result2: result2 });
    var user = {
        name: "Yeasin",
        address: {
            city: "ctg",
            road: "5no road",
            presentAddress: "boalkhali ",
        }
    };
    var permenentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permenentAddress) !== null && _b !== void 0 ? _b : "No Permenent Address ";
    console.log(permenentAddress);
}
