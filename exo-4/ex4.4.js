let inputAr = ["Alexis", "Alice", "Aurelien", "Cassidy", "Damien", "Giuseppe", "Huseyin", "Jeremy", "Joshua", "Julien", "Nicolas", "Maoro", "Marvin", "Noé", "Otman", "Robin", "Tess", "Thomas", "Ugur", "Winona"];

function pickLearner(inputAr) {
    let newArray = [];
    for (let i = 0; i < 5; i++) {
        let randomTab = Math.floor(Math.random() * inputAr.length);
        newArray.push(inputAr[randomTab]);
    }
    return newArray;
}

let randomSelection = pickLearner(inputAr);
console.log(randomSelection);
// console.log(inputAr.length);