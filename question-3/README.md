# Enunciado 3

> Implementar un método de verificación lógica de paréntesis. Es decir, implementar el método `parenthesisChecker(str)` que recibe un `string` como parámetro y devuelve un `boolean`. La respuesta del método debe ser `true` si la cadena de `string` es válida en términos de paréntesis (`( )`, `[ ]`, `{ }`), i.e. cada apertura de paréntesis se cierra correctamente. A continuación se muestran ejemplos de `string` válidos e inválidos.
> 
> **Ejemplos válidos**: la función debe devuelve `true`.
>
> - `parenthesisChecker('a * (b + c)')` → `true`
> - `parenthesisChecker('a * (b + c * [d])')` → `true`
> - `parenthesisChecker('[]{}()abc{([])}')` → `true`
>
> **Ejemplos válidos**: la función debe devuelve `false`.
>
> - `parenthesisChecker('(()')` → `false`
> - `parenthesisChecker('(([))')` → `false`
> - `parenthesisChecker('([)]')` → `false`

# Razonamiento

En este ejercicio me imagine una calculadora cientifica en la cual al poner mal los parentesis lanza error.
Para comenzar el ejercicio estableci los condiciones primarias las cuales son:

Si el string parte con un parentesis de cierre siempre sera falso
Se establecio un array de comparacion donde se guardan los parentesis de apertura, si este array no esta vacio siempre sera falso
Si el array de comparacion esta vacio y ya no quedan elementos en el string original sera verdadero

Al establecer las condiciones anteriores y codificarlas faltaban algunos casos en los cuales era pertinente parar la ejecucion
y establecer el balance de parentesis como falso un ejemplo de esto es el string '(])' no existe necesidad de analizar hasta el 
ultimo dato ya que el parentesis de cierre ] no tiene uno de apertura por consiguiente el programa llegara hasta el elemento e
indicara que es false.

