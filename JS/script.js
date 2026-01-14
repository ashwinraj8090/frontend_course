//odd or even
// var num = Number(prompt("Enter a number: "));
// if (num % 2 == 0){
//     document.writeln("<h1>The number is even</h1>")
// }
// else{
//     document.writeln("<h1>The number is odd")
// }

//largest of 2 numbers
var num1 = Number(prompt("Enter first number: "));
var num2 = Number(prompt("Enter second number: "));
var num3 = Number(prompt("Enter third number: "));
if(num1 > num2 && num1 > num3)
    document.writeln("greater is ",num1)

else if(num2 > num1 && num2 > num3)
    document.writeln("greater is ",num2)

else
    document.writeln("greater is ",num3)
