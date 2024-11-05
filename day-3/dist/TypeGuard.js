"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const res = add('2', '3');
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`The name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`I am ${user.name}`);
        }
    };
    const normalUser = {
        name: 'Mr. Normal bhai'
    };
    const adminUser = {
        name: 'Mr. admin bhai',
        role: 'admin'
    };
    getUser(normalUser);
    //
}
