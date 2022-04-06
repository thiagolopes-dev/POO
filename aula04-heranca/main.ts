import { Guerreiro } from "./guerreiro";
import { Mago } from "./mago";
import { Personagem } from "./personagem";
import { Sacerdote } from "./sacerdote";

let mago: Personagem = new Mago("Gandalf Mago");
let guerreiro: Personagem = new Guerreiro("Aragorn Guerreiro");
let sacerdote: Personagem = new Sacerdote("Bilbo Sacerdote");
let personagem: Personagem = new Personagem("Personagem");

console.log(mago.status());
console.log('=============================');
console.log(sacerdote.status());
console.log('=============================');
console.log(guerreiro.status());
console.log('=============================');
console.log(sacerdote.status());
