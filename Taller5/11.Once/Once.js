/*Cree una función que reciba un arreglo de números enteros positivos y muestre cuantos números
impares posee el arreglo. Se le debe pedir al usuario que introduzca el arreglo.*/
function numerosImpares(numeros) {
    cantidadImpares = 0
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i]%2 != 0 ) {
            cantidadImpares++
        }
    }
    return `Hay un total de ${cantidadImpares} numeros impares en el arreglo ${numeros}`;
}
let numeros = prompt("Digite los numeros del arreglo separado por comas").split(",").map(Number)
let verificacion = numerosImpares(numeros)
console.log(verificacion);