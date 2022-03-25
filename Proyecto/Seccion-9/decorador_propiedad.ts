class Planeta {

    @decorador_propiedad
    nombre:string;

    constructor (nombre_:string){
        this.nombre= nombre_
    }
}

function decorador_propiedad (objetivo:Object, propiedad:string){
    console.log (objetivo, " objetivo")
    console.log (propiedad, "propiedad")

    const respaldo = "respaldo"

    const getter = function (this:any){
        console.log (this[respaldo], "valor de propiedad ")
        return this[respaldo] + "........"
    }
    
    const setter = function(this:any, valor: any){
        this[respaldo] = valor
    }


    Object.defineProperty(objetivo, propiedad,{
        get: getter,
        set: setter
    })  

}

let mi_planeta = new Planeta("Venus")
let mi_planeta2 = new Planeta("Tierra")

console.log (mi_planeta.nombre)
console.log (mi_planeta2.nombre)
