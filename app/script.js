var Fila = [];
var Comum = [];
var Prioridade = [];
var Rapido = [];
var contador = 1;

// Clientes

function SenhaComum(){
    Fila.push("C" + "-" + contador);
    Comum.push("C" + "-" + contador);
    SuaSenha();
    contador = contador + 1;
};

function SenhaPrioridade(){
    Fila.push("P" + "-" + contador);
    Prioridade.push("P" + "-" + contador);
    SuaSenha();
    contador = contador + 1;
};

function SenhaRapido(){
    Fila.push("R" + "-" + contador);
    Rapido.push("R" + "-" + contador);
    SuaSenha();
    contador = contador + 1;
};

function SuaSenha(){
    document.getElementById("suaSenha").innerHTML = Fila[Fila.length - 1];
};

// Caixas

function Caixa1() { // P > R > C
    if (Fila.length == 0) { // Fila Vazia
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    } 
    
    if (Prioridade.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Prioridade.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 1";
    } else if (Rapido.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Rapido.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 1";
    } else if (Comum.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Comum.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 1";
    } else {
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    }
};

function Caixa2() { // R > P > C
    if (Fila.length == 0) { // Fila Vazia
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    } 
    
    if (Rapido.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Rapido.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 2";
    } else if (Prioridade.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Prioridade.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 2";
    } else if (Comum.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Comum.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 2";
    } else {
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    }
};

function Caixa3() { // R > P > C
    if (Fila.length == 0) { // Fila Vazia
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    } 
    
    if (Rapido.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Rapido.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 3";
    } else if (Prioridade.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Prioridade.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 3";
    } else if (Comum.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Comum.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 3";
    } else {
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    }
};

function Caixa4() { // C > P > R
    if (Fila.length == 0) { // Fila Vazia
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    } 
    
    if (Comum.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Comum.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 4";
    } else if (Prioridade.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Prioridade.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 4";
    } else if (Rapido.length > 0) {
        var senhaPainel = Fila.shift();
        var senhaPainel = Rapido.shift();
        document.getElementById("senhaAtual").innerHTML = senhaPainel;
        document.getElementById("caixaAtual").innerHTML = "Caixa 4";
    } else {
        document.getElementById("senhaAtual").innerHTML = "Sem senha";
    }
};

