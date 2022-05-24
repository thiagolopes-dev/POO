import { Controle } from "./controle";
import prompt from 'prompt-sync';

let control: Controle = new Controle(0,120);
let teclado = prompt();
let option: number = 0;

while (option !== 9) {
    console.log('===========Controle Velocidade============');
    console.log('1. Velocidade Máxima Permitida   ');
    console.log('2. Ligar o Turbo                 ');
    console.log('9. Sair               👉         ');
    console.log('=================================+');

    option = +teclado('Ecolha uma ação: ');

    switch (option) {
        case 1:
            control.maxima = 120;
            console.log(control.maxima);
            break;
        case 2:
            control.turbo();
            console.log(control.velocidadeAtual());
            break;
        case 9:
            break;
        default:
            break;
    }
}