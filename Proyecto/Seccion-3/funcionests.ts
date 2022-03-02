// Funciones TS


function multiplicar (x: number, y: number): number {
 
    return x*y
}

let producto: number = multiplicar (5,2)
console.log(producto, " producto")

let sumatoria: number = 0;
console.log(sumatoria, " Sumatoria antes de ejecutar ")

function sumar ():number{
    return ++sumatoria
}
let resultado = sumar()
console.log(resultado, " resultado")
console.log(sumatoria, " sumatoria despues de ejecutar")
