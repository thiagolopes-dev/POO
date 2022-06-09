import { Personagem } from "./personagem";
import { Util } from "./util";


export class Guerreiro extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string) {
        super(nome);
        this._forca = +Util.randomizar(100, 1_000).toFixed(1);
        this._agilidade = +Util.randomizar(100, 1_000).toFixed(1);
    }
    status(): string {
        return (
            "Personagem: 🗡️ \n" +
            "\nNome: " +
            this._nome +
            ("\nEnergia:🔌 " + this._armadura.toFixed(1)) +
            ("\nAtaque: 🗡️ " + this._vidaMaxima.toFixed(1)) +
            ("\nDefesa: 🛡️ " + this._vidaAtual.toFixed(1)) +
            ("\nForça: 🛡️ " + this._forca.toFixed(1)) +
            ("\nAgilidade: 🛡️ " + this._agilidade.toFixed(1))
        );
    }
}