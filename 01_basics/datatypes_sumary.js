// Primitive

// 7 types : string, number, boolean, null, undefined, symbol, bigint

// Reference (Non primitive)

// Array, objects, functions

let myObj = {
    name: "Tanmay",
    age: 19,

}

console.log(myObj)
console.log(typeof myObj)

// ******* Memory in javascript *********

// Stack memory (in primitive)
// Heap memory  (in non primitive)

let myname = "Tanmay"

let myfriendname = myname  
myfriendname = "Ronit"

/*
in stack you will get the copy of 
value so if you change the value 
in new variable it wont affect the original variable value
*/

console.log(myname)   
console.log(myfriendname)


let userone = {
    email: "abc@gmail.com",
    id: 12345

}

let usertwo = userone

usertwo.email = "hpc@gmail.com"

/*
   In heap reference will be given so
   it will also change the original value 
   if you change the value in new object

*/

console.log(userone.email)
console.log(usertwo.email)



