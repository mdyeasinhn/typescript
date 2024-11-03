"use strict";
{
    // Contraints
    const addCourseToStudent = (student) => {
        const course = 'next lavel daveloper';
        return Object.assign(Object.assign({}, student), { course });
    };
    const stuedent1 = addCourseToStudent({ id: 111, name: "mr.x", email: "x@gmail.com", pc: "i7" });
    const stuedent2 = addCourseToStudent({ id: 222, name: "mr.u", email: "u@gmail.com", handWatch: "applae" });
    //
}
