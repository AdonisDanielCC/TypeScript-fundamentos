"use strict";
exports.__esModule = true;
var exportar_1 = require("./exportar");
console.log(exportar_1.pi);
(0, exportar_1.saludar)();
var messi = new exportar_1.Jugador();
messi.nombre = "Messi";
var zeus = { nombre: "Zeus" };
console.log(messi, zeus);
//Videos ALIAS
var exportar_2 = require("./exportar");
(0, exportar_2.palabras)();
///Importar Default
var default_1 = require("./default");
console.log(default_1["default"].nombre + " " + default_1["default"].apellido);
default_1["default"].preguntar("Que edad tienes?");
