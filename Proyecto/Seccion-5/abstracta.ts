/*Una clase abstracta funciona como una plantilla,
la idea es que siempre funcione como una superclase 
Este tipo de clase no puede ser instanciada directamente,
recordar que sirve como plantilla de guia*/

abstract class SuperClase{
    
    abstract metodo_a_sobreescribir():void;

    saludar():void{
        console.log ("hola")
    }
}

class claseDerivada extends SuperClase{

    constructor(){
        super()
    }
    metodo_a_sobreescribir():void{
        console.log ("codigo nuevo")
    }

}
let instanciada = new claseDerivada()
instanciada.saludar()
instanciada.metodo_a_sobreescribir()
