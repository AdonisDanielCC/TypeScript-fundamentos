interface Punto{
    readonly coordenada_x: number;
    readonly coordenada_y: number;  // el readonly denomina q el parametro no se puede sobre escribir 
                                    //y se usa para solo lectura
}
let punto:Punto = {coordenada_x:34, coordenada_y:23}
console.log(punto)

