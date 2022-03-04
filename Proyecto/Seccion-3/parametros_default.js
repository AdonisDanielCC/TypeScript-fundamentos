function asignar_posicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = "defensa"; }
    return nombre + " jugador con el numero " + numero + " en la posicion de " + posicion;
}
//En TS todos los parametros son requeridos
var jugador1 = asignar_posicion("Pedro", 10, "Delantero");
//los parametros por default son tratados como opcionales
// Si llega a faltar un valor este sobreg escribe el parametros por defecto
var jugador2 = asignar_posicion("juan", 23);
console.log(jugador1);
console.log(jugador2);
