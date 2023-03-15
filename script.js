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
const btn__icon = document.querySelector('.header__navbar--icon')
const slider = document.querySelector('.container--first-images'),
  slides = Array.from(document.querySelectorAll('.slider-image'))

let isDragging = false,
  startPos = 0,
  currentTranslate = 0,
  prevTranslate = 0,
  animationID,
  currentIndex = 0


navbar_btn.addEventListener('click' , ()=>{
    if(navbar.className=='navbar')navbar.classList.add('active')
    else navbar.classList.remove('active')
})

const slider_btns = [slider_btn1,slider_btn2,slider_btn3]

slider_btn1.addEventListener('click', ()=>{
    currentTranslate = 0 * -window.innerWidth
    slider.style.transform = `translateX(${currentTranslate}px)`
    currentIndex=0
})
slider_btn2.addEventListener('click', ()=>{
    currentTranslate = 1 * -window.innerWidth
    slider.style.transform = `translateX(${currentTranslate}px)`
    currentIndex=1
})
slider_btn3.addEventListener('click', ()=>{
    currentTranslate = 2 * -window.innerWidth
    slider.style.transform = `translateX(${currentTranslate}px)`
    currentIndex=2
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

btn__icon.addEventListener('click' , ()=>{
    location.href= './index.html'
})


// add our event listeners
slides.forEach((slide, index) => {
    if(index>2)return 0
    const slideImage = slide.querySelector('img')
    // disable default image drag
    slideImage.addEventListener('dragstart', (e) => e.preventDefault())
    // pointer events
    slide.addEventListener('mousedown', mouseDown(index))
    slide.addEventListener('mouseup', mouseUp)
    slide.addEventListener('mouseleave', mouseUp)
    slide.addEventListener('mousemove', mouseMove)
    //touch event
    slide.addEventListener('touchstart', pointerDown(index))
    slide.addEventListener('touchend', pointerUp)
    slide.addEventListener('touchmove', pointerMove)
  })
  
  // make responsive to viewport changes
  window.addEventListener('resize', setPositionByIndex)
  
  // prevent menu popup on long press
  window.oncontextmenu = function (event) {
    event.preventDefault()
    event.stopPropagation()
    return false
  }
  
  // use a HOF so we have index in a closure
  function pointerDown(index) {
    return function (event) {
      currentIndex = index
      startPos = event.touches[0].clientX
      isDragging = true
      animationID = requestAnimationFrame(animation)
    }
  }
  function mouseDown(index) {
    return function (event) {
      currentIndex = index
      startPos = event.clientX
      isDragging = true
      animationID = requestAnimationFrame(animation)
    }
  }
  
  function pointerMove(event) {
    if (isDragging) {
      const currentPosition = event.touches[0].clientX
      currentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  function mouseMove(event) {
    if (isDragging) {
      const currentPosition = event.clientX
      currentTranslate = prevTranslate + currentPosition - startPos
    }
  }
  
  function pointerUp() {
    cancelAnimationFrame(animationID)
    isDragging = false
    const movedBy = currentTranslate - prevTranslate
  
    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100 && currentIndex < 2) {
        slider_btns[currentIndex].clicked=false
        currentIndex += 1
        slider_btns[currentIndex].clicked=true
    }
    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100 && currentIndex > 0){
        slider_btns[currentIndex].clicked=false
        currentIndex -= 1
        slider_btns[currentIndex].clicked=true
    }
    setPositionByIndex()
  
    slider.classList.remove('grabbing')
  }
  function mouseUp() {
    cancelAnimationFrame(animationID)
    isDragging = false
    const movedBy = currentTranslate - prevTranslate
  
    // if moved enough negative then snap to next slide if there is one
    if (movedBy < -100 && currentIndex < 2) currentIndex += 1
  
    // if moved enough positive then snap to previous slide if there is one
    if (movedBy > 100 && currentIndex > 0) currentIndex -= 1
  
    setPositionByIndex()
  
    slider.classList.remove('grabbing')
  }
  
  function animation() {
    setSliderPosition()
    if (isDragging) requestAnimationFrame(animation)
  }
  
  function setPositionByIndex() {
    currentTranslate = currentIndex * -window.innerWidth
    prevTranslate = currentTranslate
    setSliderPosition()
  }
  
  function setSliderPosition() {
    slider.style.transform = `translateX(${currentTranslate}px)`
  }

  let plus = true
  var countDownID = setInterval(function () {

    if (currentIndex == 2) {
      plus=false
    }
    if (currentIndex == 0) {
      plus=true
    }
    if(plus==true){
      currentIndex += 1
      currentTranslate = currentIndex * -window.innerWidth
      slider.style.transform = `translateX(${currentTranslate}px)`
      console.log(currentIndex)
    }
    else if(plus==false){
      currentIndex -= 1
      currentTranslate = currentIndex * -window.innerWidth
      slider.style.transform = `translateX(${currentTranslate}px)`
  
    }

}, 9000);
