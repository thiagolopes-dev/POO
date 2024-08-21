export class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public ataque: number,
        public defesa: number,
        public vida: number

    ) { }


    // Toda vez que pensar em leitura de dados na classe - use parametros

    // Toda vez que pensar em imprimir na classe, use retorno

    status(): string {
        return (
            "Guerreiro:  \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }
    treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    descansar(horas: number): void {
        this.energia += horas * (Math.random() * 10);
        if (this.energia > 100) {
            this.energia = 100;
        }
        
    }
    batalhar(): number {
        let percaBatalha: number = Math.random() * 100;
        this.energia -= percaBatalha;
        this.isDead();
        return percaBatalha;
        
    }
    isDead(){
       if(this.energia < 0){
           console.log('Você morreu... 💀');
       }
       else {}
     }

}
