"use strict";
// const main = () => {
//     setTimeout(() => {
//         console.log("1 segundo");
//     }, 1000)
// };
function addNomeCompleto(obj) {
    return Object.assign(Object.assign({}, obj), { nomeCompleto: `${obj.primeiroNome} ${obj.ultimoNome}` });
}
const joao = addNomeCompleto({
    email: "joao@exemplo.com",
    primeiroNome: "João",
    ultimoNome: "Vieira"
});
console.log(joao.email); // joao@exemplor.com
console.log(joao.nomeCompleto); // João Vieira
