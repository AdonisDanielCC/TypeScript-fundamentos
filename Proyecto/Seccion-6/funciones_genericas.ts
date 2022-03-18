//una funcion con declarados genericos tipo T 
/**se recomieda como buena practica escribir el codigo defunciones geericas con varios tipos de parametros
 * y varios tipos de retornos
  */


function elemento_random <T>(lista: T[]):T {
    let indice_random:number= Math.floor(Math.random()*lista.length)
    return lista[indice_random]
}

// T en este caso simboliza un numero2
let numero: number [] = [32,54,1,3]
let mi_numero: number = elemento_random(numero)
console.log(mi_numero)

// T en este caso simboliza una lectura
let letras: string[ ]=["a", "b", "c"]
let mi_letra: string=elemento_random(letras)

/*Se debede evitar las malas practicas donde se devuelvan cual quier tipo de dato con
el any */

function elemento_random2(lista: any):any{
    let indice_random: number= Math.floor(Math.random()*lista.length)
    return lista[indice_random]
}

let letra2 : string[]=["a","b","c"]
let mi_letra2: number=elemento_random2(letras)