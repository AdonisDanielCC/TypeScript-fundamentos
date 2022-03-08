var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animales = /** @class */ (function () {
    function Animales(nombre_) {
        console.log("Entre en el constructor de animales");
        this.nombre = nombre_;
    }
    Animales.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this.nombre + " camino " + distancia + " metros");
    };
    return Animales;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre, longitud_) {
        var _this = this;
        console.log("Entre en el constructor de serpiente");
        _this = _super.call(this, nombre) || this;
        _this.longitud = longitud_;
        return _this;
    }
    Serpiente.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log("Dezlizar...." + " " + distancia + " metros ");
        _super.prototype.caminar.call(this, distancia);
    };
    return Serpiente;
}(Animales));
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo(nombre) {
        return _super.call(this, nombre) || this;
    }
    return Caballo;
}(Animales));
var sam = new Serpiente("Sam la serpiente ", 23);
var zeus = new Caballo("Zeus es un caballo");
sam.caminar();
sam.caminar(33);
console.log(sam.longitud);
zeus.caminar();
zeus.caminar(1234545);
