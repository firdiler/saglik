const navbar = document.querySelector('.navbar')
const navbar_btn = document.querySelector('.header__navbar--btn')


navbar_btn.addEventListener('click' , ()=>{
    if(navbar.className=='navbar')navbar.classList.add('active')
    else navbar.classList.remove('active')
})