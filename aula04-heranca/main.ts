import { Guerreiro } from "./guerreiro";
import { Mago } from "./mago";
import { Personagem } from "./personagem";
import { Sacedorte } from "./sacedorte";

let mago: Personagem = new Mago("Gandalf Mago");
let guerreiro: Personagem = new Guerreiro("Aragorn Guerreiro");
let sacedorte: Personagem = new Sacedorte("Bilbo Sacedorte");

console.log("Mago 🧙", mago);
console.log("Guerreiro 🗡️", guerreiro);
console.log("Sacedorte 👲", sacedorte);