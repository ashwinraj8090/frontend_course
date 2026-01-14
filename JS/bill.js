var bill = Number(prompt("Enter the total bill amount:"))
var Discount = 0;
if(bill < 1000){
    document.writeln("<h1>Sorry No discount, please purchase for another Rs.",1000-bill)
}
else if(bill>=1000 && bill < 3000){
    Discount = bill * 0.05

}
else if(bill>=3000 && bill < 6000){
    Discount = bill * 0.1
    
}
else if(bill>=6000){
    Discount = bill * 0.15
   
}
document.writeln("<h1>Net Payable is :",bill - Discount)