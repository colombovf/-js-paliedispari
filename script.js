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
let numero_random = parseInt(Math.floor(Math.random() * 11 / 2));
let somma_dei_numeri = numero_inserito + numero_random;
console.log(numero_random);
console.log(numero_inserito);
console.log(somma_dei_numeri);
console.log(verificaPariDispari(somma_dei_numeri));

//-------------------------Creazione di funzioni-------------------------
function verificaPariDispari(numero) {
    if (numero % 2 == 0) {
        return "Il numero è pari";
    }
    return "Il numero è dispari";
}