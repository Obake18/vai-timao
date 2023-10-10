// Classe Participante
class Participante {
    constructor(id, nome, numeroDaCamisa) {
        this.id = id;
        this.nome = nome;
        this.numeroDaCamisa = numeroDaCamisa;
    }
}

// Classe Professor que herda de Participante
class Professor extends Participante {
    constructor(id, nome, numeroDaCamisa, siape) {
        super(id, nome, numeroDaCamisa); // Chama o construtor da classe pai (Participante)
        this.siape = siape;
    }
}

// Classe Aluno que herda de Participante
class Aluno extends Participante {
    constructor(id, nome, numeroDaCamisa, matricula) {
        super(id, nome, numeroDaCamisa); // Chama o construtor da classe pai (Participante)
        this.matricula = matricula;
    }
}
// Classe Egresso que herda de Participante
class Egresso extends Participante {
    constructor(id, nome, numeroDaCamisa) {
        super(id, nome, numeroDaCamisa); // Chama o construtor da classe pai (Participante)
    }
}

// Classe Time
class Time {
    constructor(nome) {
        this.nome = nome;
        this.participantes = [];
    }

    /**
     * Adiciona um participante ao time, desde que não seja da classe Professor.
     * @param {Participante} participante - O participante a ser adicionado ao time.
     */
    adicionarParticipante(participante) {
        if (participante instanceof Professor) {
            console.error('Os times não podem ter professores.');
        } else {
            this.participantes.push(participante);
        }
    }
}
