const navBar = document.getElementById('navbar');
const menuBar = document.getElementById('menu');
const closeBar = document.getElementById('close');

menuBar.addEventListener("click", ()=>{
    if(menuBar){
        navBar.classList.add('active');
    }
})

closeBar.addEventListener('click', ()=>{
    if(closeBar){
        navBar.classList.remove('active');
    }
})
