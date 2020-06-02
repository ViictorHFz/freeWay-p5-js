function setup() {
    let canvas = createCanvas(500, 400);
}

function draw() {
    background(imgEstrada);
    mostraJogador();
    mostraCarro();
    movimentaCarro();
    movimentaJogador();
    fazLoopCarros();
    verificaColisao();
}