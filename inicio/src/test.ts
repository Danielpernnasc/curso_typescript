// let ativo: boolean = false;
// let numero: number = 66.6;
// let palavra: string = "mundo";

// let naoDefinido: undefined = undefined;
// let naoPresente: null = null;

// let pentaCampeao : symbol = Symbol('star');
// let numeroGrande: bigint = 24n;


// let regexp: RegExp = new RegExp("b+c");

// let array: Array<number> = [1, 2, 3];

// let set: Set<number> = new Set([1, 2, 3]);

// class Fila<T> {
//     dado!: T;
//     metodo(): T {return this.dado; };
// }

// let fila: Fila<number> = new Fila();


// let array: number[] = [1, 2, 3];

// array = [1]
// array = [1, 2, 3, 4, 5]
// array = ["olá"]

// let tuple: [number, number] = [0, 0]

// tuple = [1, 1]
// tuple = [2, 6]

// tuple = [4]

// tuple = [1, 5, 3]


// type Ponto = { x: number, y: number }

// let centro: Ponto = {

//     x: 0,
//     y: 0

// }

// let unidade: Ponto = {
//     x: 0,
//     y: 0
// }


// type Ponto = { x: number, y: number }

// const ponto: Ponto = {x: 0, y: 0}

// ponto = { x: 1, y: 2}


// function soma(a: number, b: number): number {
//     return a + b;
// }

// function log(mensagem: string): void {
//     console.log("LOG", mensagem)
// }

// function somaValores(...values: number[]): number {
//     return values.reduce((prev, curr) => {
//         return prev + curr;
//     })
// }

// somaValores(1, 2)//3
// somaValores(1, 2, 3)//6

// type Add = (a: number, b: number) => number
// let add: Add

// add = function (a: number, b: number): number {
//     return a + b
// }


// type Usuario = { id: string }
// type Produto = { id: string }

// let usuario: Usuario = { id: "user-344"}
// let produto: Produto = { id: "product-034343" }

// usuario = produto
// produto = usuario


// type Ponto2D = {x: number, y: number}
// type Ponto3D = {x: number, y: number, z: number}

// let ponto2D: Ponto2D = {x: 0, y: 10 }
// let ponto3D: Ponto3D = { x:0, y: 10, z: 20 }


// class Animal {
//     nome: string

//     constructor(nome: string) {
//         this.nome = nome
//     }

//     move(distanciaEmMetros: number) {
//         console.log(`${this.nome}.se moveu ${distanciaEmMetros}m.`)
//     }
// }

// let gato = new Animal("Gato")
// gato.move(10)
// gato.nome = "Cachorro"

// class Passaro extends Animal {
//     voa(distanciaEmMetros: number) {
//         console.log(`${this.nome} voou ${distanciaEmMetros}m.`)
//     }
// }

// class Queue {
//     data = []
//     push(item) { this.data.push(item) }
//     pop() {return this.data.shift() }
// }

// // class NumberQueue extends Queue {
// //     push(item: number) {super.push(item)}
// //     pop(): number {return super.pop()}
// // }

// const queue = new Queue<number>()
// queue.push(123)
// queue.push(455555)

// console.log(queue.pop().toPrecision(1))
// console.log(queue.pop().toPrecision(1))


// let exemploAny: any
// let exemploUnknown: unknown


// //any
// exemploAny = 123
// exemploUnknown = "Olá"

// // unknown
// exemploAny = 123
// exemploUnknown = "Mundo!"

// // any
// exemploAny.permite.qualquer.coisa.imagine()
// let anySetBool: boolean = exemploAny

// //unknown

// if(typeof exemploUnknown == "string") {
//     exemploUnknown.trim()
// }

// if(typeof exemploUnknown == "boolean") {
//     let unknownSetBool: boolean = exemploUnknown
// }



// let algumaVariavel: any;

// if (typeof algumaVariavel == 'string') {
//     console.log(algumaVariavel.trim());
// }

// if (typeof algumaVariavel == 'number') {
//     console.log(algumaVariavel.toFixed(2));
// }
let hello: unknown;

if (typeof hello === "string") {
    const trimed = hello.trim();
}
