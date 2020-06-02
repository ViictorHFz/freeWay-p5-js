//Carros 
let xCarros = [600, 600, 600];
let yCarros = [40, 96, 150];
let velocidadeCarros = [2, 2.5, 3.2];

//Dimensões dos Carros
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro() {
    for (let i = 0; i < imgCarros.length; i++) {
        image(imgCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
    }
}

function movimentaCarro() {
    for (let i = 0; i < xCarros.length; i++) {
        xCarros[i] -= velocidadeCarros[i]
    }
}

//Função que faz os carros passarem em loop na tela
function fazLoopCarros() {
    for (let i = 0; i < xCarros.length; i++) {
        if (passouATela(xCarros[i])) {
            xCarros[i] = 600;
        }
    }
}

//Verifica se o Carro percorreu a tela toda
function passouATela(carro) {
    return carro < -50;
}