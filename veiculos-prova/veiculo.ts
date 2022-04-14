import { Automovel } from "./automovel";
import { Util } from "./util";


export class Veiculo extends Automovel {
    private _autonomia: number;
    constructor(marca: string, modelo: string, combustivel: string) {
        super(marca, modelo, combustivel);
        this._modelo;
        this._combustivel;
        this._autonomia = +Util.randomizar(1, 20).toFixed(1);
    }
    status(): string {
        return (
            "\nMarca: " +
            this._marca +
            ("\nModelo: " + this._modelo) +
            ("\nCombustivel: " + this._combustivel) +
            ("\nAutonomia:  " + this._autonomia)
        );
    }
}