import { Personagem } from "./personagem";
import prompt from 'prompt-sync';

let person: Personagem = new Personagem('Goku', 10, 20, 30, 40);
let teclado = prompt();
let option: number = 0;

while (option !== 9) {
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
        // ataque
        case 1:
            person.ataque += Math.random() * 7;
            person.energia -= Math.random() * 10;
            if (person.energia < 0) {
                console.log('Deu ruim, Você morreu!');
            }
            console.log('Guerreiro: ');
            console.log('Nome: ', person.nome);
            console.log('Energia: ', person.energia.toFixed(1));
            console.log('Ataque: ', person.ataque.toFixed(1));
            console.log('Defesa: ', person.defesa.toFixed(1));
            console.log('Vida: ', person.vida.toFixed(1));
            break;

        // defesa
        case 2:
            person.defesa += Math.random() * 5;
            person.energia -= Math.random() * 10;
            if (person.energia < 0) {
                console.log('Deu ruim, Você morreu!');
            } else {
                if (person.defesa > 100) {
                    person.defesa = 0;
                }
            }
            console.log('Guerreiro: ');
            console.log('Nome: ', person.nome);
            console.log('Energia: ', person.energia.toFixed(1));
            console.log('Ataque: ', person.ataque.toFixed(1));
            console.log('Defesa: ', person.defesa.toFixed(1));
            console.log('Vida: ', person.vida.toFixed(1));
            break;

        // descansar
        case 3:
            person.energia += Math.random() * 10;
            if(person.energia > 100) {
                person.energia = 100;
            }
            console.log('Guerreiro: ');
            console.log('Nome: ', person.nome);
            console.log('Energia: ', person.energia.toFixed(1));
            console.log('Ataque: ', person.ataque.toFixed(1));
            console.log('Defesa: ', person.defesa.toFixed(1));
            console.log('Vida: ', person.vida.toFixed(1));
            break;

        // batalha
        case 4:
            person.energia -= Math.random() * 100;
            if (person.energia < 0) {
                console.log('Deu ruim, Você morreu!');
            }
            console.log('Guerreiro: ');
            console.log('Nome: ', person.nome);
            console.log('Energia: ', person.energia.toFixed(1));
            console.log('Ataque: ', person.ataque.toFixed(1));
            console.log('Defesa: ', person.defesa.toFixed(1));
            console.log('Vida: ', person.vida.toFixed(1));
            break;

        case 8:
            console.log('Guerreiro: ');
            console.log('Nome: ', person.nome);
            console.log('Energia: ', person.energia.toFixed(1));
            console.log('Ataque: ', person.ataque.toFixed(1));
            console.log('Defesa: ', person.defesa.toFixed(1));
            console.log('Vida: ', person.vida.toFixed(1));
            break;

        default:
            break;
    }
}