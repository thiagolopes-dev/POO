import { Util } from "./util";

export abstract class Personagem {
    protected _nome: string;
    protected _armadura: number;
    protected _vidaMaxima: number;
    protected _vidaAtual: number;

    constructor(nome: string) {
        this._nome = nome;
        this._armadura = Util.randomizar(100, 1_000);
        this._vidaMaxima = Util.randomizar(100, 1_000);
        this._vidaAtual = Util.randomizar(40, this._vidaMaxima);
    }

    // 1 forma a fazer não esquecer de tirar o abstract da classe
    // public atacar(): string {
    //     return 'Ataque genérico de Personagem';
    // }

    public abstract atacar(): string;

    // public abstract defender(atacante: Personagem): number;
}