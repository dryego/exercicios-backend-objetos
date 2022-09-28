const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Carlos" }, //Beatriz
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

for (let busca = -1; busca < participantes.length; busca++) {
    const posicaoNaFila = participantes[busca];
    if (posicaoNaFila.nome == "Carlos") {
        console.log(`Galera... O Carlos está na posição ${busca}, corre lá!`)
        break;
    }

}