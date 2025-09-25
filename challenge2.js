const prompt = require("prompt-sync")()

let TAB = [23,12,33,5,6,4,4,3,90,99];
let somme = 0;
let m
let i = 0;
for(i = 0; i<=9 ; i++)
    {
    somme += TAB[i];
}
m=somme/10;
console.log("somme =",somme);
console.log("moyenne : ",m);
