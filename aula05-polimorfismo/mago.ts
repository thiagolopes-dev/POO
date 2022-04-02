import { Personagem } from "./personagem";
import { Util } from "./util";


export class Mago extends Personagem {
    private _intelecto: number;
    private _velocidade: number;
    constructor(nome: string) {
        super(nome);
        this._armadura = +Util.randomizar(100, 1_000).toFixed(1);
        this._vidaMaxima = +Util.randomizar(200, 1_000).toFixed(1);
        this._vidaAtual = +Util.randomizar(40, this._vidaMaxima).toFixed(1);
        this._intelecto = +Util.randomizar(100, 1_000).toFixed(1);
        this._velocidade = +Util.randomizar(10, 2_000).toFixed(1);
    }
    public atacar(): string {
        return 'Ataque do Mago';
    }
}