"use strict";
{
    // Leran Destructuring
    var user = {
        id: 26,
        name: {
            firstName: 'md',
            middleName: 'yeasin',
            lastName: 'arafat'
        },
        contactNo: '023938098432048',
        email: "yeasin@example.com",
        address: 'chittagong, bangladesh',
    };
    var contactNo = user.contactNo, midName = user.name.middleName;
    // Array destructuring 
    var myFriend = ['sakib', 'rakib', 'sujon', 'ryhan', 'jahed'];
    var bestFriend = myFriend[3], rest = myFriend.slice(4);
}
