

// Crear un decorador es crear una funcion y utilizar si nombren como una etiqueta en otra parte

function imprimir (clase: Function){
    clase.prototype.nombren="Adonis Daniel"
    console.log(clase.prototype)

}

@imprimir
    class Persona{
    mensaje:string="Hola a todos! x 1000"
        saludar(){
            console.log (this.mensaje)
        }
}
let yo: Persona = new Persona()
yo.saludar()

let tu: Persona = new Persona()
tu.saludar()