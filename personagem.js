export class personagem {
    constructor(nome, poder) {
        this.nome = nome;
        this.poder = poder;
    }
    getInfo() {
        return `${this.nome} - poder: ${this.poder}`
    }
}
