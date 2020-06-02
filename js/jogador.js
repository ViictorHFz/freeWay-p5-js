//Posição y do Jogador;
let xJogador = 100;
let yJogador = 370;
let meusPontos = 0;

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
        if (personagemNoLimiteTela()) {
            yJogador += 3;
        }
    }
}

function verificaColisao() {
    for (let i = 0; i < imgCarros.length; i++) {
        colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xJogador, yJogador, 15);
        if (colisao) {
            voltaPersonagemInicio();
            somColisao.play();
            if (pontosMaiorQueZero()) {
                meusPontos--;
            }
        }
    }
}

function voltaPersonagemInicio() {
    yJogador = 380;
}

function incluiPontos() {
    textAlign(CENTER);
    textSize(25);
    fill(255, 240, 60)
    text(meusPontos, width / 3, 27);
}

function marcaPonto() {
    if (yJogador < 15) {
        meusPontos++;
        somPonto.play();
        voltaPersonagemInicio();
    }
}

function pontosMaiorQueZero() {
    return meusPontos > 0;
}

function personagemNoLimiteTela() {
    return yJogador < 366;
}