
class Animal {
    constructor(nome) {
    if (this.constructor === Animal) {
        throw new Error("Não é possível instanciar diretamente a classe Animal.");
    }
    this.nome = nome;
    }

    emitirSom() {
    throw new Error("Método 'emitirSom' deve ser implementado pelas subclasses.");
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
    super(nome);
    this.raca = raca;
    }

    emitirSom() {
    return `${this.nome} diz: Au Au!`;
    }
}


class Gato extends Animal {
    constructor(nome, cor) {
    super(nome);
    this.cor = cor;
    }

    emitirSom() {
    return `${this.nome} diz: Miau!`;
    }
}

const cachorro1 = new Cachorro('Sereno', 'SRD');
const gato1 = new Gato('Safira', 'Preto');
const cachorro2 = new Cachorro('Buddy', 'Beagle');

console.log(cachorro1.emitirSom()); 
console.log(gato1.emitirSom());    
console.log(cachorro2.emitirSom()); 