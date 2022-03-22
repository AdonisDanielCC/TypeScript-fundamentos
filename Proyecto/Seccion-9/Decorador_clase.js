// Crear un decorador es crear una funcion y utilizar si nombren como una etiqueta en otra parte
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function imprimir(clase) {
    clase.prototype.nombren = "Adonis Daniel";
    console.log(clase.prototype);
}
var Persona = /** @class */ (function () {
    function Persona() {
        this.mensaje = "Hola a todos! x 1000";
    }
    Persona.prototype.saludar = function () {
        console.log(this.mensaje);
    };
    Persona = __decorate([
        imprimir
    ], Persona);
    return Persona;
}());
var yo = new Persona();
yo.saludar();
var tu = new Persona();
tu.saludar();
