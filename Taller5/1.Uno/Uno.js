let arreglo = [1,2,3,4,5,6];

//a). Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.
let contador = 0;
while (contador < arreglo.length) {
    console.log(arreglo[contador]);
    contador++
}

//b). Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla.
for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//c). Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
let copia = [];
for (let i = 0; i < arreglo.length; i++) {
    copia.push(arreglo[i]+1)
}
console.log(copia);

//d). Calcular el promedio de todos los elementos del arreglo
let suma = 0;
for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i]
}
let promedio = suma/arreglo.length;
console.log(`El promedio del array [${arreglo}] es ${promedio}`);