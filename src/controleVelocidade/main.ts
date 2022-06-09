import { Controle } from "./controle";
import prompt from 'prompt-sync';

let control: Controle = new Controle(0, 10);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. Velocidade Permitida           ');
    console.log('2. Turbo                          ');
    console.log('9. Sair               👉         ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        case 1:
            let valor: number = +teclado('Digite a velocidade permitida: ');
            control.permitida(valor);
            console.log(control.printpermitida());
            break;
        case 2:
            control.turbo();
            break;
        default:
            break;
    }
}