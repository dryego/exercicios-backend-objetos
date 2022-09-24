const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const joven = [];
const adulto = [];

// for (let i = 0; i < usuarios.length; i++) {
//     const busca = usuarios[i];
//     if (busca.idade < 18) {
//         joven.push(busca);
//     } else {
//         adulto.push(busca);
//     }

// }

for (let busca of usuarios) {
    if (busca.idade < 18 && busca.idade >= 0) {
        joven.push(busca);
    } else {
        adulto.push(busca);
    }
}

console.log(joven);
console.log(adulto);