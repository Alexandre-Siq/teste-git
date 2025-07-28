let listaDeNumerosSorteados = [];
let numeroSecreto = geradorNumeroAleatorio();
let tentativas = 1;

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo número secreto');
    exibirTextoNaTela('p', 'Escreva de 1 a 100');
}

console.log(numeroSecreto);
function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou em ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        exibirTextoNaTela('h1', 'Acertou');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor que o chute.');
        } else{
            exibirTextoNaTela('p', 'O número secreto é maior que o chute');
        }
        tentativas++;
        limparCampo();
    }
}
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
exibirTextoNaTela('h1', 'Jogo número secreto');
exibirTextoNaTela('p', 'Escreva de 1 a 10');

function geradorNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1)
    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return geradorNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = geradorNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}