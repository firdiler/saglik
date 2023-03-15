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
    new Action('Evde Sağlık Hizmetleri',"../image/dikis.jpg",'Evde sağlık hizmeti, lisanslı hemşireler tarafından verilen, serum takma, ilaç tedavisi takibi, enjeksiyon yapma ya da yara bakımı gibi tibbi işlemleri kapsamaktadır.'),
    new Action('Glutatyon Uygulaması',"../image/glutatyon.jpeg",'Evde glutatyon serum tedavisi, bağışıklığı güçlendirici glutatyon içeren serumun, hastanın kendi ev ortamında uygulanmasıdır.'),
    new Action('Batık Tırnak Cerrahisi',"../image/dikis.jpg",'Tırnakta oluşan yatak bozukluğu sebebi ile tırnağımızın cilt altına doğru batmasından dolayı enfeksiyonlu dokunun alınıp  tırnak yatağına yapılan tırnak yatak revizyon işlemidir.'),
    new Action('Evde PCR ve Antikor Testi',"../image/pcr19.jpg",'Boğaz ve burundan özel çubuklar ile alınan numunelerin ev ortamında özel kit ve solüsyonlar aracılıyla çalışılan ve maksimum 15 dakika içerisinde Antijen(virüsün varlığı) Pozitif/Negatif olarak sonuç veren test yöntemidir. Güvenilirlik oranı yüksektir(98.8%). Hastalar Evde PCR testine, hızlı sonuç vermesinden dolayı yoğun talep göstermektedirler. İstanbul Anadolu ve Avrupa yakasında bu hizmetimizi sunuyoruz. Bu hizmeti genellikle hastalarımız yakın çevrelerinde ya da aynı ev ortamında koronavirüs pozitif kişilerle teması olduğunda talep etmektedirler. Aynı zamanda uçuş planlayan hastalarımız, laboratuvar ortamına gönderilen testi talep ettiklerinde öncesinde çoğu hastamız HIZLI PCR testini talep etmektedirler.'),
    new Action('Enjeksiyon',"../image/menjeksiyon.jpeg",'Bu işlem kas içine (kolun üst dış kısmı, kalçanın üst dış kısmı veya uyluğun üst ön kısmı) ilaç enjekte edilmesi işlemidir. Çok çeşitli hastalıklarda (infeksiyonlar, her türlü ağrı, kronik hastalıklar vb) kas içi enjeksiyon uygulaması yapılabilir.'),
    new Action('Pansuman',"../image/pansuman.jpg",'Evde pansuman hizmeti, alanında tecrubeli, deneyimli, aseptik teknikleri ve pansuman çeşitlerini bilen hemşireler tarafından sağlanmaktadır.'),
    new Action('Serum Takma',"../image/serum-takma.jpg",'Serum hizmeti, dehidrasyonu önlemek veya tedavi etmek için bir damara enjekte edilen, özel olarak formüle edilmiş serum olarak bildiğimiz IV (intravenöz) sıvıların hastaya ev ortamında, alanında uzman bir hemşire ile uygulanması işlemidir.'),
    new Action('Evde Kan Alma',"../image/kan-alma.jpg",'Bireyin bir hastane veya laboratuvara gitmesine gerek kalmadan, kişinin bulunduğu yerde (ev, işyeri vb) uzman hemşireler tarafından kan alma işleminin gerçekleştirilmesi, alınan kanların uygun koşullarda laboratuvara teslim edilmesi ve çıkan sonuçların hasta / hasta yakınları / hastanın hekimi ile paylaşılması işlemidir.'),
    new Action('Peg Bakımı ve Pansumanı',"../image/dikis.jpg",'Evde PEG değişi uygulaması ağızdan yemek alamayan hastalarda mideye endoskopi ile bir tüp takılarak oradan beslenmesi işlemidir. Evde PEG (perkütan endoskopik gastrostomi) değişimi işlemi: ev ortamında, peg  değişimin yapılması, replasman tüplerinin değişimi, pansuman işlemi ve bakım yapılması işlemdir.'),
    new Action('Yara ve Yanık Tedavisi',"../image/dikis.jpg",'Evde yara bakım, kaza, travma veya ameliyat gibi işlemler düzenli yatışı gereken hastalarda,  bozulan dokularına iyileştirmeye ve nekrotik dokunun temizlenmesi yönelik yapılan pansuman ve debridman işlemidir.'),
    new Action('Laboratuvar Tahlilleri',"../image/test.jpg",'Evde laboratuvar hizmetimiz hastalarımızın evden çıkmasına gerek kalmadan kan alımlarının yapılması, alınan kanın uygun koşullarda laboratuvarımıza ulaştırılarak incelenmesi ve sonuçların ilgili hekimlerimize iletilmesi sürecidir.'),
    new Action('Evde Serum Uygulaması',"../image/serum-takma.jpg",'Evde serum hizmeti, dehidrasyonu önlemek veya tedavi etmek için bir damara enjekte edilen, özel olarak formüle edilmiş serum olarak bildiğimiz IV (intravenöz) sıvıların hastaya ev ortamında, alanında uzman bir hemşire ile uygulanması işlemidir.'),
    new Action('İdrar Sondası',"../image/sonda.jpg",'Evde sonda takma, genellikle silikondan yapılmış, ince, steril, içi boş bir tüp olan kateterin, idrar kanalı boyunca ilerletilip mesane içerisine yerleştirilmesi ile mesanedeki idrarı boşaltmaya yarayan tıbbi bir işlemdir.'),
    new Action('Küçük Cerrahi Müdahale',"../image/dikis.jpg",'Tecrübeli ekibimiz tarafından her türlü dikiş (sütur) atılmakta ve alınmaktadır. Dikiş (sütur) doku iyileşene kadar yaranın kapalı kalmasını sağlamaktadır. Kanamayı durdurmak ve yara izi olasılığını azaltmak için atılır.'),
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



