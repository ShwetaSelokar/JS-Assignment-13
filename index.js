// let element1 = document.getElementById("text");
// console.log(element1.innerText);

// let element2 = document.getElementsByTagName("h1");
// console.log(element2[0]);

// let element3 =document.getElementsByClassName("box")
// console.log(element3[0].innerHTML)

let element4=document.getElementById("no")
element4.innerText="Hello World"


let container=document.getElementById("cont")
let btn=document.getElementById("btn")
btn.addEventListener("click",function(){
    cont.style.flexDirection="column"
})


let heading=document.getElementById("heading")
function changecolor(){
    heading.style.color="red"
}
changecolor()


let textchange=document.getElementById("textchange")
let button=document.getElementById("btn2")
button.addEventListener("click",function(){
    textchange.innerText="Welcome to Elevation academy"
})


function timer(){
    let date=new Date()
    let hr=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
    let clock=document.getElementById("clock")
    clock.innerText=`${hr}hr : ${min}min : ${sec}sec`
}
setInterval(timer,1000)


let select=document.getElementById("select")
let output=document.getElementById("output")
select.addEventListener("change",function(event){
    let selected=(event.target.selectedOptions[0].innerText)
    console.log(selected)
    output.innerText=selected
})