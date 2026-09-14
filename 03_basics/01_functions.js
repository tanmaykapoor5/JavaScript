function sayMyname() {
    console.log("Tanmay")
}

// sayMyname()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,5);

    

function addTwoNumbers(number1, number2){
    return number1 + number2
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username")
//         return
        
//     }
//     return `${username} just logged in`
// }

// const loggedUser = loginUserMessage("Tanmay")
// console.log(loggedUser)

function loginUserMessage(username = "Ronit"){
    if(username === undefined){
        console.log("Please enter a username")
        return
        
    }
    return `${username} just logged in`
}

const loggedUser = loginUserMessage("Tanmay")
console.log(loggedUser)

// when you dont know how many arguments you will get

// function calculateCartprice(...num1){
//     return num1
// }

// console.log(calculateCartprice(200, 400, 500))

function calculateCartprice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartprice(200, 400, 500))

const user = {
    username: "Tanmay",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

}

handleObject(user)