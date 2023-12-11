let movie = {
    name: "Spider-man",
    ProductionYear: "2004",
    casting: {
        actor1: "Tobey Maguire, ",
        actor2: "James Franco, ",
        actor3: "Rosemary Harris "
    }
}

function askTvSerie() {

    let choice = prompt("Citez un film avec une arraignée:");
    while (choice !== movie.name) {
        choice = prompt("Essaye encore ! Hint: Elle est rouge...")
    }

    let choice2 = prompt("Peux-tu me dire l'année de production?")
    while (choice2 !== movie.ProductionYear) {
        choice2 = prompt("Hint: ca commence par 2 et fini par 4...")
    }

    let choice3 = prompt("Cite moi au moins 1 acteur:")
    while (choice3 !== movie.casting.actor1 && choice3 !== movie.casting.actor2 && choice3 !== movie.casting.actor3) {
        choice3 = prompt("Allez tu y es presque !!")
    } alert("Félicitations, vous avez répondu correctement!")

}

askTvSerie();



// function quizGame() {
//     let movie = {
//         name: "Spider-man",
//         ProductionYear: "2004",
//         casting: {
//             actor1: "Tobey Maguire, ",
//             actor2: "James Franco, ",
//             actor3: "Rosemary Harris "
//         }
//     }

//     // Première étape : Vérification du nom du film
//     let nameChoice = prompt("Citez un film avec une araignée:");

//     if (nameChoice === movie.name) {
//         // Deuxième étape : Vérification de l'année de production
//         let yearChoice = prompt("Bien joué ! Maintenant, en quelle année a été produit le film?");
//         if (yearChoice === movie.ProductionYear) {
//             // Troisième étape : Vérification des acteurs
//             let actorsChoice = prompt("Excellent ! Maintenant, citez au moins un acteur du film:");
//             let actors = movie.casting.actor1 + movie.casting.actor2 + movie.casting.actor3;

//             while (actorsChoice !== actors) {
//                 actorsChoice = prompt("Essaye encore ! Hint: Les acteurs sont " + actors);
//             }

//             // Si vous atteignez cette ligne, cela signifie que toutes les réponses sont correctes
//             alert("Félicitations, vous avez répondu correctement à toutes les questions!");
//         } else {
//             // Si la deuxième réponse est incorrecte
//             alert("Dommage, la réponse à la deuxième question est incorrecte. Fin du jeu.");
//         }
//     } else {
//         // Si la première réponse est incorrecte
//         alert("Dommage, la réponse à la première question est incorrecte. Fin du jeu.");
//     }
// }

// // Appeler la fonction pour exécuter le jeu
// quizGame();

