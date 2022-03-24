"use strict";
function mi_fabrica(valor) {
    console.log("Este es mi fabrica de decoradores");
    return function (odjetivo) {
        console.log("Este es mi decorador y hago algo con valor");
    };
}
