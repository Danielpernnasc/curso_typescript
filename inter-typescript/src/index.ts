// const main = () => {
//     setTimeout(() => {
//         console.log("1 segundo");
//     }, 1000)
// };

// main();

// const type: string = "teste";
// console.log(type);


/*THIS*/
// class Pessoa {
//     private _idade: number 
//     constructor(_idade: number) {
//         this._idade = _idade
//     }
//     envelhecer = () => {
//         this._idade++;
//     }
//     idade() {
//         return this._idade
//     }
// }

// const person = new Pessoa(0);
// const envelhecer = person.envelhecer;
// envelhecer()
// console.log('idade', person.idade());

/*MODIFICADOR REANDOLY -21 */

// type Ponto = {
//    readonly x: number,
//    readonly y: number
// };

// const ponto: Ponto = {
//     x: 0,
//     y: 0
// }

//Não permite alteração
// ponto = {x: 1, y: 1}

// ponto.x = 1;
// ponto.y = 1;

// class Animal {
//     readonly nome: string;
//     constructor(nome: string) {
//         this.nome = nome;
//     }
// }

// const ovelha = new Animal('ovelha');
//não podendo alterar a string
/* não pode alterar */ //ovelha.nome = 'lobo';

/* 22 Union Types */
// function formatarLinhaComando(input: string | string[]) {
//     let linha = '';
//     if (typeof input === 'string') {
//         linha = input.trim();
//     } else {
//         linha = input.map((x: string) => x.trim()).join('');
//     }
//     return linha;
// }

// console.log(formatarLinhaComando('olá')); //olá
// console.log(formatarLinhaComando(['olá', 'mundo'])); //olá mundo
// console.log(formatarLinhaComando(2144)); //erro

/* 23 Types Literais */

// type pontoCardeal = 'Norte' | 'Sul' | 'Leste' | 'Oeste';
// let direcao: pontoCardeal

// direcao = 'Norte';

// function mover(distanciaMetros: number, direcao: pontoCardeal) {
//     console.log(`Movendo ${distanciaMetros} metros na direção ${direcao}`);
// }

// type valorDado = 1 | 2 | 3 | 4 | 5 | 6

// function rolarDado() {
//     return(Math.floor(Math.random() * 6 ) + 1) as valorDado;
// }

/* *o proprio vscode já mostra na condição o valor errado */
// if(rolarDado() === 7) {
//     throw new Error('Não é possivel');
// }

/* Redução de types - 24 */

// function padLeft(value: string, padding: number | string) {
//     if (typeof padding === 'number') {
//         return Array(padding + 1).join(' ') + value;
//     }
//     if (typeof padding === 'string') {
//         return padding + value;
//     }
//     throw new Error("Permitido apenas number ou string");
// }

// padLeft('Olá mundo', 4); // '----Olá mundo'
// padLeft('Olá mundo', ''); // ' Olá mundo'
// padLeft('Olá Mundo', '---'); // '----Olá mundo'

/*Class */
// class Gato {
//     miar() {
//         console.log("midado");
//     }
// }

// class Cachorro {
//     latir() {
//         console.log("latido");
//     }
// }

// type Animal = Gato | Cachorro;

// function comunicar(animal: Animal) {
//     if (animal instanceof Gato) {
//         animal.miar();
//     }
//     if (animal instanceof Cachorro) {
//         animal.latir();
//     }
// }

// type Quadrado = {
//     tamanho: number
// };

// type Retangulo = {
//     largura: number,
//     altura: number
// }

// type Forma = Quadrado | Retangulo;

// function area(forma: Forma) {
//     if('tamanho' in forma) {
//         return forma.tamanho * forma.tamanho;
//     }
//     if ('largura' in forma) {
//         return forma.largura * forma.altura
//     }
// }

// area({ tamanho: 2 }); // 4
// area({ largura: 2, altura: 3}); //6

/* os tres types literais */

//typeof (tipos primitivos)
//instanceof class
//in objetos

/* Unions discriminadas - 25 */

// type Circulo = {
//     tipo: 'circulo',
//     circuferencia: number
// };

// type Quadrado = {
//     tipo: 'quadrado',
//     tamanho: number
    
// };

// type Retangulo = {
//     tipo: 'retangulo',
//     largura: number,
//     altura: number
// }

// type Forma = Circulo |Quadrado | Retangulo;

// function area(forma: Forma) {
//     if (forma.tipo === 'circulo') {
//         return forma.circuferencia = forma.circuferencia
//     }
//     if (forma.tipo === 'quadrado') {
//         return forma.tamanho = forma.tamanho
//     }
//     if (forma.tipo === 'retangulo') {
//         return forma.largura * forma.altura
//     }
// }

/** Parâmetros Classes - 26 */

// class Pessoa {
//     constructor(
//         public nome: string,
//         public idade: number
//     ) {}

// }

// const pedro = new Pessoa('Pedro', 12000);
// console.log(pedro.nome, pedro.idade);

/**"Strict" do compilador - 27 */
//  file false.ts and true.ts


/**Null vs Undefined -  28 */

// console.log(null == null);  //true
// console.log(undefined == undefined); //true;

// console.log(undefined == null);

// let valor = undefined;

// console.log(valor == null); // true

// function decorate(value: string | null | undefined ) {
//     if (value == null) {
//         return value;
//     }
//     return `--${value.trim()} -- `;
// }

// console.log(decorate('Olá'));
// console.log(decorate('Olá mundo '));

// console.log(decorate(null));
// console.log(decorate(undefined));

/**Interseção de types - 29 */

// type Ponto2D = {
//     x: number,
//     y: number
// }

// type Ponto3D = Ponto2D & {
//     z: number
// }

// type Pessoa = {
//     nome: string
// }

// type Email = {
//     email: string
// }

// type Telefone = {
//     telefone: string
// }

// function contact(detalhes: Pessoa & Email & Telefone ) {
//     console.log(`Caro ${detalhes.nome}. Epero que tenha recebido nosso e-mai ${detalhes.email}. Nós te ligaremos no ${detalhes.telefone} em breve.`);
    
// }


// contact({
//     nome: 'João',
//     email: 'joaoalmeida@exemplo.com',
//     telefone: '(11) 96711-9004'
// })

/* Modificador Opcional */

// type Pessoa = {
//     nome: string,
//     email: string,
//     phone?: string
// }

// const bruno: Pessoa = {
//     nome: 'Bruno',
//     email: 'bruno@example.com',
//     phone: '999999999'
// }

// const alfredo: Pessoa = {
//     nome: 'Bruno',
//     email: 'alfredo@example.com',

// }


// class Novoponto {
//     x?: number | null;
//     y?: number;
// }

// const novoponto = new Novoponto();

// console.log(novoponto.x); //undefined

// novoponto.x = 0
// novoponto.y = undefined;
// novoponto.x = null


/*Operador Non-Null - 31**/

// type Pontodois = {
//     x: number,
//     y: number
// }

// let pontodois: Pontodois;

// function inicializar() {
//     pontodois = {x: 0, y: 0};
// }

// inicializar();
// console.log('Após inicializarmos', pontodois!.x, pontodois!.y);


// type Pessoa = {
//     nome: string,
//     email?: string | null | undefined
// };

// function enviarEmail(email: string) {
//     console.log('Email enviado para: ', email)
// }

// function validarEmail(pessoa: Pessoa) {
//     if (pessoa.email == null) throw new Error(`Pessoa ${pessoa.nome} não possui email`)
// }

// function contato(pessoa: Pessoa) {
//     validarEmail(pessoa);
//     enviarEmail(pessoa.email!);
// }


/**Interfaces - 32 */

// files types.ts e interfaces.ts

/**Merge Inter - 33*/

// files interface.ts


/** Types vs Interface - 34 */

// files interfaces.ts e types.ts

/** Tag "implements" - 35 */
// type Animal = {
//     nome: string,
//     som(): string
// };

// function log(animal: Animal) {
//     console.log(`Animal ${animal.nome}: ${animal.som()}`);
// }   

// class Gato implements Animal {
//     constructor(public nome: string) {}
//     som() { return 'miau'; };

// }

// class Cachorro implements Animal {
//     constructor(public nome: string) { }
//     som() { return 'auau'; }
// }

// log(new Gato('miau'));
// log(new Cachorro('auau'));


/** Type Assertion de forma definitiva - 36 */

// let dado! : number;

// function rolarDado(){
//     dado = (Math.floor(Math.random() * 6)+ 1);
// }

// rolarDado();

// console.log('Valor do dado', dado);

// class Pontotres {
//     x!: number;
//     y!: number;
//     constructor () {
//         this.moverAleatorio();
//     }

//     moverAleatorio() {
//         this.x = Math.random();
//         this.y = Math.random();
//     }
// }


/**Type guards - 37 */

// type Quadrado = {
//     size: number
// };

// type Retangulo = {
//     width: number,
//     height: number
// }

// type Forma = Quadrado | Retangulo;

// function ehQuadrado(forma: Forma): forma is Quadrado{
//     return "size" in forma;
// }
// function ehRetangulo(forma: Forma): forma is Retangulo{
//     return "size" in forma;
// }

// function area(forma: Forma) {
//     if (ehQuadrado(forma)) {
//         return forma.size = forma.size;
//     }

//     if (ehRetangulo(forma)) {
//         return forma.width = forma.height;
//     }
// }

/** Assertion Function - 38 */

// type Pessoa = {
//     nome: string,
//     dataNascimento?: Date
// }

// function assert(condicao: unknown, message: string): asserts condicao {
//     if (!condicao) throw new Error(message);
// }

// const pessoa = carregaPessoa();

// assert(pessoa != null, "Não é possivel carregar pessoa");
// console.log("Nome:", pessoa.nome);


// function carregaPessoa(): any {
//     throw new Error("Function not implemented.");
// }

/** Sobrecarga(overloading) de funções - 39 */

// function reverse(string: string): string;
// function reverse(string: string[]): string[];

// function reverse(stringOuStringArray: string | string[]){
//     if (typeof stringOuStringArray == 'string') {
//         return stringOuStringArray.split('').reverse().join('');
//     } else {
//         return stringOuStringArray.slice().reverse();
//     }
// }

// const ola = reverse('ola') // 'olá
// const o_l_a = reverse(['o', 'l', 'a']); // ['o', 'l', 'a']

/**Types com corpo em bloco (block  body) - 40 */

// type Add = {
//     (a: number, b: number): number;
//     (a: number, b: number, c: number): number;
//     opcional?: string
// }

// const add: Add = (a: number, b: number, c?: number) => {
//     return a + b + (c ? c : 0);
// }

// add.opcional = "opcional";
// add(2, 2, 1);
// add(2, 2);

/**Classe abstrada - 41*/
// abstract class Comando {
//     abstract linhaComando(): string

//     executar() {
//         console.log("Executando:", this.linhaComando());
//     }
// }

// class GitResetComando extends Comando {
//     linhaComando() {
//         return "git reset --hard";
//     }
// }

// class GitFetchComando extends Comando {
//     linhaComando() {
//         return "git fetch --all";
//     }
// }

// new GitResetComando().executar();
// new GitFetchComando().executar();

/**Reandoly em Arrays e Tuplas */

// function ordenarDescrentes(input: readonly number[]): number[] {
//     return input.slice().sort().reverse();
    
// }

// const numeros = [1, 2, 3, 4, 5];
// const resultado = ordenarDescrentes(numeros);

// console.log(resultado); //[5, 4, 3, 2, 1]
// console.log(numeros); //[5, 4, 3, 2, 1]

/**Double Assertion - 43 */

// type Ponto2D = { x: number, y: number};
// type Ponto3D = { x: number, y: number, z: number};
// type Pessoa = { nome: string, email: string};

// let ponto2: Ponto2D = { x: 0, y: 0};
// let ponto3: Ponto3D = { x: 10, y: 10, z: 10};
// let pessoa: Pessoa = { nome: "João", email: "joao@exemplo.com"};

// ponto2 = ponto3;
// //ponto3 = ponto2; //Erro
// ponto3 = ponto2 as Ponto3D // Ok: Confio em você

// //pessoa = ponto3; //Erro
// //ponto3 = pessoa; //Erro
// //ponto3 = pessoa as Ponto3D; // Erro: Não confio o suficiente
// ponto3 = pessoa as unknown as Ponto3D; //Ok: Confio em você

/**const Assertion - 44 */
// const filme = {
//     titulo: "titanic" as const,
//     genero: ["drama", "acao"]
// };

// filme = {
//     titulo: "harry potter",
//     genero: ['fantasia', 'aventura']
// }

// filme.titulo = "harry potter";
// filme.genero.unshift("ficção");

/**Parâmetro this */
// function dobrar(this:{value: number} ) {
//     this.value = this.value * 2;
// }

// const valido = {
//     value: 10,
//     dobrar
// };

// valido.dobrar();

// console.log(valido.value); // 20

// const invalido = {
//     value: 10,
//     dobrar,
// }

// invalido.dobrar(); //Erro

/**Restrição de Genéricos */

type camposNome = { primeiroNome: string, ultimoNome: string };

function addNomeCompleto<T extends camposNome>(obj: T): T &  { nomeCompleto: string } {
    return {
        ...obj,
        nomeCompleto: `${obj.primeiroNome} ${obj.ultimoNome}`
    }
}


const joao = addNomeCompleto({
    email: "joao@exemplo.com",
    primeiroNome: "João",
    ultimoNome: "Vieira"
});

console.log(joao.email)// joao@exemplor.com
console.log(joao.nomeCompleto); // João Vieira