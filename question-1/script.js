/**
 * On this module you should write your answer to question #1.
 * This file would be executed with the following command (N=100):
 * $ node scritp.js 100
 */

const args = process.argv.slice(-1);            //Ingresamos la variable por linea de comandos ej: node script.js "numero"

// var valor = args[0];                         //Se deja esta variable en caso de querer ingresar los datos desde el codigo
console.log(valor);
if(args < 3){
    console.log("Las formas distintas de subir la escalera es: "+args);

}
else{
    let subirUno = 1;                           //Definimos la variable de 1 paso
    let subirDos = 2;                           //Definimos la variable de 2 paso

    for(let i = 2; i < args; i++){
        const suma = subirUno + subirDos;               //Sumamos los valores los valores anteriores
        subirUno = subirDos;                            
        subirDos = suma;
    }
    console.log("Las formas distintas de subir la escalera es: "+subirDos);
}
//console.log(`Running question #1 with args ${args}`)              
