{
    // union 
    type FrontendDeveloper = 'junior developer' | 'senior developer';
    type FullstackDeveloper = 'junior developer' | 'senior developer';


    type Developer = FrontendDeveloper | FullstackDeveloper;

    const newDeveloper: FrontendDeveloper = 'junior developer';

    type User ={
        name : string;
        email?: string;
        gender : "Male" | "Female";
        bloadGroup : 'A+' | "AB+" | 'O+';
    }

    const user1 : User ={
        name : 'Yeasin',
        gender : "Male",
        bloadGroup: "A+"
    };

    type FrontendDeveloper1 ={
        skills : string[];
        designation1 : "FrontendDeveloper"
    };
    type BackendDeveloper1 ={
        skills : string[];
        designation2 : "BackendDeveloper"
    };

    type FullstackDeveloper1 = FrontendDeveloper1 & BackendDeveloper1 ;

    const fullstackDeveloper : FullstackDeveloper1 ={
        skills:["HTML", 'CSS', 'EXPRESS'],
        designation1 :'FrontendDeveloper',
        designation2 : "BackendDeveloper"
    }




}