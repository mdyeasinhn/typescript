"use strict";
{
    // Function expression
    var num = function (num1, num2) {
        return num1 + num2;
    };
    // or as an arrow function
    var arrowfun = function (num1, num2) { return num1 + num2; };
    // Testing the function
    console.log(num(3, 4)); // Outputs: 7
    var addArow = function (num1, num2) { return num1 + num2; };
    // object --> function --> method 
    var user = {
        name: "Yeasin",
        balance: 0,
        addBalance: function (balance) {
            return "My new balance is: ".concat(this.balance + balance);
        }
    };
    // Array
    var arr = [1, 5, 23];
    // Array function 
    var newArray = arr.map(function (elem) { return elem * elem; });
}
