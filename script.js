

let menuBtn = document.querySelector('.header_nav_btn');
let menu = document.querySelector('.header_nav_list');
menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('active')
    menu.classList.toggle('active');
})
