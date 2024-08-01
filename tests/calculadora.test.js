test("nome do teste", callbackFunction);

function callbackFunction () {
    console.log("essa função está sendo chamada? ")
}

// Da pra fazer  de uma forma nova parecendo um arrow fuction.
// Dois senários de nada. kkkkkkk
// Nada está sendo esperado. Tem que ter um expect

test("testando outra função", ()=> {
    console.log("E agora?")
}
)

//Olha o expect ai. Saca só. Tem que fazera função esperada.
// A função espera que 2 seja 2. Expect 2 to be 2

test("espero que 2 seja 2", () => {
    expect(2).toBe(2);
})

// e se eu fizer outr esquema...

test("espero que 1+1 seja 2", () => {
    expect(1+1).toBe(2);
})

// Mas esse valor escrito no experado e toBe é como vender churros pra sí mesmo. Ridiculo.
// O teste tem dois lados. Temos que resolver isso.
// Tem que ter o valor gerado de forma dinamicamente e outro tem que ser o Hardcoded

//agora um teste real. IMportamos o que vem do model calculadora
const calculadora = require("../models/calculadora.js");

test("somar 2 + 9 devia da 11", () => {
    const resultado = calculadora.somar(2, 9);
    expect(resultado).toBe(11)
})