"use strict";
/**
 * @returns true se uma string é um políndromo
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ehPalindromo = void 0;
function ehPalindromo(str) {
    return str === str.split('').reverse().join('');
}
exports.ehPalindromo = ehPalindromo;
