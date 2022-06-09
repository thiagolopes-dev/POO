import { Personagem } from "./personagem";
import { Util } from "./util";

export class Sacerdote extends Personagem {
   
    private _espirito: number;
    private _versatilidade: number;
    constructor(nome: string) {
        super(nome);
        this._armadura = +Util.randomizar(100, 1_000).toFixed(1);
        this._vidaMaxima = +Util.randomizar(20, 1_000).toFixed(1);
        this._vidaAtual = +Util.randomizar(20, this._vidaMaxima).toFixed(1);
        this._espirito = +Util.randomizar(100, 1_000).toFixed(1);
        this._versatilidade = +Util.randomizar(100, 1_000).toFixed(1);
    }
    public atacar(): string {
        return 'Ataque do Sacerdote';
    }
    // public defender(atacante: Personagem): number {
    //     throw new Error("Method not implemented.");
    // }
}