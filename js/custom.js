let circle = document.querySelector(".circle")
function move(e){
    circle.style.left = e.clientX +  "px"
    circle.style.top = e.clientY +  "px"
}


document.addEventListener("mousemove",move)


let body = document.querySelector("body")
let main = document.querySelector(".main")


body.addEventListener("click",function(e){
    console.log();

    if(e.target.classList[0] == "same"){
        main.classList.add("main2")
        main.innerHTML = `<div class="close"><img src="${e.target.dataset.url}" alt="" /> <i class="fa-solid fa-xmark"></i></div>`
    }else{
        main.classList.remove("main2")
        main.innerHTML = ""
    }





})



