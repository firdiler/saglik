class Action {
    constructor(head,site,paraf){
        this.site=site
        this.head=head
        this.paraf=paraf
    }
}
const aa2 = document.querySelectorAll('.about--list ul li')
const aa1= document.querySelector('.evet_clas')
const about__image = document.querySelector('.about--image')
const about__paraf = document.querySelector('.about--paraf')
const lists =[
    new Action('Evde Sağlık Hizmetleri',"./image/dikis.jpg",'AA'),
    new Action('Glutatyon Uygulaması',"./image/glutatyon.jpeg",'AA'),
    new Action('Batık Tırnak Cerrahisi',"./image/dikis.jpg",'AA'),
    new Action('Evde PCR ve Antikor Testi',"./image/pcr19.jpg",'AA'),
    new Action('Enjeksiyon',"./image/menjeksiyon.jpeg",'AA'),
    new Action('Pansuman',"./image/pansuman.jpg",'AA'),
    new Action('Serum Takma',"./image/dikis.jpg",'AA'),
    new Action('Evde Kan Alma',"./image/kan-alma.jpg",'AA'),
    new Action('Peg Bakımı ve Pansumanı',"./image/dikis.jpg",'AA'),
    new Action('Yara ve Yanık Tedavisi',"./image/dikis.jpg",'AA'),
    new Action('Laboratuvar Tahlilleri',"./image/test.jpg",'AA'),
    new Action('Evde Serum Uygulaması',"./image/serum-takma.jpg",'AA'),
    new Action('İdrar Sondası',"./image/sonda.jpg",'AA'),
    new Action('Küçük Cerrahi Müdahale',"./image/islme.png",'AA'),
]

aa2.forEach((element , i) => {
    element.addEventListener('mouseover' , ()=>{
        const slider = element.lastChild
        slider.style.width='100%'
    })
    element.addEventListener('mouseleave' , ()=>{
        const slider = element.lastChild
        slider.style.width='00%'
    })
    element.addEventListener('click' , ()=>{
     
    about__image.firstElementChild.src=lists[i].site
    about__paraf.firstElementChild.innerHTML=lists[i].head
    about__paraf.lastElementChild.innerHTML=lists[i].paraf
    })
});



