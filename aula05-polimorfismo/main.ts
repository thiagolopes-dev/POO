import { Mago } from "./mago";
import { Personagem } from "./personagem";
import { Sacerdote } from "./sacerdote";

let mago: Personagem = new  Mago("Gandalf Mago");
let sacerdote: Personagem = new Sacerdote("Bilbo Sacerdote");
// let personagem: Personagem = new Personagem('Elfo');

// console.log("Mago 🧙", mago);
// console.log("Sacerdote 👲", sacerdote);

const personagens: Personagem[] = [];
personagens.push(mago);
personagens.push(sacerdote);
// personagens.push(personagem);

personagens.forEach((p) =>
//   console.log(p instanceof Mago ? p.atacar() : (p as Sacerdote).atacar())
  console.log(p.atacar())
);
