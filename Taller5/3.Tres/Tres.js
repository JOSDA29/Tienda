/*Cree una función que reciba un arreglo de números y retorne el número menor entre todos los elementos del arreglo.*/
function numeroMenor(menor) {
    let numeromenor = menor[0]
    for (let i = 0; i < menor.length; i++) {
        if (menor[i] < numeromenor) {
            numeromenor = menor[i];
        }
    }
console.log(`El numero menor del arreglo [${menor}] es ${numeromenor}`);
}
let numeros = prompt("Digite los numeros del arreglo separados por comas").split(",").map(Number)
numeroMenor(numeros)