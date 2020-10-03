const burger = document.querySelector(".burger")
const nav = document.querySelector("nav")
const navHolder=document.querySelector(".blank-nav")

nav.classList.add("none")


burger.addEventListener("click",function(){
    burger.classList.toggle("cross")
    nav.classList.toggle("none")
    nav.classList.toggle("new-nav")
    console.log("a")
   
})


window.addEventListener("load",function(){
    const preload=document.querySelector(".preloader-div")
    preload.style.opacity="0"
    preload.style.visibility="hidden"
    preload.style.clickEvents="none"

})


if(window.matchMedia("(max-width:500px)").matches){

    const x=document.querySelector(".fa-times")
    burger.addEventListener("click",function(){
        burger.classList.add("none")
        nav.classList.toggle("none")
        nav.classList.add("new-small-nav")
})
    x.addEventListener("click",function(){
        nav.classList.remove("new-small-nav")
        nav.classList.remove("new-nav")
        burger.classList.remove("none")
        burger.classList.remove("cross")
    })
}