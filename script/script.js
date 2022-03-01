// MOSTRAR PAGINA

    function mostrarPagina(){
        let barra = document.getElementById("barra")
        let corpo = document.getElementById("corpo")
        let footer = document.getElementById("footer")

        let telas = [barra, corpo, footer];
        for(let i in telas){
            telas[i].style.display = "block";
        }
    }

// FIM MOSTRAR PAGINA

// CAMISETAS
//SPINE CHILL
var postSpine = document.getElementsByClassName("postSpine");
for (let i=0; i<postSpine.length; i++){
    postSpine[i].innerHTML = '<img class="newsImage camSpine" alt="">'+
    '<p class="newsParagrafo">'+
    'Camiseta Masculina Dead by Daylight - Spine Chill'+ 
    '<p class="newsP2">'+
    'A partir de'+
    '</p>'+
    '<p class="newsValor">'+
    'R$80,00'+
    '</p>'+
    '<span class="btnDetalhesSpan"><button class="btnDetalhes btnSpine">'+
    'VER DETALHES'+
    '</button></span>'+
    '</p>';
}

var camSpine = document.getElementsByClassName("camSpine");
var btnSpine = document.getElementsByClassName("btnSpine");
for (let i=0; i<camSpine.length; i++){
    camSpine[i].src = "/assets/camisetas/cam1pos1.jpg";
    camSpine[i].addEventListener("mouseover", function(){
    camSpine[i].src = "/assets/camisetas/cam1pos2.jpg";});

    camSpine[i].style.cursor = "pointer";

    camSpine[i].addEventListener("mouseout", function(){
    camSpine[i].src = "/assets/camisetas/cam1pos1.jpg";
})};
for (let i=0; i<btnSpine.length; i++){
    btnSpine[i].addEventListener("click", function(){
    window.location="/camisetas/camiseta-spine.html";});
    
    camSpine[i].addEventListener("click", function(){
    window.location="/camisetas/camiseta-spine.html";})};


//BORROWED TIME
var postBT = document.getElementsByClassName("postBT");
for (let i=0; i<postBT.length; i++){
    postBT[i].innerHTML = '<img class="newsImage camBT" alt="camiseta borred time"><p class="newsParagrafo">Camiseta Feminina Dead by Daylight - Borrowed Time<p class="newsP2">A partir de</p><p class="newsValor">R$80,00</p><button class="btnDetalhes">VER DETALHES</button></p>';
}

var camBT = document.getElementsByClassName("camBT");
for (let i=0; i<camBT.length; i++){
    camBT[i].src = "/assets/camisetas/cam2pos1.jpg";
    camBT[i].addEventListener("mouseover", function(){
    camBT[i].src = "/assets/camisetas/cam2pos2.jpg";});

    camBT[i].addEventListener("mouseout", function(){
    camBT[i].src = "/assets/camisetas/cam2pos1.jpg";
})};


// FIM CAMISETAS

// QUADROS
// DRAGAO SKYRIM
var postDragao = document.getElementsByClassName("postDragao");
for (let i=0; i<postDragao.length; i++){
    postDragao[i].innerHTML = '<img class="newsImage quadDragao" alt="">'+
    '<p class="newsParagrafo">'+
    'Quadro 3D Skyrim - Dragao imperial'+ 
    '<p class="newsP2">'+
    'A partir de'+
    '</p>'+
    '<p class="newsValor">'+
    'R$160,00'+
    '</p>'+
    '<span class="btnDetalhesSpan"><button class="btnDetalhes btnDragao">'+
    'VER DETALHES'+
    '</button></span>'+
    '</p>';
}

var quadDragao = document.getElementsByClassName("quadDragao");
var btnDragao = document.getElementsByClassName("btnDragao");
for (let i=0; i<quadDragao.length; i++){
    quadDragao[i].src = "/assets/quadros/quad1pos1.jpg";
    quadDragao[i].addEventListener("mouseover", function(){
    quadDragao[i].src = "/assets/quadros/quad1pos2.jpg";});
    
    quadDragao[i].style.cursor = "pointer";

    quadDragao[i].addEventListener("mouseout", function(){
    quadDragao[i].src = "/assets/quadros/quad1pos1.jpg";
})};
for (let i=0; i<btnDragao.length; i++){
    btnDragao[i].addEventListener("click", function(){
    window.location="/quadros/quadro-dragao.html";});

    quadDragao[i].addEventListener("click", function(){
    window.location="/quadros/quadro-dragao.html";})};

// FIM QUADROS

// SLIDER INDEX

var sliderImage = document.getElementsByClassName("slider-image")
for (let i in sliderImage){
    let flag = 0;
    sliderImage[i].addEventListener("click", function(){
        sliderImage[i].classList.add("slider-changer")
        setTimeout(() => {
            sliderImage[i].classList.remove("slider-changer")
        }, 1000);
        if(flag == 0){
        setTimeout(() => {
            if(i == 0){
            sliderImage[i].src = "/assets/img-insta/clientes/cliente1.jpg"
            flag = 1;}
            if(i == 1){
            sliderImage[i].src = "/assets/img-insta/clientes/cliente2.jpg"
            flag = 1;}
            if(i == 2){
            sliderImage[i].src = "/assets/img-insta/clientes/cliente2.jpg"
            flag = 1;}
            if(i == 3){
            sliderImage[i].src = "/assets/img-insta/clientes/cliente2.jpg"
            flag = 1;}
            if(i == 4){
            sliderImage[i].src = "/assets/img-insta/clientes/cliente2.jpg"
            flag = 1;}
            if(i == 5){
            sliderImage[i].src = "/assets/img-insta/clientes/cliente2.jpg"
            flag = 1;}
        }, 300);}
        else{
            setTimeout(() => {
            sliderImage[i].src = "/assets/camisetas/cam1pos1.jpg"
            flag = 0;
            }, 300);
        }
    })
}

let squares = document.querySelectorAll(".square")  
squares.forEach(square => {square.addEventListener("click", addBorder) })
function addBorder(){
    squares.forEach(square => {square.classList.remove("selected")
})
this.classList.add("selected") }


// FIM SLIDER INDEX