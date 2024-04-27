const sideMenu=document.querySelector("aside");
const menubtn=document.querySelector("#menu-btn");
const closebtn=document.querySelector("#close-btn");
const themeToggle=document.querySelector(".theme-toggle");

menubtn.addEventListener("click",()=>{
    sideMenu.style.display="block";
});

closebtn.addEventListener("click",()=>{
    sideMenu.style.display="none";
});

themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle("dark-theme-variable");

    themeToggle.querySelector("i:nth-child(1)").classList.toggle("adtive");
    themeToggle.querySelector("i:nth-child(2)").classList.toggle("adtive");
});