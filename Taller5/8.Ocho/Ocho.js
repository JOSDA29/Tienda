/*Cree una función que reciba un arreglo de números enteros y retorne el número mayor en él. Se le
debe pedir al usuario que introduzca el arreglo.*/
function Mayor(numero) {
    let mayornumero = numero[0]
    for (let i = 0; i < numero.length; i++) {
        if (numero[i] > mayornumero) {
            mayornumero = numero[i]
        }
        
    }
    return `El numero mayor de arreglo ${numero} es ${mayornumero}`;
}
let arregloOcho = prompt("Digite los numeros del arreglo separados por comas").split(",").map(Number);
let numeroMayor = Mayor(arregloOcho);
console.log(numeroMayor);

