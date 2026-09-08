let mydate = new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(typeof mydate);

// let mycreatedate = new Date(2023, 0, 23);
let mycreatedate = new Date("05-28-2007");
console.log(mycreatedate.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date()
console.log(newDate);

console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})