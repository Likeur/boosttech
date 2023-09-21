const btnMenu=document.getElementById("btn-menu");
const navBar=document.getElementById("navbar");
const barUn=document.getElementById("bar-1");
const barDeux=document.getElementById("bar-2");
const barTrois=document.getElementById("bar-3");


btnMenu.addEventListener('click' , ()=>{
    navBar.classList.toggle("h-52");
    barDeux.classList.toggle("hidden");
    barUn.classList.toggle("rotate-90");
    barUn.classList.toggle("absolute");
    barUn.classList.toggle("mt-1");
    btnMenu.classList.toggle("rotate-45");
})

