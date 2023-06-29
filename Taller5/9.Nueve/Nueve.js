/*Cree una función que reciba dos arreglos de números enteros y muestre cual arreglo tiene un
promedio mayor de sus elementos. Se le debe pedir al usuario que introduzca los arreglos.*/
function promedioMayor(arregloUno, arregloDos) {
    let sumaUno = 0
    for (let i = 0; i < arregloUno.length; i++) {
        sumaUno += arregloUno[i]
    }
    let promedioUno = sumaUno/arregloUno.length

    let sumaDos = 0
    for (let j = 0; j < arregloDos.length; j++) {
        sumaDos += arregloDos[j]
    }
    let promedioDos = sumaDos/arregloDos.length

    console.log(`El Promedio del arregloUno ${arregloUno} es ${promedioUno} \n El Promedio del arregloDos ${arregloDos} es ${promedioDos}`);
    if (promedioUno > promedioDos) {
        console.log(`Por ende el promedio mayor pertenece al arregloUno`);
    } else {
        console.log(`Por ende el promedio mayor pertenece al arregloDos`);
    }
}
let Uno = prompt("Digite los numeros del primer arreglo separados por comas").split(",").map(Number);
let Dos = prompt("Digite los numeros del segundo arreglo separados por comas").split(",").map(Number);;
promedioMayor(Uno,Dos)