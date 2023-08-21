function solve() {
//capture elements
const textArea=document.getElementById("input")
const textAreaValue=textArea.value
const sentanceArr=textAreaValue.split(".").filter((s)=>s !=="").map((s)=>s+ ".")
const resultDiv=document.getElementById("output")

const paragraphRoof=Math.ceil(sentanceArr.length/3)
for (let i = 0; i< paragraphRoof; i++) {
  const joinedSentances=sentanceArr.splice(0,3).join("")
  resultDiv.innerHTML += `<p>${joinedSentances}</p>`
  
}
}