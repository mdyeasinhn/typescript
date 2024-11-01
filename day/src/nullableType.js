"use strict";
{
    // nullable types 
    var searchName = function (value) {
        if (value) {
            console.log("searching");
        }
        else {
            console.log("There is nothing to search");
        }
    };
    // searchName("Yeasin");
    var getSpeedInMeterPerSecond = function (value) {
        if (typeof value === "number") {
            var convertedSpeed = (value * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else if (typeof value === "string") {
            var _a = value.split(" "), result = _a[0], unit = _a[1];
            console.log(result);
            var convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log("The speed is ".concat(convertedSpeed, " ms^-1"));
        }
        else {
            console.log("wrong input ");
        }
    };
    getSpeedInMeterPerSecond("1000 kmh^-1");
    //nerver 
    var throwError = function (msg) {
        throw new Error(msg);
    };
    throwError("Lavel-2 te Enroll korata amr vul hoyeche amke khoma kore daw ");
}
