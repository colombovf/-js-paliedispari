//Chiedere all’utente di inserire una parola
/*let parola_inserita = prompt("Inserisci una parola per scoprire se è palindroma o meno:");
console.log(verificaPalindroma(parola_inserita));
//Usare la funzione per capire se la parola è effettivamente palindroma



//-------------------------Creazione di funzioni-------------------------
//Creare una funzione per capire se la parola inserita è palindroma e poi usate quella funzione appena dichiarata
function verificaPalindroma (parola) {
    let lunghezza_parola = parola.length;
    for (let i = 0; i < lunghezza_parola / 2; i ++) {
        if (parola[i] !== parola[lunghezza_parola - 1 - i]){
            return "Non è palindroma";
        }
    }
    return "E' palindroma";
} 

*/
//-------------------------Fine esercizio sulle parole palindrome-------------------------





let numero_inserito = parseInt(prompt("Scegli se nserire un numero pari o dispari da 1 a 5:"));
let numero_random = parseInt(Math.floor(Math.random() * 5 + 1));
console.log("Il numero scelto dal computer: " + numero_random);
console.log("Il numero scelto che hai scelto è: " + numero_inserito);
console.log("La somma dei numeri scelti è: " + somma_dei_numeri);
let scelta_PoD;

do { 
    scelta_PoD = prompt("Scegli pari o dispari");
} while (scelta_PoD != "pari" && scelta_PoD != "dispari");


console.log(verificaPariDispari(numero_inserito, numero_random, scelta_PoD));

//-------------------------Creazione di funzioni-------------------------
function verificaPariDispari(numero1, numero2, scelta) {
    let somma = numero1 + numero2;
    if (somma % 2 == 0 && scelta == "pari") {
        return "Il numero è pari, hai vinto!";
    }
    if (somma % 2 != 0 && scelta == "dispari") {
        return "Il numero è dispari, hai vinto!";
    }
    return "Ci dispiace ma hai perso!";
}