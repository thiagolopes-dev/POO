import { Personagem } from "./personagem";
import prompt from 'prompt-sync';

let person: Personagem = new Personagem('Goku', 10, 20, 30, 40);
let teclado = prompt();
let option: number = 0;

while (option !== 9 || person.isDead() ) {
    console.log('===========Personagem============');
    console.log('1. Treinar Ataque                ');
    console.log('2. Treinar Defesa                ');
    console.log('3. Descansar                     ');
    console.log('4. Entrar em Batalha             ');
    console.log('8. Imprimir atributo             ');
    console.log('9. Sair                          ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação: ');

    switch (option) {
        case 1:
            person.treinarAtaque();
           console.log(person.status());
            break;
        case 2:
            person.treinarDefesa();
           console.log(person.status());
            break;
        case 3:
            let horas: number = +teclado('Digite o número de horas: ');
            person.descansar();
           console.log(person.status());
            break;
        case 4:
            let rest: number = person.batalhar();
            console.log(`Esta batalha custou ${rest} de energia`);
            console.log(person.status());
            break;
        case 8:
           console.log(person.status());
            break;
        default:
            break;
    }
}
console.log('Você morreu !');