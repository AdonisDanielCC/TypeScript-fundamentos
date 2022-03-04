function deportes(persona) {
    var deportes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        deportes[_i - 1] = arguments[_i];
    }
    return "A " + persona + " le gusta los siguientes deportes: " + deportes.join(",");
}
console.log(deportes("Adonis", "Futbol", "Americano", "Atletismo"));
//resumen
function ejemplo(requerido, por_default, opcional) {
    if (por_default === void 0) { por_default = "algo"; }
}
