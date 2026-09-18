// This keyword:- it refers to current context

const user = {
    username: "Tanmay",

    welcomeMessage: function(){
        console.log(`${this.username}`);
        console.log(this);
    } 
}

user.welcomeMessage()

// console.log(this);

// this inside the normal function

// function chai(){
//     let username = "Tanmay";
//     console.log(this.username); // cant use this in function

// }


// arrow function

const chai = () => {
    let username = "Tanmay"
    // cant use this in arrow function also
}

// const addTwo = (num1, num2) => {
//     return num1 + num2;

// }

// const result = addTwo(2,3);
// console.log(result);

// another way to to initialise the arrow function

const add = (a,b) => (a+b)
console.log(add(2,3))

