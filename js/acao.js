// JavaScript Document

window.onload = inicio /* Quando a página carregar, chama a função inicio */

var fotos = [] /* Array vazio que vai guardar os nomes das fotos */
var totalFotos = 4 /* Total de fotos no carrossel */
var indiceAtual = 0 /* Começa na primeira foto (índice 0) */
var temporizador /* Guarda o setInterval para poder cancelar depois */

/* Loop que adiciona os nomes das fotos no array automaticamente */
for (var i = 1; i <= totalFotos; i++) {
    fotos.push("img/foto" + i + ".png") /* Adiciona foto1.png, foto2.png... */
}

function inicio() {
    var btnVoltar = document.getElementById("btnVoltar") /* Pega o botão voltar pelo id */
    var btnAvancar = document.getElementById("btnAvancar") /* Pega o botão avançar pelo id */

    btnVoltar.onclick = voltar /* Quando clicar no botão voltar, chama a função voltar */
    btnAvancar.onclick = avancar /* Quando clicar no botão avançar, chama a função avancar */
    automacao() /* Inicia o carrossel automático */
}

function avancar() {
    if (indiceAtual < fotos.length - 1) { /* Se não chegou na última foto */
        indiceAtual = indiceAtual + 1 /* Vai para a próxima foto */
    } else {
        indiceAtual = 0 /* Se chegou na última, volta para a primeira */
    }
    trocarFoto() /* Troca a imagem na tela */
    automacao() /* Reinicia o temporizador */
}

function voltar() {
    if (indiceAtual > 0) { /* Se não está na primeira foto */
        indiceAtual = indiceAtual - 1 /* Vai para a foto anterior */
    } else {
        indiceAtual = fotos.length - 1 /* Se está na primeira, vai para a última */
    }
    trocarFoto() /* Troca a imagem na tela */
    automacao() /* Reinicia o temporizador */
}

function trocarFoto() {
    var imagem = document.getElementById("moldura") /* Pega a imagem pelo id */
    imagem.src = fotos[indiceAtual] /* Troca o src pela foto do índice atual */
}

function automacao() {
    clearInterval(temporizador) /* Cancela o temporizador atual para não acumular */
    temporizador = setInterval(avancar, 3000) /* Avança a foto a cada 3 segundos */
}
