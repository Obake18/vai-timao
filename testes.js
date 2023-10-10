// Crie 2 objetos da classe Professor
const professor1 = new Professor(1, 'Professor 1', 10, 'SIAPE-1');
const professor2 = new Professor(2, 'Professor 2', 11, 'SIAPE-2');

// Crie 4 objetos da classe Aluno
const aluno1 = new Aluno(3, 'Aluno 1', 20, 'Matrícula-1');
const aluno2 = new Aluno(4, 'Aluno 2', 21, 'Matrícula-2');
const aluno3 = new Aluno(5, 'Aluno 3', 22, 'Matrícula-3');
const aluno4 = new Aluno(6, 'Aluno 4', 23, 'Matrícula-4');

// Crie 4 objetos da classe Egresso
const egresso1 = new Egresso(7, 'Egresso 1', 30);
const egresso2 = new Egresso(8, 'Egresso 2', 31);
const egresso3 = new Egresso(9, 'Egresso 3', 32);
const egresso4 = new Egresso(10, 'Egresso 4', 33);

// Crie 1 objeto da classe Time
const meuTime = new Time('Time A');

// Adicione os objetos da classe Professor ao objeto da classe Time
meuTime.adicionarParticipante(professor1);
meuTime.adicionarParticipante(professor2);

// Adicione os objetos da classe Aluno ao objeto da classe Time
meuTime.adicionarParticipante(aluno1);
meuTime.adicionarParticipante(aluno2);
meuTime.adicionarParticipante(aluno3);
meuTime.adicionarParticipante(aluno4);

// Imprima no console o objeto da Classe Time
console.log(meuTime);
