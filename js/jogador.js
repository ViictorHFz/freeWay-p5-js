//Posição y do Jogador;
let xJogador = 100;
let yJogador = 366;

let colisao = false;

//dimensões Jogador
let comprimentoJogador = 30;
let larguraJogador = 30;

function mostraJogador() {
    image(imgJogador, xJogador, yJogador, comprimentoJogador, larguraJogador);
}

function movimentaJogador() {
    if (keyIsDown(UP_ARROW)) {
        yJogador -= 3;
    }

    if (keyIsDown(DOWN_ARROW)) {
        yJogador += 3;
    }
}

function verificaColisao() {
    for (let i = 0; i < imgCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xJogador, yJogador, 15);
        if (colisao) {
            yJogador = 366;
        }
    }
}