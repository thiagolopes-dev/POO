import { Personagem } from "./personagem";
import { Util } from "./util";

export class Sacerdote extends Personagem {
    private _espirito: number;
    private _versatilidade: number;
    constructor(nome: string) {
        super(nome);
        this._espirito = +Util.randomizar(100, 1_000).toFixed(1);
        this._versatilidade = +Util.randomizar(100, 1_000).toFixed(1);
    }
    status(): string {
        return (
            "Personagem: 👲 \n" +
            "\nNome: " +
            this._nome +
            ("\nEnergia:🔌 " + this._armadura.toFixed(1)) +
            ("\nAtaque: 🗡️ " + this._vidaMaxima.toFixed(1)) +
            ("\nDefesa: 🛡️ " + this._vidaAtual.toFixed(1)) +
            ("\nEspirito: 🛡️ " + this._espirito.toFixed(1)) +
            ("\nVersatilidade: 🛡️ " + this._versatilidade.toFixed(1))
        );
    }
}