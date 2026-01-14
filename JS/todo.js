
const addItem = () => {
    //read user input from textbox
    let userInput = document.querySelector("#inp").value
    //create listitem
    let listitem = document.createElement("li")
    listitem.textContent = userInput
    //console.log(listitem)
    //console.log(userInput)
    //Target the list
    let list = document.querySelector("#todo")
    list.appendChild(listitem)
}
let btn = document.querySelector("#btn")
btn.addEventListener("click", addItem)



