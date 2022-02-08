/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);                //Linea que toma los argumentos entregados por consola
var fs = require('fs')                              //Solicitamos la libreria para leer y escribir archivos ademas tomamos el nombre del documento entregado en los argumentos
, archivo = args[0];

const data = fs.readFileSync(archivo,'UTF-8');              //Leemos los datos del archivo

let writeStream = fs.createWriteStream("output.csv");           //Creamos el archivo para guardar al final del programa los datos
writeStream.write("productId,clicks,impressions,ctr\n");        //Llenamos la primera fila con los nombres de cada columna en el nuevo documento
const lines = data.split("\r\n");                               //Separamos los datos por fila

lines.shift();                                                  //Eliminamos la primera fila del documento de entrada

var id_usuario = [];                                            //Array para guardar los datos correspondientes al user
var entidad_id = [];                                            //Array para guardar los datos correspondientes al entidadId
var tipo = [];                                                  //Array para guardar los datos correspondientes al entiteType
var evento = [];                                                     //Array para guardar los datos correspondientes al eventType

var lineaS;                                                     //Array para separar las lineas por columna

for(let i = 0; i<lines.length; i++){
    lineaS = lines[i].split(",");                               //Separamos los datos datos y fijamos el delimitador por ",", los datos quedaran de la siguiente forma
    id_usuario[i] = lineaS[0];                                  //Los datos de user siempre estaran en la posicion 0
    entidad_id[i] = lineaS[1];                                  //Los datos de entiteId siempre estaran en la posicion 1
    tipo[i] = lineaS[2];                                        //Los datos de entiteType siempre estaran en la posicion 2
    evento[i] = lineaS[3];                                           //Los datos de eventType siempre estaran en la posicion 3
}

var contadorClick;                                              //Definimos un contador para el evento de tipo click
var contadorImpresiones;                                        //Definimos un contador para el evento de tipo impression

var datos = [];                                                 //Iniciamos un array temporal para guardar las cadenas
for(let i = 0; i<entidad_id.length; i++){
    contadorClick = 0;                                          //Inicializamos los contadores cosa que cada vez que se reinicia el ciclo estos siempre esten en cero
    contadorImpresiones = 0;
    for(let j = 0; j<evento.length; j++){
        if(entidad_id[i] == entidad_id[j] && evento[j] == "click"){         //Establecemos la condicion si entidadId es igual con el index i y con j ademas de que el evento sea
            contadorClick += 1;                                             //click sumamos 1
        }
        else if(entidad_id[i] == entidad_id[j] && evento[j] == "impression"){       //Establecemos la condicion si entidadId es igual con el index i y j ademas de que el evento sea
            contadorImpresiones += 1;                                               //impression sumamos 1
        }
    }
    if(contadorImpresiones == 0){                                           //Para que la posterior division no se indetermine si contador impresiones es 0 establecemos este valor
        contadorImpresiones = 1;                                            //en 1
    }

    let ctr = contadorClick/contadorImpresiones;                //La division para obtener ctr click / impression
    let cadena = entidad_id[i]+","+contadorClick+","+contadorImpresiones+","+ctr+"\n";          //Creamos la cadena

    datos[i] = cadena;                  //Agregamos la cadena al array temporal
    
    const nuevo = new Set(datos);               //Limpiamos el array de datos duplicados
    var resultado = [...nuevo];                 //Enviamos los datos limpios a un nuevo array
    
}

resultado.forEach(element => {
    writeStream.write(element);             //Escribimos los datos en el documento
});
// console.log(`Running question #2 with args ${args[1]}`)