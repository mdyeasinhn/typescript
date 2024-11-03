{
    //Promise
    //simulate

    type Something = { something: string }

    const cretatePromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data: Something = { something: 'something' }

            if (data) {
                resolve(data)
            } else {
                reject("failed to load data")
            }
        })
    }
    //calling create promis function 

    const showData = async (): Promise<Something> => {
        const data: Something = await cretatePromise();
        return data  // return string 
        // console.log(data); // return void

    }
    showData();

    type Todo ={
        id : number;
        userId :number;
        title : string;
        completed : boolean
    }

    const getData = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = response.json();
        return data;
    }

        getData()

    //
}