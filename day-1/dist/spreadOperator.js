"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
{
    // Spread Operator - Combining Arrays and Objects
    // Example 1: Combining two arrays
    var animals1 = ['dog', 'cat'];
    var animals2 = ['rabbit', 'hamster'];
    var allAnimals = __spreadArray(__spreadArray([], animals1, true), animals2, true); // Combines both arrays
    console.log('All Animals:', allAnimals); // Output: ['dog', 'cat', 'rabbit', 'hamster']
    // Example 2: Adding properties from two objects into one
    var personInfo = { name: 'Alice', age: 30 };
    var contactInfo = { phone: '123-456-7890', email: 'alice@example.com' };
    var fullInfo = __assign(__assign({}, personInfo), contactInfo);
    console.log('Full Info:', fullInfo);
    // Output: { name: 'Alice', age: 30, phone: '123-456-7890', email: 'alice@example.com' }
    // Rest Operator - Accepting Multiple Arguments in a Function
    // Example: A function that says hello to each friend
    var sayHello = function () {
        var friends = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            friends[_i] = arguments[_i];
        }
        friends.forEach(function (friend) { return console.log("Hello ".concat(friend, "!")); });
    };
    sayHello('Anna', 'Bob', 'Charlie'); // Output: "Hello Anna!", "Hello Bob!", "Hello Charlie!"
}
