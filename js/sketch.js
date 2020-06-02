let tempo = 3

function setup() {
    let canvas = createCanvas(500, 400);
    trilhaSonora.loop(0, 1, 0.2);
}

function draw() {
    background(imgEstrada);
    mostraJogador();
    mostrarTempoNaTela();
    if (frameCount % 60 == 0 && tempo > 0) {
        tempo--;
    }
    if (tempo == 0) {
        //clear()
        comecarJogo();
    }
}

function comecarJogo() {
    background(imgEstrada);
    mostraJogador();
    mostraCarro();
    movimentaCarro();
    movimentaJogador();
    fazLoopCarros();
    verificaColisao();
    incluiPontos();
    marcaPonto();
}

function mostrarTempoNaTela() {
    textAlign(CENTER, CENTER);
    fill(255, 255, 200)
    textSize(150);
    text(tempo, width / 2, height / 2);
}