import { Mago } from "./mago";
import { Personagem } from "./personagem";
import { Sacerdote } from "./sacerdote";

let mago: Personagem = new  Mago("Gandalf Mago");
let sacerdote: Personagem = new Sacerdote("Bilbo Sacerdote");

const personagens: Personagem[] = [];
personagens.push(mago);
personagens.push(sacerdote);

personagens.forEach((p) =>
//   console.log(p instanceof Mago ? p.atacar() : (p as Sacerdote).atacar())
  console.log(p.atacar())
);
