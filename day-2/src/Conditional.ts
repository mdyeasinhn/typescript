{
    //Conditional type
    type a1 = number;
    type b1 = string;

    type x = a1 extends null ? true : false; // Conditional type

    type y = b1 extends null ? true : b1 extends undefined ? undefined : any


    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane : string
    }

    // key of sheikh  'bike | car | ship | plane

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false

    type HasPlane = CheckVehicle<'plane'>
    //
}