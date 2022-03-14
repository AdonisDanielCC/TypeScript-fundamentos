

let casas_HP:string[]=[" Azul", "Roja", "Verde", "Gris"]

function sombrero(todas_las_casas_de_colores: string[]):string{
    let indice_random: number = Math.floor(Math.random()*todas_las_casas_de_colores.length)
    return todas_las_casas_de_colores[indice_random]
}

let mi_casa:string=sombrero(casas_HP)
console.log(`Bienvenidos a ${mi_casa}`)

let materias: number[] = [4,9,12,22]

function materias_semestre(materias_: number[]): number{
let indice_random: number= Math.floor(Math.random()*materias_.length)
return materias_[indice_random]
}

let mis_materias: number= materias_semestre(materias)
console.log(`Deber cursar ${mis_materias} materias en ${mi_casa}`)

