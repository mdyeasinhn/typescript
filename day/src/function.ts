{
    // Function expression
    const num = function(num1: number, num2: number): number {
        return num1 + num2;
    };
    
    // or as an arrow function
    const arrowfun = (num1: number, num2: number): number => num1 + num2;
    
    // Testing the function
    console.log(num(3, 4)); // Outputs: 7
    
    const addArow = (num1: number, num2: number): number => num1 + num2;
    
    // object --> function --> method 
    const user = {
        name: "Yeasin",
        balance: 0,
        addBalance: function (balance: number): string {
            return `My new balance is: ${this.balance + balance}`;
        }
    };
    
    // Array
    const arr: number[] = [1, 5, 23];
    
    // Array function 
    const newArray: number[] = arr.map((elem: number): number => elem * elem);
}

