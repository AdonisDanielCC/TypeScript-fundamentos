interface DatosPersonales{
    nombre:string
    apellido:string
}

class Estudiante implements DatosPersonales{

    nombre:string
    apellido:string
    matricula:number
}

let estudiante_= new Estudiante()
estudiante_.nombre= "DANIEL"
estudiante_.apellido= "Contreras"
estudiante_.matricula= 123456

console.log(estudiante_)