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

// for (let busca of participantes) {
//     if (busca.nome == "Carlos") {
//         console.log("galera o carlos esta na fila");
//         break
//     }
// }
for (let busca = -1; busca < participantes.length; busca++) {
    const posicaoNaFila = participantes[busca.nome];
    if (posicaoNaFila.nome == "Carlos") {
        console.log(`Galera... O Carlos está na posição ${busca}, corre lá!`)
        break;
    }

}
// let posicaoNaFila = 0
// for (let busca = 1; busca < participantes.length; busca++) {
//     if (busca.nome === "Carlos") {
//         posicaoNaFila += busca;
//         console.log(`Galera... O Carlos está na posição ${posicaoNaFila}, corre lá!`);
//     }
// }



// for (let i = 1; i < participantes.length; i++) {
//     const busca = carlos ? participantes[i];

//     console.log(`Galera... O ${busca = "carlos"} esta na posição ${i}`)

// }
