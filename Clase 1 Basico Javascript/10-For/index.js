/* Bucles */

/* 
    Determinados
    bucle for
    Su sintaxis se compone de 3 partes
        Iniciaci�n de variable
        N�mero de vueltas
        Incremento o decremento
    for(let i=0;i<=10;i++){
        C�digo a ejecutar
    }
*/

let numbers = [56,14,23,37,41,59]

for(let i=0;i<=numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posici�n en el array es ${numbers[i]}`);
}