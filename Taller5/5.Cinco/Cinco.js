/*Cree una función que pida a n número de usuarios su nombre y edad y retorne un arreglo con los
nombres de los usuarios que son mayores de edad, luego muestre cuantos usuarios hay mayores de
edad.*/
function edadMayor(cantidad) {
    let usuariosMayores = [];
    for (let i = 0; i < cantidad; i++) {
        let nombre= prompt("Digite el nombre del usuario");
        let edad = parseInt(prompt("Digite la edad el usuario"))
        if (edad>=18) {
            usuariosMayores.push(nombre)
        }
    }
    console.log(`Los usuarios mayores de edad son ${usuariosMayores}`);
}
let canti = parseInt(prompt("Digite la cantidad de usuarios ha ingresar"))
edadMayor(canti)