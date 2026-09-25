const programming = ['js', 'html', 'css', 'java'];

// programming.forEach( function (val){
//     console.log(val);
// })

// programming.forEach( (item) => {
//     console.log(item)
// });

// function printMe(item) {
//     console.log(item);
// }

// programming.forEach(printMe)

// programming.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )