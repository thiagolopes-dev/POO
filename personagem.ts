//Forma 1 ----------------------------------------------------
// class Personagem {
//     nome: string = '';
//     energia = 0;
//     ataque = 0;
//     vida = 0;
//     defesa = 0;

// let goku: Personagem;
// goku = new Personagem();
// goku.nome = 'Goku';
// goku.energia = 100;
// goku.ataque = 90;
// goku.vida = 80;
// goku.defesa = 70;
// console.log("Personagem >>>" , goku);


//Forma 2 ----------------------------------------------------
// class Personagem {
//     nome: string = '';
//     energia = 10;
//     ataque = 10;
//     vida = 80;
//     defesa = 20;

// constructor inicializa o objeto com valor
//     constructor() {
//         this.nome = 'Goku 1';
//         this.energia = 50;
//         this.ataque = 20;
//     }
// }

// let goku: Personagem;
// goku = new Personagem();
// console.log("Personagem >>>" , goku);


//Forma 3 ----------------------------------------------------
// class Personagem {
//     nome: string = '';
//     energia = 10;
//     ataque = 10;
//     vida = 80;
//     defesa = 20;
//     // obriga ser passado na instância o atributo nome
//     constructor(nome: string) {
//         this.nome = nome;
//         this.energia = 50;
//         this.ataque = 20;
//     }
// }

// let goku: Personagem;
// goku = new Personagem('Goku 2');
// console.log("Personagem >>>" , goku);

//Forma 4 ----------------------------------------------------
// class Personagem {
//     constructor() {
// public nome: string,
// public energia: number,
// public ataque: number,
// public vida: number,
// public defesa: number
//     }
// }
// goku = new Personagem('Goku 2', 90,80,70,60,50);
// console.log("Personagem >>>" , goku);

//Forma 5 ----------------------------------------------------
import prompt from 'prompt-sync';

class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public ataque: number,
        public vida: number,
        public defesa: number

    ) { }
}
let goku: Personagem = new Personagem('Goku', 10, 20, 30, 40);
let teclado = prompt();
let option: number = 0;

while (option !== 9) {
    console.log('===========Personagem============');
    console.log('1. Treinar Ataque                ');
    console.log('2. Treinar Defesa                ');
    console.log('3. Imprimir Atributos            ');
    console.log('9. Sair                          ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação: ');

    switch (option) {
        case 1:
            goku.ataque += 2;
            break;

        case 2:
            goku.defesa
            break;

        case 3:
            console.log('Personagem >>>', goku);
            break;

        default:
            break;
    }
}


