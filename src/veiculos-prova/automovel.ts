import { Util } from "./util";

export  class Automovel {
    protected _marca: string;
    protected _modelo: string;
    protected _combustivel: string;

    constructor(marca: string, modelo: string, combustivel: string) {
        this._marca = marca;
        this._modelo = modelo;
        this._combustivel = combustivel;
    }


    status(): string {
        return (
            "\nMarca: " +
            this._marca +
            ("\nModelo: " + this._modelo),
            ("\nCombustivel: " + this._combustivel)
        );
    }
}