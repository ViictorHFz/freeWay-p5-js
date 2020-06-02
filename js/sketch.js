function setup() {
    let canvas = createCanvas(500, 400);
    trilhaSonora.loop(0, 1, 0.2);
}

function draw() {
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