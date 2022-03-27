export class Personagem {
    constructor(
        private _nome: string,
        private energia: number,
        private ataque: number,
        private defesa: number,
        private vida: number

    ) { }

    public get nome() : string {
        return  this._nome;
    }

    
    public set nome(nome : string) {
        this._nome = nome;
    }
    
    
    // Toda vez que pensar em leitura de dados na classe - use parametros

    // Toda vez que pensar em imprimir na classe, use retorno

    public status(): string {
        return (
            "Guerreiro:  \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1))
        );
    }
    public treinarAtaque(): void {
        this.ataque += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public treinarDefesa(): void {
        this.defesa += this.randomizar(8);
        this.energia -= this.randomizar(7);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    }
    public descansar(horas: number): void {
        this.energia += horas * this.randomizar(5);
        if (this.energia > 100) {
            this.energia = 100;
        }

    }
    public batalhar(): number {
        let percaBatalha: number = this.randomizar(10);
        this.energia -= percaBatalha;
        this.isDead();
        return percaBatalha;

    }
    public isDead() {
        if (this.energia < 0) {
            console.log('Você morreu... 💀');
        }
        else { }
    }
    private randomizar(fator: number): number {
        return Math.random() * fator;
    }
    // isDead(): boolean {
    //    return this.energia < 0;
    // }

}
