{
    // Type guard using typeof & in
    // typeof --> type guard

    type Alphaneumeric = string | number

    const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const res = add('2', '3');
    // console.log(res);

    // In guard

    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string;
        role: 'admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`The name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`I am ${user.name}`);
        }
    }

    const normalUser: NormalUser = {
        name: 'Mr. Normal bhai'
    }
    const adminUser: AdminUser = {
        name: 'Mr. admin bhai',
        role: 'admin'
    }

    getUser(normalUser)

    //
}