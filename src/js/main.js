const iconMenu = document.querySelector(".bxmenu");
const menu = document.querySelector(".menu");
const bxMenu = document.querySelector("menu__button");
const formRegister = document.querySelector("#formRegister");
const formContainer = document.querySelector(".formContainer");


iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-show");
    
});

menu.addEventListener("click",function () {
    iconMenu.classList.toggle("bx-x");
    menu.classList.toggle("menu-show");
   
});

iconMenu.addEventListener("click", () => {
    iconMenu.classList.toggle("bx-x");
});


window.addEventListener("load",function (){
    const loading = this.document.querySelector(".loading");
    
    setTimeout(()=>{
        loading.style.display="none";
    },500);
    
})


