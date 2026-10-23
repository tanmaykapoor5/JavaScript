let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);

        
    }
}

Object.prototype.tanmay = function(){
    console.log(`tanmay is present in all objects`);
    
}

Array.prototype.heyTanmay = function(){
    console.log(`tanmay says hello`);
    
}

heroPower.tanmay();
myHeroes.tanmay();
myHeroes.heyTanmay();
heroPower.heyTanmay();

// An array can access methods on Object.prototype, but adding a method to Array.prototype does not make that method available to ordinary objects.

// Why? Because an array's prototype chain includes Object.prototype, while a plain object's prototype chain does not include Array.prototype.

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherusername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

    
    
}

anotherusername.trueLength()
"tanmay".trueLength()
"iceTea".trueLength()