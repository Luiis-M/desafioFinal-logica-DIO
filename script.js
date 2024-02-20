class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Gandalf", 1000, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Panda", 32, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar();
