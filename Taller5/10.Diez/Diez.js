/*Cree una función que reciba un arreglo de nombres de personas y muestre si la letra “c” se
encuentra entre tales nombres, en caso de que la letra “c” se encuentre, mostrar las veces que se
encuentra(considerando las apariciones entre todos los nombres) . Se le debe pedir al usuario que
introduzca el arreglo.*/
function cantidadC(nombres) {
    let cantidad = 0
    for (let i = 0; i < nombres.length; i++) {
        for (let j = 0; j < nombres[i].length; j++) {
           if (nombres[i][j].toLowerCase() == "c") {
                cantidad++
           };
            
        }
    }
    return `La cantidad de letras c en el arreglo es ${cantidad}`
}

let usuarios = prompt("Digite los nombres de los usuarios separadados por comas").split(",")
let verficacion = cantidadC(usuarios);
console.log(verficacion);
