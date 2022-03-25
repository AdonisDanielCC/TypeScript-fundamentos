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
var Planeta = /** @class */ (function () {
    function Planeta(nombre_) {
        this.nombre = nombre_;
    }
    __decorate([
        decorador_propiedad,
        __metadata("design:type", String)
    ], Planeta.prototype, "nombre", void 0);
    return Planeta;
}());
function decorador_propiedad(objetivo, propiedad) {
    console.log(objetivo, " objetivo");
    console.log(propiedad, "propiedad");
    var respaldo = "respaldo";
    var getter = function () {
        console.log(this[respaldo], "valor de propiedad ");
        return this[respaldo] + "........";
    };
    var setter = function (valor) {
        this[respaldo] = valor;
    };
    Object.defineProperty(objetivo, propiedad, {
        get: getter,
        set: setter
    });
}
var mi_planeta = new Planeta("Venus");
var mi_planeta2 = new Planeta("Tierra");
console.log(mi_planeta.nombre);
console.log(mi_planeta2.nombre);
