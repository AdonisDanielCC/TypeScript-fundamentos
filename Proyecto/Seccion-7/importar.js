"use strict";
exports.__esModule = true;
var exportar_1 = require("./exportar");
console.log(exportar_1.pi);
(0, exportar_1.saludar)();
var messi = new exportar_1.Jugador();
messi.nombre = "Messi";
var zeus = { nombre: "Zeus" };
console.log(messi, zeus);
