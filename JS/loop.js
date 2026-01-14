// for(let i=100;i>=1;i--)
// {
//     document.writeln(`<h2>${i}</h2>`)
// }

// for(let i=100;i>=1;i--)
// {
//     if(i%2==0)
//     {
//         document.writeln(`<h2>${i}</h2>`)
//     }
// }

// for(let i=100;i>=1;i-2)
// {
//     document.writeln(`<h2>${i}</h2>`)
// }

// for(let i=100;i>=1;i-=2)
// {
//     if(i % 4 != 0 && i % 5 != 0)
//     {
//         document.writeln(`<h2>${i}</h2>`)
//     }
// }

for(let i=100;i>=1;i-=2)
{
    if(i%4 ==0 || i%5 ==0)
        continue;
    document.writeln(`<h2>${i}</h2>`)
}
