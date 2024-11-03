"use strict";
{
    // function with genric 
    const createArray = (param) => {
        return [param];
    };
    const createArraywithGenric = (param) => {
        return [param];
    };
    const res1 = createArray('Chittagong');
    const resGenric = createArraywithGenric('Chittagong');
    const resGenricObj = createArraywithGenric({ id: 2322, name: 'Yeasin' });
    // function with touple
    const createArraywithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const result = createArraywithTuple('Chittagong', 878);
    const result2 = createArraywithTuple('Chittagong', { country: "BANGLADESH" });
    const addCourseToStudent = (student) => {
        const course = 'next lavel daveloper';
        return Object.assign(Object.assign({}, student), { course });
    };
    const stuedent1 = addCourseToStudent({ name: "mr.x", email: "x@gmail.com", pc: "i7" });
    const stuedent2 = addCourseToStudent({ name: "mr.u", email: "u@gmail.com", handWatch: "applae" });
}
