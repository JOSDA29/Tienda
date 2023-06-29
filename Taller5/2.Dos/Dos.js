/*Dado el arreglo de cadenas de ADN [“AATGAAC”, “GTTTTTC”, “GGTAAA”, “CCCCATGGG”]
cree una función que reciba como argumento tal arreglo y muestre las cadenas de una sola base
(cadenas formadas solo de A, o solo de T, o solo de C o solo de G) que se pueden formar entre todos los
elementos del arreglo.*/
function desgloceADN(ADN) {
    let A = [];
    let T = [];
    let C = [];
    let G = [];

    for (let i = 0; i < ADN.length; i++) {
        for (let j = 0; j < ADN[i].length; j++) {
            if (ADN[i][j]== "A") {
                A+=("A")
            };
        
            if (ADN[i][j]== "T") {
                T+=("T")
            };
            if (ADN[i][j]== "C") {
                C+=("C")
            };
            if (ADN[i][j]== "G") {
                G+=("G")
            };
        }
    }
    console.log([A, T, C, G]);
    }
desgloceADN(["AATGAAC", "GTTTTTC", "GGTAAA", "CCCCATGGG"])
