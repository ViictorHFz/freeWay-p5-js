//Imagens do Jogo

let imgEstrada;
let imgJogador;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarros;

function preload() {
    imgEstrada = loadImage("img/estrada.png");
    imgJogador = loadImage("img/jogador-1.png");
    imgCarro1 = loadImage("img/carro-1.png");
    imgCarro2 = loadImage("img/carro-2.png");
    imgCarro3 = loadImage("img/carro-3.png");
    imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro2, imgCarro3];
}