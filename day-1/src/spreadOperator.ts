{
// Spread Operator - Combining Arrays and Objects

// Example 1: Combining two arrays
const animals1 = ['dog', 'cat'];
const animals2 = ['rabbit', 'hamster'];
const allAnimals = [...animals1, ...animals2];  // Combines both arrays
console.log('All Animals:', allAnimals);  // Output: ['dog', 'cat', 'rabbit', 'hamster']

// Example 2: Adding properties from two objects into one
const personInfo = { name: 'Alice', age: 30 };
const contactInfo = { phone: '123-456-7890', email: 'alice@example.com' };
const fullInfo = { ...personInfo, ...contactInfo };
console.log('Full Info:', fullInfo);  
// Output: { name: 'Alice', age: 30, phone: '123-456-7890', email: 'alice@example.com' }


// Rest Operator - Accepting Multiple Arguments in a Function

// Example: A function that says hello to each friend
const sayHello = (...friends: string[]) => {
    friends.forEach(friend => console.log(`Hello ${friend}!`));
};

sayHello('Anna', 'Bob', 'Charlie');  // Output: "Hello Anna!", "Hello Bob!", "Hello Charlie!"


}