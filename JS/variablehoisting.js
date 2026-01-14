console.log(a);//error
console.log(b);//error
console.log(c);//undefined

let a = 10
const b = 20
var c = 30
//variable hoisting happens for var declarations ie. var variables are hoisted to the top of their scope and initialized with undefined
//accessing let and const before the declaration results in a ReferenceError due to the temporal dead zone (TDZ) from the start of the block until the declaration is processed
