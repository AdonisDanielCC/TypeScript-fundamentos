var pelicula = " Madagascar 3";
var serie = ' the wlking Dead';
var poema = " l orem dfdfdsfsdfsd\n                     fsfsdfsdfsdf\n                     sdfsdfsdf "; // las comillas invertidas se usan para string multi renglon
// operaciones
var programas = "MIs programas favoritos son: " + pelicula + " y " + serie;
console.log(programas);
//templete string 
var programas2 = "  xxxxxxxxxxx\n\nMis programas favoritos son: " + pelicula + " y " + serie + "\n\nxxxxxxxxxxxxxxxxxx  "; // insertar variables en una cadena string se puede con ${variable a insertar}
console.log(programas2);
var edad_actual = 37;
var edad_futura = "\nel siguiente mes mi edad sera " + (edad_actual + 1) + "\n\n";
console.log(edad_futura);
//metodos
console.log(programas.charAt(0));
console.log(programas.toUpperCase());
