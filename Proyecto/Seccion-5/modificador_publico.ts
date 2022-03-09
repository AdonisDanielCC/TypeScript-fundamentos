class Persona{
     public nombre:string;

     public constructor(nombre_:string){
        
        this.nombre= nombre_;        
     }
     public hablar (mensaje:string):void{
         console.log (mensaje)
     }

}
let instancia = new Persona("Juan")
console.log(instancia.nombre)
instancia.hablar("Hola")