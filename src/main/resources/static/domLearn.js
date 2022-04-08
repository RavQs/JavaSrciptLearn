const helloH1 = document.getElementById("hello1")
const helloH2 = document.getElementById("hello2")
const helloH3 = document.getElementById("hello3")


setTimeout(() => {
    addStyles(helloH1,"FUCK HELLO WORLD, WELCOME TO MY  PENGUIN CLUB'S PAGE")
}, 2500)
setTimeout(() => {
    addStyles(helloH2, "LET CELEBRATE AND SUCC SOME DICKS")
}, 4000)
setTimeout(() => {
    addStyles(helloH3, "here's ur cute card :)","white","purple")
}, 6000)


function addStyles(node, something, color1 = "red",color2 = "black") {
    node.textContent = something
    node.style.backgroundColor = color2
    node.style.color = color1
    node.style.textAlign = "center"
    node.style.padding = '2rem'
}

//События

helloH1.onclick = () => {
    console.log("click")
    if(helloH1.style.color === "red"){
        helloH1.style.color = "yellow"
    }
}


