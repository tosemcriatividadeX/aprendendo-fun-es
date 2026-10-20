let nome = "Victor"

if (nome == "Victor") {
    exibirSaudacao(nome)
} else if (nome == "João") {
    exibirSaudacao(nome)
} else if (nome == "Luiz") {
    exibirSaudacao(nome)
}

// -------------------------------

function exibirSaudacao(nome) {
    console.log("Seja bem-vindo(a), " + nome)
    console.log(nome)
}

function somarDoisNumeros(num1, num2) {
    return num1 + num2
}

let resultado = 20