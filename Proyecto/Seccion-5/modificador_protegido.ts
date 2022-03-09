
class Instrumento{    
    protected nombre:string; 

    constructor (nombre_:string){
        this.nombre = nombre_
    }
}

class Piano extends Instrumento{
    
    private de_cuerda: boolean =false;
    
    constructor(nombre_:string){
        super(nombre_)
    }

    public obtener_nombre():void{
        console.log (this.nombre)
    }
}

let mi_piano = new Piano ("mi piano de cola")
mi_piano.obtener_nombre()
mi_piano.nombre()// se niega el acceso a la informacion por el metodo protected

//El modo protegido "protected".  los datos solo pueden ser accedidos por las sub clases, fuera de 
// las clases y subclases  son negados

