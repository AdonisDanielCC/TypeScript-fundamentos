

interface Datos<T=string>{

    nombre:T
}

let perosna_libre: Datos = {nombre: "Sebastian"}

let persona_presa: Datos <number> = {nombre: 23456}