function asignar_posicion(nombre: string, numero:number, posicion: string= "defensa"): string{
    return`${nombre} jugador con el numero ${numero} en la posicion de ${posicion}`
}
//En TS todos los parametros son requeridos

let jugador1: string =asignar_posicion("Pedro", 10, "Delantero")
//los parametros por default son tratados como opcionales
// Si llega a faltar un valor este sobreg escribe el parametros por defecto
let jugador2: string =asignar_posicion("juan", 23)
console.log(jugador1)
console.log(jugador2)