"use strict";
{
    //
    //Type assertion
    var anything = void 0;
    anything = "Next level web developere";
    anything = 222;
    //(anything as number)
    var KgToGm = function (value) {
        if (typeof value === "string") {
            var convertedValue = parseFloat(value) * 1000;
            return "The converted value : ".concat(convertedValue);
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    var result1 = KgToGm(1000);
    var result2 = KgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
