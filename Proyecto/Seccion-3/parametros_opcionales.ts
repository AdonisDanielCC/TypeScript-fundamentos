function nombre_completo(nombre: string, apellido: string): string{
    return nombre + " " + apellido
}

// En ts los parametros son obligatorios
// en js los parametros no son obligatorios

let resultado: string = nombre_completo("Daniel", "Contreras")
console.log(resultado)

function nombre_completo2(nombre: string, apellido?: string ): string{

    if(apellido){
        return nombre + " " + apellido
    }
    else{
        return nombre
    }
}

let resultado2: string =nombre_completo2("Daniel")
console.log(resultado2)

//Si quieres poner parametros opcionales en typeScript solo deves agregar el signo de interrogacion
