{
    // Interface --> genric
    interface Developer<T, Y =null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            ram: number;
        };
        smartphone: T; 
        bike?: Y
    }
    

    type EmailabWatch ={
        brand : string;
        model : string;
        ram: number
    }
    const poorDeveloper: Developer<EmailabWatch> = {
        name: 'Yeasin',
        computer: {
            brand: 'hp',
            model: 'y34',
            ram: 4
        },
        smartphone: {
            brand: "mi",
            model: 'some-model',
            ram: 4
        }
    };

    interface Apple{
        brand: string;
        price: string;
    }
    interface YamahaBike{
        model: string;
        engineCapacity: number;
    }
    
    
    const richDeveloper: Developer<Apple, YamahaBike> = {
        name: 'Rich Dev',
        computer: {
            brand: 'mac',
            model: 'y34',
            ram: 16
        },
        smartphone: { 
            brand: "apple",
            price: '1000'
        },
        bike :{
            model : "Yamaha ",
            engineCapacity : 100
        }
    };
    

    //
}