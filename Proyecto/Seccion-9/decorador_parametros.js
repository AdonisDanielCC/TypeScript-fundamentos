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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var Profesor = /** @class */ (function () {
    function Profesor() {
    }
    Profesor.prototype.saludar = function (mensaje, mensaje2, mensaje3) {
        console.log(mensaje);
    };
    __decorate([
        __param(0, decorador_parametros),
        __param(2, decorador_parametros),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, String]),
        __metadata("design:returntype", void 0)
    ], Profesor.prototype, "saludar", null);
    return Profesor;
}());
var cesar = new Profesor();
cesar.saludar("Mensaje ", "mensaje2 ", "mensaje3");
console.log(Object.getPrototypeOf(cesar));
function decorador_parametros(objetivo, metodo, indice) {
    var metadata = "indices_decorados";
    if (Array.isArray(objetivo[metadata])) {
        objetivo[metadata].push(indice);
    }
    else {
        objetivo[metadata] = [indice];
    }
}
