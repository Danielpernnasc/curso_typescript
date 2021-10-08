// interface Ponto2D  {
//     x: number,
//     y: number
// };

// interface Ponto3D extends Ponto2D {
//     z: number
// };

// export const ponto: Ponto3D = {
//     x: 0,
//     y: 0,
//     z: 0

// };


// interface Pessoa {
//     email: string
// };

// interface Pessoa {
//     idade: number
// };

// export const pessoa: Pessoa = {
//     email: "pessoa@email.com",
//     idade: 3
// }


export interface InputProps {
    tipo: 'text' | 'email';
    valor: string,
    onChange: (novoValor: string) => void
};

export interface ChildrenInputProps extends InputProps {
     size: number
};