{
    // Contraints


    const addCourseToStudent = <T extends { id: number, name: string, email: string }>(student: T) => {
        const course = 'next lavel daveloper'

        return {
            ...student,
            course
        }
    };
    const stuedent1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        pc: string;
    }>({ id: 111, name: "mr.x", email: "x@gmail.com", pc: "i7" });
    const stuedent2 = addCourseToStudent({ id: 222, name: "mr.u", email: "u@gmail.com", handWatch: "applae" });




    //
}