let num = parseInt(prompt("Enter the number of random numbers to generate:"));
let  randomNumbers = multiRand10(num);

function rand10() {
    return Math.floor(Math.random() * 10) + 1;
}

function multiRand10(n) {
    let result = [];
    for (let i = 0; i < n ; i++) {
        result.push(rand10());
    }
    return result;
}


console.log(randomNumbers);

// console.log("Le nombre aléatoire entre 1 et 10 est " + multiRand10(n) );