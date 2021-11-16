// ****** esercizio 1
// Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// const primaParola = prompt("Inserisci la prima parola");
// console.log("La parola inserita è: " + primaParola);

// function palindroma(parola){
// //creo un array vuoto
// const arrayPrimaParola = [];

// //popolo il mio array vuoto con le lettere, in ordine contrario, della parola inserita dall'utente 
// for (i = parola.length - 1; i >= 0; i--) {
//     arrayPrimaParola.push(parola[i]);
// }
// console.log("Array con lettere inserite al contrario: " + arrayPrimaParola);

// //creo la variabile che conterrà la mia parola processata
// let parolaPalindroma = "";
// //riempio la mia variabile estraendo le lettere dal mio array
// for(i = 0; i < arrayPrimaParola.length; i++) {
//     parolaPalindroma = parolaPalindroma +  arrayPrimaParola[i];
// }

// console.log("Parola scritta al contrario " + parolaPalindroma);

// //confronto la parola inserita con la mia variabile
// if (parola == parolaPalindroma) {
//     return "parola palindroma";
    
// }   return "parola non palindroma";
// }

// const risultato = palindroma(primaParola);

// console.log("La parola inserita è una " + risultato);

// ****** esercizio 2
// Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


//chiedo all'utente cosa sceglie fra Pari o Dispari
const sceltaUtente = prompt("Scegli Pari o Dispari");

//chiedo all'utente il suo numero da uno a cinque
let numero = parseInt(prompt("Inserisci un numero da uno a cinque"));

console.log("Hai scelto " + sceltaUtente + " e il numero che hai scelto è: " + numero);

//creo la funzione per generare il numero random del computer
function numberGenerator() {
    let number = Math.floor(Math.random() * 5) + 1;
    return number;
}

exampleNumber = numberGenerator();

console.log("Il numero del computer è: " + exampleNumber);

//creo la funzione per determinare se la somma dei numeri è pari o dispari e chi di conseguenza abbia vinto
function result(number1, number2) {
    let vittoria = "";
    let totale = number1 + number2;
    console.log("La somma dei due numeri è: " + totale);
    if (totale % 2 == 0) {
        vittoria = "pari";
    } else {
        vittoria = "dispari"
    }
    if (vittoria == sceltaUtente) {
        console.log("Hai vinto!")
    } else {
        console.log("Hai perso!");
    }
    return vittoria;
}

let risultato = result(numero, exampleNumber);

console.log("Il risultato è: " + risultato);
