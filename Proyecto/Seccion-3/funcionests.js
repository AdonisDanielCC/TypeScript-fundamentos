// Funciones TS
function multiplicar(x, y) {
    return x * y;
}
var producto = multiplicar(5, 2);
console.log(producto, " producto");
var sumatoria = 0;
console.log(sumatoria, " Sumatoria antes de ejecutar ");
function sumar() {
    return ++sumatoria;
}
var resultado = sumar();
console.log(resultado, " resultado");
console.log(sumatoria, " sumatoria despues de ejecutar");
