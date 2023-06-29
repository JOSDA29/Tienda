/*Cree una función que reciba un arreglo de letras no repetidas y lo retorne ordenado alfabéticamente.
Se le debe pedir al usuario que introduzca el arreglo.*/
function ordenarArreglo(letras) {
    for (let i = 0; i < letras.length - 1; i++) {
        for (let j = i + 1; j < letras.length; j++) {
            if (letras[j] < letras[i]) {
                let temp = letras[i];
                letras[i] = letras[j];
                letras[j] = temp;
            }
        }
    }
    return letras;
}
let letras = prompt("Ingrese las letras separadas por comas:").split(",");
let arregloOrdenado = ordenarArreglo(letras);
console.log("Arreglo ordenado:", arregloOrdenado);