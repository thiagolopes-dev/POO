import { Controle } from "./controle";
import prompt from 'prompt-sync';

let control: Controle = new Controle(0,0,0);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. Lançar Notas                  ');
    console.log('9. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        case 1:
            let pnota: number = +teclado('Digite a nota 1º Bimestre: ');
            let snota: number = +teclado('Digite a nota 2º Bimestre: ');
            control.avaliacao(pnota, snota);
            break;
        default:
            break;
    }
}