function lockedProfile() {
//constants
const SHOW_MORE="Show more"
const HIDE_IT="Hide it"

//capture elements
const btnElements=Array.from(document.querySelectorAll("div button"))

//attach event listener
for (let btn of btnElements) {
    btn.addEventListener("click",show)   
}
// on click functionality
function show(e){
    const divChildren=Array.from(e.target.parentElement.children)
    const isLocked=divChildren[2].checked


    // if is locked -do nothing
    if(isLocked){
        return
    }
    //else enable functionalty
    const hiddenFieldElement=e.target.previousElementSibling
    
    if(e.target.textContent === SHOW_MORE){
        hiddenFieldElement.style.display="inline"
        e.target.textContent=HIDE_IT
        return
    }
    hiddenFieldElement.style.display=""
    e.target.textContent=SHOW_MORE
}
}