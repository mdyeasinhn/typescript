{
    //

    // Genric type 

    type GenricArray<T> = Array<T>

    // const rollNumbers: number[] = [3, 4, 5.56, 6];
    const rollNumbers: GenricArray<number> = [3, 4, 5, 56, 6];


    // const mentors: string[] = ["Mr.X", "Mr.Y", "Mr.Z"];
    const mentors: GenricArray<string> = ["Mr.X", "Mr.Y", "Mr.Z"];

    // const boolArry: boolean[] = [true, false, true, false];
    const boolArry: GenricArray<boolean> = [true, false, true, false];

    const user: GenricArray<{ name: string, age: number }> = [
        {
            name: 'Yeasin',
            age: 23,
        },
        {
            name: 'Arafat',
            age: 23,
        }
    ]


    const add = (x: number, y: number) => x + y;

    add(34, 43);


    //Genric tuple 

    type GenricTuple<x, y> = [x, y]
    const manush: GenricTuple<string, string> = ["mr.x", "mr.y"];

    const UserWithID: GenricTuple<number,{name:string, age: number, email:string}>= [123, {name : "enan", age :34, email : "yeasin@gmail.com"}];










    //
}