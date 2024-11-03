{
    // Mapped Type 
    const arrOfNumbers: number[] = [1, 2, 3, 4, 5]
    // const arrOfStrings : string[] = ['1','2','3','4','5']

    const arrOfstrings: string[] = arrOfNumbers.map((number) => {
        return number.toString()
    });
    console.log(arrOfstrings);


    type AreaNumber = {
        height: number;
        width: number;
    };
    
 type Height = AreaNumber['height'] // lookup type
    

    //    type AreaString = {
    //     height : string;
    //     width: string;
    //    }

    // keyof AreaNumber --> 'height' | weight | 'depth'
    //T --> { height: string; width: number}
    //Key --> T['width']
    type AreaString<T> = {
        [key in keyof T]: T[key];
    };
    
    const area1: AreaString<{ height: string; width: number}> = {
        height: '100',
        width: 50
    };
    










    //
    
}