{
    //

    //Type assertion

    let anything: any;

    anything = "Next level web developere";

    anything = 222;

    //(anything as number)

    const KgToGm = (value: string | number):string |number |undefined => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value : ${convertedValue}`;
        }
        if (typeof value === "number") {
            return value * 1000
        }
    }

        const result1 = KgToGm(1000) as number;
        const result2 = KgToGm("1000") as string;

        type CustomError = {
            message:string
        }

        try {
            
        } catch (error) {
            console.log((error as CustomError).message)
        }


    //
}