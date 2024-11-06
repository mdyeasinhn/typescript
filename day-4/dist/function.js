"use strict";
{
    // normal function & arrow function
    function multiply(num1, num2) {
        const result = num1 * num2;
        return result;
    }
    // const multiplyResult = multiply(4, 3);
    // console.log(multiplyResult)
    const sumOfTwo = (a, b) => {
        return a + b;
    };
    const result = sumOfTwo(4, 3);
    console.log(result);
}
