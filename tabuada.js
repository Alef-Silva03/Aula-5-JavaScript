function calcular() {
    var numero = parseFloat(document.getElementById("numero").value);
    var resposta = document.getElementById("resposta");
    var resultado = "";
    for (var i = 1; i <= 10; i++){
        var produto = numero * i;
        resultado += numero + " x " + i + " = " + produto + "<br/>";
    }
    resposta.innerHTML = resultado;
}