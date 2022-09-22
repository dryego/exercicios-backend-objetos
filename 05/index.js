const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}
const aula1 = {
    Identificador: 01,
    nomeDaAula: 'Introdução a programação'
}
curso.aulas.push(aula1);

const aula2 = {
    Identificador: 02,
    nomeDaAula: 'Variáveis'
}
curso.aulas.push(aula2);

const aula3 = {
    Identificador: 03,
    nomeDaAula: 'Condicionais'
}
curso.aulas.push(aula3);

const aula4 = {
    Identificador: 04,
    nomeDaAula: 'Array'
}
curso.aulas.push(aula4);


console.log(curso);