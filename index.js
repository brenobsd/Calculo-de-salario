function calcular() {
    let nome = document.getElementById("nome").value
    var salario = document.getElementById("salario").value
var novoSalario = ((salario*10)/100) + salario
console.log("O salário de",nome, "é",`${novoSalario}`)
}