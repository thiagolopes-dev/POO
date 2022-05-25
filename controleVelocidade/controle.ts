export class Controle {
    constructor(
        public velocidade: number,
        public maxima: number

    ) { }

    velocidadeAtual(): string {
        return (
            ("Velocidade atual: " + this.velocidade.toFixed(1))
        );
    }
    turbo(): void {
        this.velocidade += Math.random() * 20;
        if(this.velocidade > 120){
            console.log('Levou uma multa!');
        }
    }
   }
