"use strict";
{
    //
    const rolls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const newRolls = [...rolls, 11, 12];
    const person1 = {
        name: "Shariful Islam",
        age: "21",
        isActive: true,
        designation: "Next Level Developer",
        company: "Programming Hero"
    };
    const newInfoOfPerson1 = Object.assign(Object.assign({}, person1), { salary: 1000000000 });
    //console.log(newInfoOfPerson1)
    // rest opearator
    const [first, c, ...bakiElement] = [25, 45, 11, 69, 75, 80];
    console.log("First: ", first);
    // console.log("a: ", a);
    // console.log("b: ", b);
    console.log("c: ", c);
    console.log("Rest: ", bakiElement);
    //
}
