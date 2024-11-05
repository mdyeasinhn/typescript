{
    // Leran Destructuring

    const user = {
        id: 26,
        name: {
            firstName: 'md',
            middleName: 'yeasin',
            lastName: 'arafat'
        },
        contactNo: '023938098432048',
        email: "yeasin@example.com",
        address: 'chittagong, bangladesh',
    }

    const {
        contactNo,
        name: { middleName: midName }

    } = user;

    // Array destructuring 

    const myFriend = ['sakib', 'rakib', 'sujon', 'ryhan', 'jahed'];

    const [, , , bestFriend, ...rest] = myFriend;  





}