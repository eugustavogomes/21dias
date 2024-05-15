let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("Insira seu nome")
idade = parseInt(prompt("Insira sua idade"))
altura = parseFloat(prompt("Insira sua altura"))
peso = parseInt(prompt("Insira seu peso"))

let anoDeNascimento = 0
anoDeNascimento = 2024 - idade

let imc = 0
imc = peso/(altura*altura)

console.log("Olá, " + nome +  ", sua idade é " + idade + " anos, seu ano de nascimento é " + anoDeNascimento + ", e seu IMC é " + imc )