export class Personagem {
    constructor(
        private _nome: string,
        private _energia: number,
        private _ataque: number,
        private _defesa: number,
        private _vida: number

    ) { }

    public get nome(): string {
        return this._nome;
    }

    public set nome(nome: string) {
        this._nome = nome;
    }

    public get energia(): number {
        return this._energia;
    }

    public set energia(energia: number) {
        this._energia = energia;
    }

    public get ataque(): number {
        return this._ataque;
    }

    public set ataque(ataque: number) {
        this._ataque = ataque;
    }

    public get defesa(): number {
        return this._defesa;
    }

    public set defesa(defesa: number) {
        this._defesa = defesa;
    }

    status(): string {
        return (
            "Guerreiro: 🧙 \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia:🔌 " + this.energia.toFixed(1)) +
            ("\nAtaque: 🗡️ " + this.ataque.toFixed(1)) +
            ("\nDefesa: 🛡️" + this.defesa.toFixed(1))
        );
    }
    treinarAtaque(): void {
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 6;
        if (this.defesa >= 100) {
            this.aviso();
        }
        this.isDead();
    }
    treinarDefesa(): void {
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 6;
        if (this.defesa > 100) {
            this.aviso();
        }
        this.isDead();
    }
    descansar(horas: number): void {
        this.energia += horas * (Math.random() * 8);
        if (this.energia >= 100) {
            this.energia = 100;
            this.aviso();
        }
        this.isDead();
    }
    batalhar(): number {
        let percaBatalha: number = Math.random() * 10;
        this.energia -= percaBatalha;
        this.isDead();
        return percaBatalha;

    }
    isDead() {
        if (this.energia <= 0) {
            this.energia = 0;
            console.log('Você morreu 💀');
        }
        else { }
    }
    aviso() {
        console.log('Você excedeu o limite');
    }
}