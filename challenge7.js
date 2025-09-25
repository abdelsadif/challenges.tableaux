const prompt = require("prompt-sync")()

const voy = ['a','e','i','o','u','y'];

chaine = prompt("entrer une phrase : ");
conteur = 0;

for (let i=0 ; i<= chaine.length ; i++){
    if (voy.includes(chaine[i])){
        conteur = conteur + 1;
    }
}
console.log("nombre de voyelle est :",conteur);


