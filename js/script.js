// Esercizio di oggi: **FizzBuzzDom**
// nome repo: js-fizzbuzzdom
// **Consegna:**
// Scrivi un programma che stampi in console i numeri da 1 a 100.
// **MILESTONE 1**
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// **MILESTONE 2**
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// **MILESTONE 3**
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.
// **Prima di partire a scrivere codice poniamoci qualche domanda:**
// Come faccio a sapere se un numero è divisibile per un altro? Abbiamo visto qualcosa di particolare che possiamo usare? Come creare nuovi elementi html e appenderli al container?
// **Consigli del giorno:**
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
// Buon lavoro e buon divertimento!  :orco_giapponese:


// Scrivi un programma che stampi in console i numeri da 1 a 100.
const limit = 100;
const button = document.querySelector('button');
// button.append('funziono');
console.log(button);

button.addEventListener('click', function(){
    for(let i = 0; i <= limit; i++){
        console.log(i);
    }
})

// **MILESTONE 1**
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
