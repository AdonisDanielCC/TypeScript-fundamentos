class Animal{
    caminar(distancia:number):void{
            console.log (`Se mueve ${distancia} metros `)
    }
}

class Gato extends Animal{
    maullar():void{
        console.log("Miauuuuuu")
    }
}
let gatito = new Gato()

gatito.maullar()

gatito.caminar(123)

