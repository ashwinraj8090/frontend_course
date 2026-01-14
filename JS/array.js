// marks = [45,67,34,12]
// document.writeln(marks,"<br><br>")
// marks[0] = 55
// document.writeln("marks after updating<br><br>")
// document.writeln(marks)
// marks[10] = 55
// document.writeln("<br><br>",marks)
// delete marks[0]
// document.writeln("<br><br>",marks)
// marks.push(99)
// document.writeln(marks)
// marks.pop()
// document.writeln("<br><br>",marks)
// marks.shift() //removing elements from the beginning of the list
// document.writeln(marks,"<br>")
// marks.unshift(45) //adding elements to the beginning of the list
// document.writeln(marks)
fee_collected = [45000,55000,60000,70000]
let sum = 0
// for(let i=0;i<fee_collected.length;i++)
// {
//     sum = sum + fee_collected[i]
// }
// document.writeln(sum)

for(fee of fee_collected)
{
    sum = sum + fee
}
document.writeln(sum)