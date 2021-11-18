const button = document.getElementById("btn")

button.addEventListener("click", function(){
    const newInput = document.querySelector("#newItem").value
    const list = document.getElementById("list")
    const newItem = document.createElement("li")
    const newNode = document.createTextNode(newInput)
    const lastOne = list.appendChild(newItem)
    lastOne.appendChild(newNode)
})

