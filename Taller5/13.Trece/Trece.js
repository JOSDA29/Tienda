/*Cree una función que reciba un arreglo de números enteros no repetidos y lo retorne ordenado de
menor a mayor según el valor de tales elementos. Se le debe pedir al usuario que introduzca el arreglo.*/
function ordenarArreglo(numeros) {
    
    for (let i = 0; i < numeros.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < numeros.length; j++) {
            if (numeros[j] < numeros[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let temp = numeros[i];
            numeros[i] = numeros[minIndex];
            numeros[minIndex] = temp;
        }
    }
    return numeros;
}
let numeros = prompt("Ingrese los números separados por comas:").split(",").map(Number);
let arregloOrdenado = ordenarArreglo(numeros);
console.log("Arreglo ordenado:", arregloOrdenado);