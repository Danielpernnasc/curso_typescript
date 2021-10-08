"use strict";
// function add (primeiro: any, segundo: any) {
//     return segundo + primeiro;
// }
// add(1, 2) // 3
// add("Olá", "Mundo"); // MundoOlá
class Ponto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    move(x, y) {
        this.x += x;
        this.y += y;
    }
}
const ponto = new Ponto(1, 2);
ponto.move(1, 3);
console.log(ponto.x, ponto.y);
const usuarios = [
    { nome: 'Daniel', idade: 22 },
    { nome: 'Leandro', idade: 28 }
];
function bucarIdadeUsuario(nome) {
    const usuario = usuarios.find(usuario => usuario.nome === nome);
    if (usuario == null) {
        throw new Error(`Usuario não encontrado: ${nome}`);
    }
    return usuario.idade;
}
