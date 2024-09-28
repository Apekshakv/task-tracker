console.log("HELLO")
let btn = document.getElementsByClassName("btn")[0]
let delet= document.getElementsByClassName("delet")[0]
let  box= document.getElementsByClassName("opps")[0].value
let drake = document.getElementsByClassName("drake")[0].value
let show=document.getElementById("show")
btn.addEventListener("click", apple)
delet.addEventListener("click", deltebtn)
//window refers to the browser window itself, 
window.addEventListener("load", function() {
    let savedTodo = JSON.parse(localStorage.getItem("todo"));
    if (savedTodo) {
        show.innerHTML = `
            <h2>${savedTodo[0]}</h2>
            <p>${savedTodo[1]}</p>
        `;
    }
});

function apple(event){
    let show=document.getElementById("show")
    let  box= document.getElementsByClassName("opps")[0].value
    let drake = document.getElementsByClassName("drake")[0].value
    event.preventDefault();
    localStorage.setItem("todo",JSON.stringify([box,drake]))
    show.innerHTML=`
    <h2>${box}</h2>
    <p>${drake}</p>
    `
    box.value=" "
    drake.value=" "
}

function deltebtn(event){

    event.preventDefault();

    localStorage.removeItem("todo")
    show.innerHTML=""
}