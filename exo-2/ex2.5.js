let favoritenum;

do {
    favoritenum = prompt("Quel est ton numéro favoris?");
    if (favoritenum !== 42) {
        alert("Etes-vous sûre?");
    } 
} while ((favoritenum) !== 42);

