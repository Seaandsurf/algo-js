var min = prompt("Entrez la valeur minimum");
var max = prompt("Entrez la valeur maximum");
var current = prompt("Entrez la valeur actuelle");

if (min > max) {
    console.log("Il me semble que vous avez mal compris, la valeur minimale doit être inférieure à la valeur maximale. Veuillez réessayer.");
} else {
    if (current >= min && current <= max) {            // CURRENT est dans l'intervalle des valeurs de MAX et MIN (si c'est le cas: vrai / sinon: faux)
        console.log("Le nombre actuel se situe entre la valeur minimale et maximale");
    }
    else {
        console.log("Le numéro est en dehors de la range");
    }
}
