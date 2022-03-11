// Un get se utiliza para obtener  informacion
// Un set se utilizar para modicar informacion
let permiso = true;
class Trabajador {
    get nombre_completo() {
        return this.nombre;
    }
    set colocar_nombre(nombre_) {
        if (permiso) {
            this.nombre = nombre_;
        }
        else {
            console.log("sin permiso");
        }
    }
}
let empleado = new Trabajador();
empleado.nombre = "Pedro";
console.log(empleado.nombre_completo);
empleado.colocar_nombre = "Juan";
console.log(empleado.nombre_completo);
