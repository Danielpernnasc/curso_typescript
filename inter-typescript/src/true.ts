// function add (primeiro: any, segundo: any) {
//     return segundo + primeiro;
// }

// add(1, 2) // 3
// add("Olá", "Mundo"); // MundoOlá

class Ponto {
    x: number;
    y: number;
    
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    move(x: number, y: number) {
        this.x += x;
        this.y += y;
    }
}

const ponto = new Ponto(1, 2);

ponto.move(1, 3);
console.log(ponto.x, ponto.y);


type Usuario = {
    nome: string,
    idade: number
}

const usuarios: Usuario[] = [
    { nome: 'Daniel', idade: 22},
    { nome: 'Leandro', idade: 28}
];

function bucarIdadeUsuario(nome: string): number {
    const usuario = usuarios.find(
        usuario => usuario.nome === nome
    );
    if (usuario == null) {
        throw new Error(`Usuario não encontrado: ${nome}`);
    }
    return usuario.idade
}
