const iconMenu = document.querySelector(".bx-menu");
const menu = document.querySelector(".menu");
const bxMenu = document.querySelector("menu__button");

iconMenu.addEventListener("click", function () {
    menu.classList.toggle("menu-show");
    
});

menu.addEventListener("click",(e)=> {

    if(e.target.classList.contains("menu__button")){
        menu.classList.toggle("menu-show");
    }
});

window.addEventListener("load",function (){
    const loading = this.document.querySelector(".loading");
    
    setTimeout(()=>{
        loading.style.display="none";
    },500);
})
