const prompt = require("prompt-sync")()

let tab = [];
for (let i=0 ; i<5 ; i++){
    let N = prompt("entrer l'entier "+(i+1)+" : ");
    tab.push(N);
}

let carre = 0;
for (let i=0 ; i<5 ; i++){
    carre = tab[i]*tab[i];
    console.log(tab[i]," au carré est :",carre)
}