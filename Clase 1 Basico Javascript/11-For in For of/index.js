/* Bucles */

/* 
    Determinados
    bucle for of / for in
    for(let variable of estructura){
        C�digo a ejecutar
    }
    Palabras reservadas de bucles
        break - Rompe el bucle
        continue - Se salta la(s) posicion(es) que le indequemos y despu�s contin�a su ejecuci�n
*/

let names = ['Paco', 'Jos�', 'Paula', 'Mar�a']

for (let i = 0; i < names.length; i++){
    if(names[i]==='Paula'){
        continue
    }
    console.log(names[i]);
}

for(let name of names){
    if(name==='Paula'){
        continue
    }
    console.log(name);
}

for(let index in names){
    if(names[index]==='Paula'){
        continue
    }
    console.log(index);
}