const all_action = document.querySelector('.container--about-btn')
const action_btn = document.querySelectorAll('.main__container-element-btn')


all_action.addEventListener('click' , ()=>{
    location.href = './about.html'
})

let btns_queue = [
    ['Evde PCR ve Antikor Testi','./about/about-evdepcr.html'],
    ['Evde Serum Uygulaması','./about/about-evdeserum.html'],
    ['Evde Kan Alma','./about/about-evdekanalma.htmll'],
    ['Enjeksiyon','./about/about-enjeksiyon.html'],
    ['Glutatyon Uygulaması','./about/about-glutatyon.html'],
    ['Küçük Cerrahi Müdahale','./about/about-kucukcerrahi.html'],
    ['Pansuman','./about/about-pansuman.html'],
    ['İdrar Sondası','./about/about-idrarsonda.html'],
    ['Laboratuvar Tahlilleri','./about/about-laboratuvar.html'],
    ['Sütur (Dikiş) Atma / Alma','./about/about-kucukcerrahi.html'],
]




action_btn.forEach((element,i) =>{
    element.addEventListener('click' , ()=>{
          location.href=btns_queue[i][1]
    })
})