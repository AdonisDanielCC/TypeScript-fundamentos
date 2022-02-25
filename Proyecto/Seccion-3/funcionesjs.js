function multiplicar(numero1, numero2) {
    return numero1 * numero2;
}
var respuesta = multiplicar(2, 6);
console.log("resultado = " + respuesta);
var la_cuenta = 100;
function aumentarLaCuenta(valor) {
    la_cuenta = la_cuenta + valor;
}
//llamar funcion
aumentarLaCuenta(78);
console.log(la_cuenta);
