class Estudiante{
    notas:number[];

    constructor(notas_:number[]){
        this.notas=notas_
    }
    @modificar_metodo(false)

    obtenerNotas(){
        for(let nota of this.notas){
            console.log (nota)
        }
        return this.notas;
    }

}
//fabrica de decorador
//decorador de metodo

function modificar_metodo(valor:boolean){
    return function(objetivo:any, propiedad:string, descriptor: PropertyDescriptor){

        console.log(objetivo, "objtivo")
        console.log (propiedad, " propiedad")
        console.log (descriptor, " descriptor")
        descriptor.value = valor
        console.log (descriptor, " descriptor")
    }
}

let estudiante =  new Estudiante([9, 5, 10])
estudiante.obtenerNotas
//()// para que se ejecute el decorador  c eliminan los parentesis  q llaman a los valores del metodo.