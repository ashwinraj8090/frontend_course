var num1 = 10
let num2 = 20
const num3 = 20
num1 = 11
num2 = 21
//num3 = 31 u cannot reassign constant(const) variables 
//let num2 = 21 - redeclaration not possible for let and const
var num1 = 11 //redeclaration possible for var

if (true)
{
    var x =1
    let y =2
    const z =3
    console.log("Outside Block")
    console.log("x",x) 
    console.log("y",y)
    console.log("z",z)
}
console.log("Outside Block")
console.log("x",x) //var is function scoped- it is available outside the block throughout the function
console.log("y",y)//let and const are block scoped- they are not available outside the block
console.log("z",z)
//if var and let are declared as global variables, they are accessible throughout the file