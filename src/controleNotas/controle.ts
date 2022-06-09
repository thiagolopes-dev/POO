export class Controle {
    constructor(
        private _nota1: number,
        private _nota2: number,
        private _media: number

    ) { }

    public get pnota(): number {
        return this._nota1;
    }

    public set pnota(pnota: number) {
        this._nota2 = pnota;
    }

    public get snota(): number {
        return this._nota2;
    }

    public set snota(snota: number) {
        this._nota2 = snota;
    }


    public get media(): number {
        return this._media;
    }

    public set media(media: number) {
        this._media = media;
    }

    avaliacao(pnota: number, snota: number): void {
        this.media = (pnota + snota)/2; 
        if (this.media >= 60) {
            console.log('Aprovado');
            
        }
        if (this.media <= 59) {
            console.log('Reprovado');
        }
    }

}