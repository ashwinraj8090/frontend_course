// function test()
// {
//     console.log("Test is working")
// }
// test()

// function greet(name)
// {
//     console.log("Good Morning ",name)
// }
// greet("Arun")
// greet()

// function findpow(m,n)
// {
//     return m**n
// }
// let res = findpow(2,3)
// console.log(res)
 
// let demo=function test(){
//     console.log("Working")
// }
// demo()
// let demo=function(n){//anonymous function
//     console.log("Working")
// }
// // demo()

// (function()
// {
//     console.log("IIF is working")
// })()
// //Arrow function - concise way of writing funtions used in js
// let test=()=>{
//     console.log("Arrow function is working")
// };
// test();
// let add = (a,b) => console.log(a+b)//single function
// add(8,9)
let abc = (a,b) => a**b
let HO_Function = (test) =>
{
    console.log(test(2,3))
}
HO_Function(abc)//passing arrow function as argument
let sum = (a,b) => a+b

//Passing one function as argument to another function 

function bcd()
{
    return "bcd working"
}
let xyz = (test) =>
{
    console.log(test())
}
xyz(bcd)//passing regular function as argument