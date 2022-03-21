
/*import * as paquete from "./exportar"

si importamos todas valores tenemos q poner el paquete y objeto q se esta importando ejemplo

console.log(paquete.pi)
paquete.saludar()
paquete.palabras()
let messi: paquete.jugador = new paquete.jugador
let zeus: paquete.Mascota = {nombre: "Zeus"}


*/


import{pi, saludar, Jugador, Mascota  } from "./exportar"

console.log(pi)


saludar()

let messi: Jugador = new Jugador()
messi.nombre="Messi"

let zeus: Mascota = {nombre: "Zeus"}

console.log (messi, zeus)

//Videos ALIAS

import {palabras} from "./exportar"

palabras()



///Importar Default

import periodista from "./default"

console.log (periodista.nombre+ " " + periodista.apellido)
periodista.preguntar("Que edad tienes?")
