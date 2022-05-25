export class Controle {
    constructor(
        private _velocidadeatual: number,
        private _velocidadepermitida: number,

    ) { }

    public get velocidadeatual(): number {
        return this._velocidadeatual;
    }

    public set velocidadeatual(velocidadeatual: number) {
        this._velocidadeatual = velocidadeatual;
    }

    public get velocidadepermitida(): number {
        return this._velocidadepermitida;
    }

    public set velocidadepermitida(velocidadepermitida: number) {
        this._velocidadepermitida = velocidadepermitida;
    }

    permitida(valor: number): void {
        this.velocidadepermitida = valor;
      
    }

    turbo(): void {
        this.velocidadeatual += Math.random() * 20;
        console.log(this.velocidadeatual.toFixed(1));
        if (this.velocidadeatual > this.velocidadepermitida) {
            console.log('Levou uma multa!');
        }
    }

    printpermitida(): string {
        return (
            "Controle de Velocidade: \n" +
            ("\nVelocidade Permitida:" + this.velocidadepermitida.toFixed(1))
        );
    }
}