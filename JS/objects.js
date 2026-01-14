let stud = { "name":"Rahul S","age":21}
console.log(stud)
console.log(stud.name)
stud.name = "Rahul Sharma"
console.log(stud.name)
stud["grade"] = "A"
console.log(stud)
for(let i in stud)
{
    console.log(i)
    console.log(stud[i])
}