function randomNF(cantidad) {

    const figuras = ["♦", "♥", "♠", "♣"];
    const numeros = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K"
    ];

    let arreglo = [];
    for (let i = 0; i < cantidad; i++) {
        let nuevaCarta = {};
        let randomFigura = figuras[(Math.floor(Math.random() * figuras.length))];
        let randomNumero = numeros[(Math.floor(Math.random() * numeros.length))];
        nuevaCarta = {
            figura: randomFigura,
            numero: randomNumero
        }
        arreglo.push(nuevaCarta);
    }
    return arreglo;
    
}

console.log(randomNF(10));