# Enunciado 2

> En la carpeta [question-2](https://bitbucket.org/vestua-com/questions/src/main/question-2/) se ha exportado eventos de navegación de usuarios anonimizados de la plataforma Vestuá. Se le pide al equipo de Ingeniería que hagan un análisis sobre los datos de navegación. En particular se solicita:
>
> - Calcular la cantidad de visitas únicas por cada producto.
> - Calcular la cantidad de clicks únicos por cada producto.
> - Calular el CTR (*Clickthrough Rate*) de cada producto.
> 
> El set de datos contiene la siguiente estructura:
> 
> - `user`: id del usuario que ejecutó el evento.
> - `entityId`: id de la entidad al que el usuario ejecutó el evento.
> - `entityType`: tipo de entidad al que se ejecutó el evento.
> - `eventType`: tipo de evento. Puede ser `impression` o `click`.
> 
> Como miembro del equipo de ingeniería, te solicitan modificar el archivo [script.js](https://bitbucket.org/vestua-com/questions/src/main/question-2/script.js) para que pueda leer el set de datos y generar un archivo `output.csv` con las siguientes columnas:
> 
> - `productId`: id del producto.
> - `clicks`: cantidad de *clicks* únicos que tiene el producto
> - `impressions`: cantidad de impresiones únicas que tiene el producto.
> - `ctr`: métrica CTR del producto.

# Razonamiento

Comence por obtener los datos del archivo "BrowsingEvents.csv", luego separar los datos por linea, posteriormente separar los datos por columna
y por ultimo almacenar estos datos en distintos arrays para trabajarlos.

Al analizar el ejercicio no me quedo claro y al momento de escribir esto no termino de entender el punto de calcular la cantidad de visitas
unicas por cada producto simplemente asumi que se queria obtener los datos de cada producto sin que el producto estuviera duplicado en el 
nuevo documento csv.

Para el calculo de los click se contaron los click que tuviera cada producto.

En el calculo ctr en vista que no se entrego una formula se asumio la formula publicada por google la cual es CTR = click / impresiones, cabe decir que 
para obtener este calculo se establecio la condicion si impresiones fuera 0 se establecera con valor 1 para que de esta forma la division no se provoque 
una division por cero.

Una vez obtenidos todos los datos estos son concatenados por linea siguiendo el ejemplo entregado. Posteriormente estos datos son agregados a un array
y este array es limpiado de los datos duplicados por producto.

Por ultimo con el array limpio se agregan los datos al csv que el programa generara.


Cabe decir que el programa leera el csv siempre y cuando se agregue por linea de comandos siguiendo el siguiente ejemplo:

node script.js nombreArchivo.csv 

Se asumio que no hay 2do argumento ya que no lo especifica por tanto el nombre del nuevo documento se establece automaticamente en el codigo