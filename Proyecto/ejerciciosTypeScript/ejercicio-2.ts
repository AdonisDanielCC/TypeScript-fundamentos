/* Crear una interface en TypeScript a partir de este código JavaScript:
1234var spiderman = {
    nombre: "Peter parket",
    poderes: ["trepar", "fuerza", "agilidad", "telas de araña"]
};*/

interface SuperHeroe{

    nombre:string; 
    superPoderes:string[]
    
}
    function personaje (heroe:SuperHeroe):void {
  console.log (` la identidad de Spaideman es:  ${heroe.nombre}`)
    }

 let identidad = {nombre: "Peter"}
 
function Poderes(heroes:SuperHeroe):void{
    console.log (`los poderes de spaiderman son ${heroes.superPoderes}` )
    
}

let habilidades = {superPoderes: "Super Fuerza", "trtt" }
 
console.log(identidad, )