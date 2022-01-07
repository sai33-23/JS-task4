const btn = document.querySelector("#btn");
const body=document.body

const hexaCode = ["light green","skyblue","yellow","orange","purple","lightpink"]

body.style.backgroundColor=hexaCode[0]
btn.addEventListener("click",getRandomNumber)
function getRandomNumber(){
    const text= Math.floor(Math.random() * hexaCode.length)
    body.style.backgroundColor = hexaCode[text];
}
    