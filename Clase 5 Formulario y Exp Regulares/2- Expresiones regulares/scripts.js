/*
    Expresiones regulares:
        Son una secuencia de caracteres que forma un patr�n de b�squeda, principalmente utilizada para la b�squeda de patrones de cadenas de caracteres u operaciones de sustituciones.
        https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
    P�gina para evaluar expresiones regulares: https://regex101.com/
    sintaxis:
        /patron/
    Banderas:
        i: ignore case. No diferencia entre mayusculas y min�sculas
        g: global. Busca de forma global, es decir, no se para despu�s de la primera coincidencia
    Comodines:
        -Sustituci�n: Define un comod�n dentro del patron. El s�mbolo es el "."
        -Listado de caracteres v�lidos: Entre corchetes se pone una lista de los caracteres v�lidos. 
        [aeiou] Con esto coger�amos todas las vocales
        -Rangos: Entre corchetes si ponemos un gui�n entre dos caracteres establecemos un rango. [a-z] Todas las letras min�sculas.
        Tabla ASCII https://ascii.cl/es/
        -Mezcla entre rangos y listas: 
            Podemos unir los dos anteriores en una sola expresi�n. [0-5ou] Ser�an n�meros del 0 al 5, la letra "o" y la letra "u"
        -Cadenas completas:
            Para establecer una cadena completa debe ir entre par�ntesis, si queremos m�s palabras ir�n separadas por un pipe. (lorem|amet) es v�lida la palabra "lorem" y la palabra "amet"
    Delimitadores:
        ^ Antes de este s�mbolo no puede haber nada
        $ Despu�s de este s�mbolo no puede haber nada
        ^hola$
    Cantidad:
        - llaves: lo que est� antes tiene que aparecer la cantidad exacta de veces. Hay tres combinaciones posibles. 
            {n} Se tiene que repetir n veces
            {n,m} Se tiene que repetir entre n y m veces, ambas incluidas.
            {n,} Se tiene que repetir como m�nimo n veces y sin m�ximo
        ^[a-zA-Z]{1,3}@{1}$
        -asterisco: Lo que est� antes del asterisco puede estar, puede no estar y se puede repetir.  .*@.*\..*
        -interrogaci�n: Lo que est� antes de la interrogaci�n puede no estar, pero si est� solo puede aparecer una vez.
            ^[ae]?$ 
        - operador +: lo que est� antes del + tiene que est�r una vez como m�nimo
        A-[0-9]+
    
    Caracteres:
        \s: Coincide con un car�cter de espacio, entre ellos incluidos espacio, tab, salto de p�gina, salto de linea y retorno de carro. ^[a-zA-Z]+\s[a-zA-Z]+$
        \S: Coincide con todo menos caracteres de espacio ^\S{5}$
        \d: Coincide con un car�cter de n�mero. Equivalente a [0-9] ^\d{5}$
        \D: Coincide con cualquier car�cter no num�rico. Equivalente a [^0-9] ^\D{5}$
        \w: Coincide con cualquier car�cter alfanum�rico, incluyendo el gui�n bajo. Equivalente a [A-Za-z0-9_] ^\w+@$
        \W: Coincide con todo menos caracteres de palabra. ^\W+$
       
*/

const text = document.getElementById('text').textContent
const regEx = /lorem/gi
const regEx2 = new RegExp('lorem', 'gi')
const regEx3 = new RegExp('/lorem/', 'gi')

console.log(regEx.test(text))
console.log(text.includes('Lorem'))