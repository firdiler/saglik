const navbar = document.querySelector('.navbar')
const navbar_btn = document.querySelector('.header__navbar--btn')
const slider_btn1 = document.getElementById('slider-btn1')
const slider_btn2 = document.getElementById('slider-btn2')
const slider_btn3 = document.getElementById('slider-btn3')
const container_images = document.querySelector('.container--first-images')
const comment_btn1 = document.getElementById('comment-btn1')
const comment_btn2 = document.getElementById('comment-btn2')
const comment_btn3 = document.getElementById('comment-btn3')
const comment_images = document.querySelector('.container--comment-images')
const slider__frame= document.querySelector('.container--first-slider')
let slider__current = 0

navbar_btn.addEventListener('click' , ()=>{
    if(navbar.className=='navbar')navbar.classList.add('active')
    else navbar.classList.remove('active')
})

slider_btn1.addEventListener('click', ()=>{
    container_images.style.right='0%'
})
slider_btn2.addEventListener('click', ()=>{
    container_images.style.right='100%'
})
slider_btn3.addEventListener('click', ()=>{
    container_images.style.right='200%'
})
comment_btn1.addEventListener('click', ()=>{
    comment_images.style.right='0%'
})
comment_btn2.addEventListener('click', ()=>{
    comment_images.style.right='100%'
})
comment_btn3.addEventListener('click', ()=>{
    comment_images.style.right='200%'
})

