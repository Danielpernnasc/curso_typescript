type functionOnchange = (novoValor: string) => void;

type inputValue = string;

type inputType = 'text' | 'email';

// type Ponto2D = {
//     x: number,
//     y: number
// }

// type Ponto3D = Ponto2D & {
//     z: number
// }

// export const ponto: Ponto3D = {
//     x: 0,
//     y: 0,
//     z: 0

// };

export type InputProps = {
    tipo: inputType,
    valor: inputValue,
    onChange: functionOnchange
};