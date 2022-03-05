   interface Perro{
              //Atributo

       nombre: string;
       
   }
       function adoptar (mascota:Perro):void { 
        console.log(`Yo adopte a ${mascota.nombre}`)
    }
    let mi_mascota = {nombre: "Tobby"}

 adoptar(mi_mascota)
   