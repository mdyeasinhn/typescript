{
    // ternaryOperator || optianal chanining || nullish coalescing operator


    const age: number = 30;

    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }

    //ternary
    const isAdult = age >= 18 ? "adult" : "not adult"
    console.log(isAdult);

    // nullish coalescing operator
    // null | undefined ---> decision makeing

    const isAuthenticated = '';

    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";

    console.log({ result1, result2 });



    type User = {
        name : string ;
        address : {
            city :string ;
            road : string ;
            presentAddress: string ;
            permenentAddress?:string
        }
    }

    const user : User = {
        name : "Yeasin",
        address : {
            city:"ctg",
            road : "5no road",
            presentAddress: "boalkhali " ,
        }
    }

    const permenentAddress =  user?.address?.permenentAddress ?? "No Permenent Address ";
    console.log(permenentAddress);

}