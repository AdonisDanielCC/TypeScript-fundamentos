var casas_HP = [" Azul", "Roja", "Verde", "Gris"];
function sombrero(todas_las_casas_de_colores) {
    var indice_random = Math.floor(Math.random() * todas_las_casas_de_colores.length);
    return todas_las_casas_de_colores[indice_random];
}
var mi_casa = sombrero(casas_HP);
console.log("Bienvenidos a " + mi_casa);
var materias = [4, 9, 12, 22];
function materias_semestre(materias_) {
    var indice_random = Math.floor(Math.random() * materias_.length);
    return materias_[indice_random];
}
var mis_materias = materias_semestre(materias);
console.log("Deber cursar " + mis_materias + " materias en " + mi_casa);
