function addItem() {
    //capture elements
   const inputTextElement=document.getElementById("newItemText")
    const inputValueElement=document.getElementById("newItemValue")
    const menu=document.getElementById("menu")

    //create element 
    const optionElement=document.createElement("option")

    //setup option
    optionElement.textContent=inputTextElement.value
    optionElement.value=inputValueElement.value

    // append to menu
    menu.appendChild(optionElement)

    // clear 
    inputTextElement.value=""
    inputValueElement.value=""
}
