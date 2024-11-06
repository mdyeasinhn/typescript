"use strict";
{
    const numArray = [1, 2, 3, 4];
    const stringArray = ["Raj", "SK", "Fardin", "Naem", "Taj"];
    const boolArray = [true, false, false, true, true];
    const person = {
        name: "Shariful Islam",
        age: 32,
        isActive: true,
        designation: "Next Level Developer",
        id: "skdjdf"
    };
    // console.log(person)
    // function with generics
    const showMessage = (message1, message2, personInfo) => {
        return { message1, message2, personInfo };
    };
    console.log(showMessage("Next Level Web Development", "Hello World!", {
        name: "Shariful Islam",
        age: 32,
        isActive: true,
        designation: "Next Level Developer",
        id: "skdjdf"
    }));
    //
}
