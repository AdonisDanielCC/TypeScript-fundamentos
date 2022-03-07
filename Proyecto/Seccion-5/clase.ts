class Vehiculo{
    //Atributos o propiedades sin inicializar

    marca:string;
    fecha_creacion: string;
    color:string;
    puertas:number;
    kilometraje:number=0;

    constructor(marca_:string, fecha_creacion_:string, color_:string, puertas_:number){

        this.marca = marca_;
        this.fecha_creacion= fecha_creacion_;
        this.color=color_;
        this.puertas=puertas_;
        console.log(this, "this")
    }

    avanzar(){
        this.kilometraje=this.kilometraje +100
    }

}

let mi_Vehiculo = new Vehiculo("ford", "2022", "negro", 2)

//Acceder a un atributo
console.log(mi_Vehiculo.kilometraje, "antes de avanzar")
mi_Vehiculo.avanzar()
console.log(mi_Vehiculo.kilometraje, "despues de avanzar")

let mi_camioneta = new Vehiculo("Hummer", "2022", "blanca", 5)

console.log(mi_camioneta.puertas)
console.log(mi_Vehiculo.puertas)