class Animales{

    nombre:string
    
    constructor(nombre_:string){
        console.log("Entre en el constructor de animales")
        this.nombre = nombre_
    }
    
    caminar(distancia: number =0): void{
        console.log (`${this.nombre} camino ${distancia} metros`)
    }
    
}

class Serpiente extends Animales{
    longitud:number;
    constructor(nombre:string, longitud_:number){
        console.log("Entre en el constructor de serpiente")
        super(nombre)
        this.longitud= longitud_;
        
    }

    caminar(distancia:number=5){
        console.log("Dezlizar...." + " " + distancia + " metros ")
        super.caminar(distancia)
    }

}

class Caballo extends Animales{
    constructor(nombre:string){
    super(nombre)
    }
}
let sam = new Serpiente("Sam la serpiente ", 23)
let zeus = new Caballo("Zeus es un caballo")

sam.caminar()
sam.caminar(33)
console.log(sam.longitud)
zeus.caminar()
zeus.caminar(1234545)

