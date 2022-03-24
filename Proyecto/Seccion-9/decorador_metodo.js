"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var Estudiante = /** @class */ (function () {
    function Estudiante(notas_) {
        this.notas = notas_;
    }
    Estudiante.prototype.obtenerNotas = function () {
        for (var _i = 0, _a = this.notas; _i < _a.length; _i++) {
            var nota = _a[_i];
            console.log(nota);
        }
        return this.notas;
    };
    __decorate([
        modificar_metodo(false),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Estudiante.prototype, "obtenerNotas", null);
    return Estudiante;
}());
//fabrica de decorador
//decorador de metodo
function modificar_metodo(valor) {
    return function (objetivo, propiedad, descriptor) {
        console.log(objetivo, "objtivo");
        console.log(propiedad, " propiedad");
        console.log(descriptor, " descriptor");
        descriptor.value = valor;
        console.log(descriptor, " descriptor");
    };
}
var estudiante = new Estudiante([9, 5, 10]);
estudiante.obtenerNotas;
//()// para que se ejecute el decorador  c eliminan los parentesis  q llaman a los valores del metodo.
