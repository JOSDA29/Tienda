/*Dado los arreglos valle = [“Cali” , “Tulua”, “Cartago”, “Salento”] quindio = [“Cordoba”,
“Armenia”, “Palmira”, “Circasia”] Ordene los arreglos de tal manera que los elementos(ciudades)
queden en el arreglo que les corresponde. Use ciclos.*/
let valleDelCauca = ["Cali" , "Tulua", "Cartago", "Salento"];
let quindio = ["Cordoba","Armenia", "Palmira", "Circasia"];
for (let i = 0; i < valleDelCauca.length; i++) {
    if (valleDelCauca[i] == "Armenia" || valleDelCauca[i] == "Calarca" || valleDelCauca[i] == "Circacia" || valleDelCauca[i] == "Quimbaya" || valleDelCauca[i] == "Montenegro" || valleDelCauca[i] == "La Tebaida" || valleDelCauca[i] == "Pijao" || valleDelCauca[i] == "Salento" || valleDelCauca[i] == "Filandia" || valleDelCauca[i] == "Genova") {
        quindio.push(valleDelCauca[i])
        valleDelCauca.splice(i,1)
    }
};
for (let j = 0; j < quindio.length; j++) {
    if (quindio[j] == "Palmira") {
        valleDelCauca.push(quindio[j])
        quindio.splice(j,1)
    }
    if (quindio[j] == "Cordoba") {
        quindio.splice(0,1)
        console.log(`Cordaba es un departamento`);
    }
}
console.log(quindio, valleDelCauca);
    