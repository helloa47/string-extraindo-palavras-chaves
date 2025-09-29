import {PALAVRAS_RUINS} from"./palavrasRuins.js";

const botaoMostraPalavras = document.querySelector('#botao-palavraChave');

botaoMostraPalavras?.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    const texto = document.querySelector('#entrada-de-texto').ariaValueMax;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavraChave = processaTexto(texto);

    campoResultado.textContent = palavraChave.join(", ");
}

function processaTexto(texto){
    let palavras = texto.split(/\p{l}+/u);

    for (let i in palvras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencias(palavras);
    let ordenadas = Object.keys(frequencias).dort(ordenaPalavra);

    function ordenadaPalavras(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    return ordenadas.slice(0, 10);
}

function contaFrequencias(palavras) {
    let frequencias = {};
    for (let i of palavras){
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }
        }
    }
    return frequencias;
}

function tiraPalavrasRuins(palavras) {
    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!PALAVRAS_RUINS.has(palavra) && palvra.length > 2) {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
}