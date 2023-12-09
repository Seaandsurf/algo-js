let taba = [1,2,3,4,5];
let tabb = [100,101,102];


console.log(taba);
console.log(tabb);
console.log(`Voici le contenu du tableau 1 AVANT fusion: ${taba} et celui du tableau 2: ${tabb}`);
console.log(`il y a donc ${taba.length} numeros dans le tableau 1 et ${tabb.length} dans le tableau 2 AVANT fusion`);

for (let i = 0; i < tabb.length; i++){
    taba.push(tabb[i]);
}

console.log(`Voici le contenu du tableau 1 APRES fusion: ${taba} et celui du tableau 2: ${tabb}`);
console.log(`il y a donc ${taba.length} numeros APRES fusion`);
