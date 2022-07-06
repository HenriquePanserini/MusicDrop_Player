let musicas = [
    {titulo:'Might Morphy Power Rangers Theme', artista: 'Metallica', src: 'Musicas/Mighty Morphin Power Rangers The Movie theme.mp3',
    img: 'Imagens/1.png'},
    {titulo:'Sax Quartet', artista: 'The SeatBelts', src: 'Musicas/The Seatbelts - Sax Quartet.mp3',
    img: 'Imagens/2.png'},
    {titulo:'Pauperrecido', artista: 'Vinny Santa Fé', src: 'Musicas/você pode ser oque quiser.mp3',
    img: 'Imagens/3.png'}

];

var indexMus = 0;
var musica = document.querySelector('audio');
var dure = document.querySelector('.fim');
let image = document.querySelector('img');
let nomeMusica = document.querySelector('.desc h2');
let nomeArt = document.querySelector('.desc i');

dure.textContent = secForMin(Math.floor(musica.duration));
document.querySelector('.play').addEventListener('click', tocarMusica);
document.querySelector('.stop').addEventListener('click', pararMusica); 

document.querySelector('.ant').addEventListener('click', () => {
    indexMus--;
    if(indexMus < 0){ 
        indexMus = 2;
    }
    renderizarMusica(indexMus);
    pararMusica()
});
document.querySelector('.prox').addEventListener('click', () => {
    indexMus++;
    if(indexMus > 2){
        indexMus = 0;
    }
    renderizarMusica(indexMus);
    pararMusica()
});

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArt.textContent = musicas[index].artista;
        image.src = musicas[index].img;
        dure.textContent = secForMin(Math.floor(musica.duration));
    });
}

musica.addEventListener('timeupdate', atualizarBarra);

function tocarMusica(){
    musica.play();
    document.querySelector('.stop').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pararMusica(){
    musica.pause();
    document.querySelector('.stop').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime/musica.duration)*100) + "%";
    let tempoCorrido = document.querySelector('.inicio');
    tempoCorrido.textContent = secForMin(Math.floor(musica.currentTime));
}

function secForMin(sec){
    let campoMin = Math.floor(sec/60);
    let campoSec = sec % 60;
    if(campoSec < 10){
        campoSec = '0' + campoSec;
    }

    return campoMin + ':' + campoSec; 
}

