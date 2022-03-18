class Unificador<T>{
    valor:T;
    sumar:(valor1: T, valor2: T)=>T;
}

// la T simboliza un numero

let mi_unificador = new Unificador<number>();
mi_unificador.valor = 20
mi_unificador.sumar = function(valor1_, valor2_ ){return valor1_ + valor2_}

console.log(mi_unificador.sumar(4,6))
console.log(mi_unificador.valor)

//la T simboliza un string en la siguiente variable asi c demuestra el valor generico

let mi_unificador2= new Unificador<string>()
mi_unificador2.valor="34"
mi_unificador2.sumar= function(valor1_, valor2_){  return valor1_ + valor2_ }



