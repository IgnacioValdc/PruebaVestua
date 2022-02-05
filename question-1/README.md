# Enunciado 1

> Estás subiendo una escalera de N peldaños. En cada momento, puedes subir 1 o 2 peldaños. ¿En cuántas formas diferentes puedes subir las escalera?

# Razonamiento

Para comenzar el ejercicio verifique si existia algun patron en la cantidad de formas distintas que se pueden subir las escaleras

Comenzando por:

N = 0       Formas: 0
N = 1       Formas: 1
N = 2       Formas: 2
N = 3       Formas: 3
N = 4       Formas: 5
N = 5       Formas: 8

Al tener los 5 primeros N note que seguian un patron especificamente que el resultado dependia de la suma de los 2 resultados anteriores
lo cual me llevo a la sucesion de Fibonacci
