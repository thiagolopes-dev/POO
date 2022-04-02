import { Guerreiro } from "./guerreiro";
import { Mago } from "./mago";
import { Personagem } from "./personagem";
import { Sacerdote } from "./sacerdote";

let mago: Personagem = new Mago("Gandalf Mago");
let guerreiro: Personagem = new Guerreiro("Aragorn Guerreiro");
let sacerdote: Personagem = new Sacerdote("Bilbo Sacerdote");

console.log("Mago 🧙", mago);
console.log("Guerreiro 🗡️", guerreiro);
console.log("Sacerdote 👲", sacerdote);