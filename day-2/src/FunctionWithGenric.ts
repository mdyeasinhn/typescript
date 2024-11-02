{
    // function with genric 

    const createArray = (param: string): string[] => {
        return [param]
    };
    const createArraywithGenric = <T>(param: T): T[] => {
        return [param]
    };

    const res1 = createArray('Chittagong');

    const resGenric = createArraywithGenric<string>('Chittagong');
    type Person = { id: number; name: string }

    const resGenricObj = createArraywithGenric<Person>({ id: 2322, name: 'Yeasin' });



    // function with touple


    const createArraywithTuple = <T, P>(param1: T, param2: P): [T, P] => {
        return [param1, param2]
    };



    const result = createArraywithTuple<string, number>('Chittagong', 878);

    const result2 = createArraywithTuple<string, { country: string }>('Chittagong', { country: "BANGLADESH" });



    const addCourseToStudent = <T>(student: T) => {
        const course = 'next lavel daveloper'

        return {
            ...student,
            course
        }
    };
    const stuedent1 = addCourseToStudent({ name: "mr.x", email: "x@gmail.com", pc: "i7" });
    const stuedent2 = addCourseToStudent({ name: "mr.u", email: "u@gmail.com", handWatch: "applae" });









}