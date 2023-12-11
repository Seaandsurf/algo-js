
function randomizeCast() {
    let movie = {
    name: "Spider-man",
    ProductionYear: "2004",
    casting: {
        actor1: "Tobey Maguire, ",
        actor2: "James Franco, ",
        actor3: "Rosemary Harris "
    }
}
    return Math.floor(Math.random(casting) * 3) + 1;
}

console.log(`Les acteurs sont: ${randomizeCast()}`);

// function rand10() {
//     
// }

// console.log(`Le nombre aléatoire entre 1 et 10 est ${rand10()}`);