function mi_fabrica(valor: string){
    console.log("Este es mi fabrica de decoradores")
    return function(odjetivo:any){
        console.log("Este es mi decorador y hago algo con valor")
    }
}