// atributos opcionales
function dimenciones(medidas) {
    var area = medidas.ancho * medidas.largo;
    if (medidas.alto) {
        return "El area de tu casa es " + area + " mts y de alto " + medidas.alto + " mts";
    }
    else {
        return "El area de tu casa es " + area + " mts";
    }
}
console.log(dimenciones({ ancho: 10, largo: 25, alto: 12 }));
console.log(dimenciones({ ancho: 15, largo: 25 }));
