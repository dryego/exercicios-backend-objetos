const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]
for (let busca of usuarios) {
    if (busca.pets.length === 0) {
        console.log(`Sou ${busca.nome} e não tenho pet.`);
    } else if (busca.pets.length === 1) {
        console.log(`Sou ${busca.nome} e tenho 1 pet.`);
    } else {
        console.log(`Sou ${busca.nome} e tenho ${busca.pets.length} Pets.`)
    }
}