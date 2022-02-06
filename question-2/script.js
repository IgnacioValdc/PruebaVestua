/**
 * On this module you should write your answer to question #2.
 * This file would be executed with the following command:
 * $ node scritp.js BrowsingEvents.csv
 */

const args = process.argv.slice(-1);
var fs = require('fs')
, archivo = args[0];

const data = fs.readFileSync(archivo,'UTF-8');
const lines = data.split("\n");
lines.shift();
var id_usuario = [];
var entidad_id = [];
var tipo = [];
var imp_click = [];


var lineaS;

for(let i = 0; i<lines.length; i++){
    lineaS = lines[i].split(",");
    id_usuario[i] = lineaS[0];
    entidad_id[i] = lineaS[1];
    tipo[i] = lineaS[2];
    imp_click[i] = lineaS[3];
}
console.log(id_usuario[0]);

// console.log(`Running question #2 with args ${args[1]}`)