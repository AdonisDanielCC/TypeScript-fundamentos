var Jugador = /** @class */ (function () {
    function Jugador(posicion_) {
        this.posicion = posicion_;
    }
    Jugador.prototype.obtener_posicion = function () {
        console.log(this.posicion);
        this.sobreescribir_posicion();
        console.log(this.posicion);
    };
    Jugador.prototype.sobreescribir_posicion = function () {
        this.posicion = "Arquero";
    };
    return Jugador;
}());
var Ronaldo = new Jugador("Delantero");
//console.log(Ronaldo.posicion) // en esta linea se quiere acceder al valor posicion este esta declarado 
// como privado y solo  se podra usar dentro de la clase donde este declarado.
Ronaldo.obtener_posicion(); // Este metodo es publico y tiene acceso al valor posicon porlo tanto puede enviar 
// toda la informacion q tenga dentro aunq esta este declarada como privado.
//Ronaldo.sobreescribir_posicion() // esta de igual forma c quiere acceder al metodo sobreescribir y se puede ya 
//que el metodo sobreescribir_posicion() esta declarado como privado y solo se podra acceder  a la informacion
// dentro de la clase donde este declarado el metodo                         
