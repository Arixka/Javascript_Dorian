/* Bucles */

/* 
    Indeterminados - No sabemos el n�mero de veces que se va a ejecutar el c�digo
    Bucle while
    while(condici�n){
        //c�digo a ejecutar
    }    
    Bucle do...while
    do{
        //c�digo a ejecutar
    }while(condici�n)
*/

let pass = 'hola';

while(pass != 'hola'){
    pass = prompt('Introduzca su contrase�a')
}

console.log('Fin del bucle');

do{
    pass = prompt('Introduzca su contrase�a')

}while(pass != 'hola')