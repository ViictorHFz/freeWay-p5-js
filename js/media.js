//Imagens do Jogo

let imgEstrada;
let imgJogador;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarros;

//Sons do Jogo
let trilhaSonora;
let somPonto;
let somColisao;

function preload() {
    imgEstrada = loadImage("img/estrada.png");
    imgJogador = loadImage("img/jogador-1.png");
    imgCarro1 = loadImage("img/carro-1.png");
    imgCarro2 = loadImage("img/carro-2.png");
    imgCarro3 = loadImage("img/carro-3.png");
    imgCarros = [imgCarro1, imgCarro2, imgCarro3, imgCarro1, imgCarro2, imgCarro3];
    trilhaSonora = loadSound("sons/trilha.mp3");
    somPonto = loadSound("sons/pontos.mp3");
    somColisao = loadSound("sons/colidiu.mp3");
}