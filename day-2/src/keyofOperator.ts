{
    // Genric with Constraint using keyof Operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }


    type Owner = "bike" | "car" | "ship"   // manually 

    type Owner2 = keyof Vehicle

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }


    const user = {
        name: "mr. yeasin",
        age: 26,
        address: 'ctg'
    }
    const person = {
     barth : 2002,
     gender: 'mele'
    }

    const result1 = getPropertyValue(person, 'barth')
















    //
}