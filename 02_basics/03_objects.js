// singleton
// object.create

// object literals

const mykeys = Symbol("key1");

const jsuser = {
    name: "Tanmay",
    [mykeys]:  "mykey1",
    age: 19,
    location: "Bangalore",
    email: "tanmay@gmail.com",
    isLoggedin: false,
    lastLogininDays: ["Monday", "Saturday"]
}

console.log(jsuser.name);
console.log(jsuser["location"]);
console.log(jsuser["lastLogininDays"]);

console.log(jsuser[mykeys]);
console.log(typeof jsuser[mykeys]);

console.log(jsuser);

console.log(jsuser["age"]);

jsuser.name = "Ronit"
console.log(jsuser.name);
// Object.freeze(jsuser);
jsuser.age = 20;
console.log(jsuser.age);

jsuser.greeting = function(){
    console.log("Hello Ronak");
}

jsuser.greetingTwo = function(){
    console.log(`hello ${this.name}`)
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());