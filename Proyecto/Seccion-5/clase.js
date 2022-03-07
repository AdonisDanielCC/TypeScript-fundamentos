var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_creacion_, color_, puertas_) {
        this.kilometraje = 0;
        this.marca = marca_;
        this.fecha_creacion = fecha_creacion_;
        this.color = color_;
        this.puertas = puertas_;
        console.log(this, "this");
    }
    Vehiculo.prototype.avanzar = function () {
        this.kilometraje = this.kilometraje + 100;
    };
    return Vehiculo;
}());
var mi_Vehiculo = new Vehiculo("ford", "2022", "negro", 2);
//Acceder a un atributo
console.log(mi_Vehiculo.kilometraje, "antes de avanzar");
mi_Vehiculo.avanzar();
console.log(mi_Vehiculo.kilometraje, "despues de avanzar");
var mi_camioneta = new Vehiculo("Hummer", "2022", "blanca", 5);
console.log(mi_camioneta.puertas);
console.log(mi_Vehiculo.puertas);
