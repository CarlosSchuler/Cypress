function verificarIdade() {
    var nome = document.querySelector('input[name=nome]');
    var idade = document.querySelector('input[name=idade]');

    if (idade.value.length == 0 || nome.value.length == 0) {
        alert("Preencher campos.")
        return
    };

    var idadeNum = parseInt(idade.value);

    console.log(nome, idade);

    if (idadeNum >= 18) {
        alert("Idade já pode retirar CNH");
    } else if (idadeNum > 10) {
        alert("falta pouco");
    } else {
        alert("Falta muito!");
    }
}