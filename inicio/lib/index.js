"use strict";
// let message: string = "Olá Mundo";
// message += " novo!"
// console.log(message);
// class Animal {
//         protected nome: string
//         constructor(nome: string) {
//             this.nome = nome
//         }
//         public move(distanciaEmMetros: number): void {
//             console.log(`${this.nome} se moveu ${distanciaEmMetros}m.`)
//         }
//     }
// import * as util  from './utils';
// console.log(util.ehPalindromo('arara')); //true
// console.log(util.ehPalindromo('arari')); //false
var main = function () {
    setTimeout(function () {
        console.log("2 Segundos");
        setTimeout(function () {
            console.log("3 segundos");
        }, 1000);
    }, 1000);
};
main();
main();
