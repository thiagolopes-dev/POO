import { Veiculo } from "./veiculo";
import { Automovel } from "./automovel";


let v1: Automovel = new  Veiculo('Toyota', 'Corolla', 'Flex');
let v2: Automovel = new  Veiculo('Honda', 'Civic', 'Flex');

console.log(v1.status());
console.log(v2.status());