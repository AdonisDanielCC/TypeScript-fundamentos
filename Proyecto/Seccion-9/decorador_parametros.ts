

class Profesor{
    
    saludar(@decorador_parametros mensaje:string, mensaje2:string,  @decorador_parametros mensaje3:string){
        console.log (mensaje)
    }
}

let cesar = new Profesor()
cesar.saludar("Mensaje ", "mensaje2 ", "mensaje3" )

console.log (Object.getPrototypeOf(cesar))

function decorador_parametros(objetivo:Object, metodo:string, indice:number){
    const metadata="indices_decorados";

    if (Array.isArray(objetivo[metadata])) {
        objetivo[metadata].push(indice)
    }else{
        objetivo[metadata] = [indice]
    }

}