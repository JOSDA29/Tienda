/*Dados los arreglos arreglo1 = [“Pera”, “Cebolla”, “Limón”, “Pimentón”] arreglo2 = [“Manzana”,
“Banano”, “Lechuga”, “Perejíl”] Ordene los arreglos de tal manera que los elementos(frutas y
verduras) queden en el arreglo que les corresponde. Use ciclos.*/
let arregloUno = ["Pera", "Cebolla", "Limón", "Pimentón"];
let arregloDos= ["Manzana", "Banano", "Lechuga", "Perejíl"];
let frutas = [];
let verduras = [];
for (let i = 0; i < arregloUno.length; i++) {
    if (arregloUno[i] === "Pera" || arregloUno[i] === "Limón") {
        frutas.push(arregloUno[i])
    } else {
        verduras.push(arregloUno[i])
    }
}
for (let j = 0; j < arregloDos.length; j++) {
    if (arregloDos[j] === "Manzana" || arregloDos[j] === "Banano") {
        frutas.push(arregloDos[j])
    } else {
        verduras.push(arregloDos[j])
    }
}
console.log(frutas, verduras);