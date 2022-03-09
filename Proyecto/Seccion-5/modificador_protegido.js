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
var Instrumento = /** @class */ (function () {
    function Instrumento(nombre_) {
        this.nombre = nombre_;
    }
    return Instrumento;
}());
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(nombre_) {
        var _this = _super.call(this, nombre_) || this;
        _this.de_cuerda = false;
        return _this;
    }
    Piano.prototype.obtener_nombre = function () {
        console.log(this.nombre);
    };
    return Piano;
}(Instrumento));
var mi_piano = new Piano("mi piano de cola");
mi_piano.obtener_nombre();
