// Função de inserção de numero
function insert (num){
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num;
}

//função para limpar tela
function clean (){
    document.getElementById('resultado').innerHTML = "";
}

//função para apagar ultimo numero 
function back (){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}