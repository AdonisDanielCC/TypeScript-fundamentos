let pelicula: string = " Madagascar 3"
let serie: string = ' the wlking Dead'
let poema: string =` l orem dfdfdsfsdfsd
                     fsfsdfsdfsdf
                     sdfsdfsdf ` // las comillas invertidas se usan para string multi renglon


// operaciones

let programas: string = "MIs programas favoritos son: " + pelicula +" y " + serie
console.log(programas)

//templete string 

let programas2: string =`  xxxxxxxxxxx

Mis programas favoritos son: ${pelicula} y ${serie}

xxxxxxxxxxxxxxxxxx  ` // insertar variables en una cadena string se puede con ${variable a insertar}

console.log(programas2)
let edad_actual  : number = 37
let edad_futura : string =`
el siguiente mes mi edad sera ${edad_actual +1}

`
console.log(edad_futura)

//metodos

console.log(programas.charAt(0))
console.log(programas.toUpperCase())