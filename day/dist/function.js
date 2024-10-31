"use strict";
// Learning function 
//Normal function 
//Arow function 
{
    function add(num1, num2) {
        return num1 + num2;
    }
    var addArow = function (num1, num2) { return num1 + num2; };
    // object --> function --> method 
    var user = {
        name: "Yeasin",
        balance: 0,
        addBalance: function (balance) {
            return "My new balance is: ".concat(this.balance + balance);
        }
    };
    //array
    var arr = [1, 5, 23];
    // array function 
    var newArray = arr.map(function (elem) { return elem * elem; });
}
