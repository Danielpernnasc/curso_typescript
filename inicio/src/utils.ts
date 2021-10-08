/**
 * @returns true se uma string é um políndromo
 */

export function ehPalindromo(str: string): boolean {
    return str === str.split('').reverse().join('');
}

