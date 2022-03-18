//una funcion con declarados genericos tipo T 
/**se recomieda como buena practica escribir el codigo defunciones geericas con varios tipos de parametros
 * y varios tipos de retornos
  */
function elemento_random(lista) {
    var indice_random = Math.floor(Math.random() * lista.length);
    return lista[indice_random];
}
// T en este caso simboliza un numero2
var numero = [32, 54, 1, 3];
var mi_numero = elemento_random(numero);
console.log(mi_numero);
// T en este caso simboliza una lectura
var letras = ["a", "b", "c"];
var mi_letra = elemento_random(letras);
/*Se debede evitar las malas practicas donde se devuelvan cual quier tipo de dato con
el any */
function elemento_random2(lista) {
    var indice_random = Math.floor(Math.random() * lista.length);
    return lista[indice_random];
}
var letra2 = ["a", "b", "c"];
var mi_letra2 = elemento_random2(letras);
