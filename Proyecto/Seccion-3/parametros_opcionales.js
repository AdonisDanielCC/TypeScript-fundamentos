function nombre_completo(nombre, apellido) {
    return nombre + " " + apellido;
}
// En ts los parametros son obligatorios
// en js los parametros no son obligatorios
var resultado = nombre_completo("Daniel", "Contreras");
console.log(resultado);
function nombre_completo2(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var resultado2 = nombre_completo2("Daniel");
console.log(resultado2);
//Si quieres poner parametros opcionales en typeScript solo deves agregar el signo de interrogacion
