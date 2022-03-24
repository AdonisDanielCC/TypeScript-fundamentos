

function entrando(clase:Object){
    console.log ("Primer decorador")
}

function imprimiendo (clase:Object){
    console.log("Segundo Decorador")
}

@entrando
@imprimiendo
class Animal{
    raza:string = "Perro"
}
let mi_mascota: Animal = new Animal()