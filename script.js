const nome = prompt ("qual seu nome?")
let idade = Number(prompt ("qual sua idade?"))
//let idade = +prompt ("qual sua idade?")
let presença = confirm ("Voce veio a aula hoje?")

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof presença)

console.log("Estudante", nome, "tem", idade, "anos. presença:", presença);

console.log("nome:", typeof nome, "idade:",typeof idade, "presença",typeof presença);