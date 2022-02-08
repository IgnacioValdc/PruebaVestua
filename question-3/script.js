/**
 * On this module you should write your answer to question #3.
 * This file would be executed with the following command:
 * $ node scritp.js 'a * (b + c)'
 */

const args = process.argv.slice(-1);
console.log(`Running question #3 with args ${args}`)

/**
 * Check if a string has correct use of parenthesis.
 * 
 * @param {String} str - String to be evaluated
 * @returns {Boolean} Returns true if string is valid.
 */
function parenthesisChecker(str) {      //Funcion
  var array = [];                       //Array de comparacion
  var cadenaEvaluar =[];                //Cadena donde descargamos los datos ingresados como argumentos para obtener una cadena de string y no una matriz de string
  
  for(let i = 0; i < str[0].length; i++){
    cadenaEvaluar[i] = str[0][i];               //Al ser str una matriz para trabajar necesitamos descargar sus datos en un string
  }

  for(let i = 0; i < cadenaEvaluar.length; i++ ){
    if(cadenaEvaluar[0] == ")" || cadenaEvaluar[0] == "]" || cadenaEvaluar[0] == "}"){      //Si en la primera posicion encontramos un parentesis de 
      return false;                                                                         //cierra devolvera un false y terminara la ejecucion
    }
    if(cadenaEvaluar[i] == "(" ||cadenaEvaluar[i] == "[" ||cadenaEvaluar[i] == "{"){        //Si encontramos un parentesis de apertura
      array.push(cadenaEvaluar[i]);                                                         //lo agregamos al array de comparacion
    }
    if(cadenaEvaluar[i] == ")" && array == "" ||cadenaEvaluar[i] == "]" && array == "" ||cadenaEvaluar[i] == "}" && array == ""){     //Si hay un parentesis de cierre y el array de comparacion
      return false;                                                                                                                   //esta vacio terminara el programa arrojando un false
    }
    if(cadenaEvaluar[i] == ")" && array[array.length-1] == "(" || cadenaEvaluar[i] == "}" && array[array.length-1] == "{" || cadenaEvaluar[i] == "]" && array[array.length-1] == "["){
      array.pop();      //Cuando se encuentra un parentesis de cierre en la cadena buscara en la ultima posicion del array de comparacion el parentesis
                        //y si se cumple alguna de las condiciones eliminara el ultimo dato del array de comparacion
    }else if((i+1) == cadenaEvaluar.length && array != ""){               //Si el arreglo de comparacion aun tiene datos y esta en la ultima posicion arrojara false
      return false;                                                       //Esto solo es funcional en algunos casos puntuales
    }
  }
  if(array == ""){                                                  //Si ya se limpio toda la cadena y el array de comparacion esta vacio se deolvera un true
    return true;
  }
  else{                                                             //Si el array de comparacion no esta vacio devolvemos un false 
    return false;
  }
}

const isValid = parenthesisChecker(args);
console.log(`parenthesisChecker("${args}") = ${isValid}`);

