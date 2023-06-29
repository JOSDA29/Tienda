/*Cree una función que reciba un arreglo de cadenas de ADN (las cadenas estarán formadas por las
letras A o C o T o G referirse a taller de ADN pasado) y muestre la cadena de ADN con mayor número
de Timina (T). Se le debe pedir al usuario que introduzca los arreglos.*/
function cantidadDeTimina(cadenas) {
    let mayorcadena = "";
    let mayorTimina = 0;

    for (let i = 0; i < cadenas.length; i++) {
        let cadenaActual = cadenas[i]
        let cantidadTimina = contarTimina(cadenaActual)
        
        if (cantidadTimina > mayorTimina) {
            mayorTimina = cantidadTimina
            mayorcadena = cadenaActual
        }
        return mayorcadena
    }

    function contarTimina(cadenaActual) {
        let cantidadTimina = 0
        for (let i = 0; i < cadenaActual.length; i++) {
            if (cadenaActual[i] == "T") {
                cantidadTimina++
            }
            
        }
        return cantidadTimina
    }
}
let cadenas = prompt("Digite las cadenas de ADN separadas por comas").split(",")
let verfificacion = cantidadDeTimina(cadenas)
console.log(`La cadena de ADN con mayor número de Timina (T) es ${verfificacion}`);