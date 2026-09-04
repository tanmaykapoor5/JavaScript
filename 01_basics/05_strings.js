const name = "Tanmay"
const caste = "Kapoor"

// console.log(name + caste)

console.log(`Hello my name is ${name} and my caste is ${caste}`)

const gameName = new String('gta6')

console.log(gameName[0])

console.log(gameName.length)

console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))

console.log(gameName.indexOf('t'))

console.log(gameName.substring(0,3))
// cant use -ve indexing in substring if we use it will ignore the value and start from 0

console.log(gameName.slice(-3,-1))
// we can use -ve indexing in slice it will take the char from reverse


const newstringone = "   Tanmay   "
console.log(newstringone)
console.log(newstringone.trim())

const url = "https://Tanmay.com/Tanmay%20kapoor"
const newurl = url.replace('%20', '-')
console.log(url)
console.log(newurl)



