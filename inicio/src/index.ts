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

const main = () => {
    setTimeout(() => {
        console.log("1 segundos");
        setTimeout(() => {
            console.log("2 segundos");
            setTimeout(() => {
                console.log("3 segundos");
            }, 1000);
        }, 1000);
    }, 1000);
}; 


main();

