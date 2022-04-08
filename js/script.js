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

//playng my rules
for(i = 1; i<=3; i++){

    //button creator
    const createButton = document.createElement('button');
    console.log(button);
    createButton.className = "bottone" + i;
    createButton.append('MILESTONE ', i)
    //div creator
    const createDiv = document.createElement('div');
    console.log(createDiv);
    createDiv.className = "div" + i;
    createDiv.style.cssText = "width:100%; display:flex; flex-wrap: wrap; justify-content: space-around"
    //button and div adder
    const body = document.querySelector('body');
    body.append(createButton);
    body.append(createDiv)
}

// calling the buttons
    const btn1 = document.querySelector('.bottone1');
    const btn2 = document.querySelector('.bottone2');
    const btn3 = document.querySelector('.bottone3');

// calling the divs
    const div1 = document.querySelector('.div1');
    const div2 = document.querySelector('.div2');
    const div3 = document.querySelector('.div3');



button.addEventListener('click', function(){
    for(let i = 0; i <= limit; i++){
        console.log(i);
    }
})

// **MILESTONE 1**
// Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

btn1.addEventListener('click', function(){
    for(let i = 1; i <= limit; i++){
        if(!(i%3) && (i%5)){
            console.log('divisibile per 5 e 3',i)
            let titles = document.createElement("h1");
            titles.append('FizzBuzz');
            console.log(titles)
            div1.append(titles)
            titles.style.cssText = "margin-right:20px";

        }else if(!(i % 3)){
            console.log('divisibile per 3',i)
            let titles = document.createElement("h1");
            titles.append('Fizz');
            console.log(titles)
            div1.append(titles)
            titles.style.cssText = "margin-right:20px";
        } else if(!(i % 5)){
            console.log('divisibile per 5',i)
            let titles = document.createElement("h1");
            titles.append('Buzz');
            console.log(titles)
            div1.append(titles)
            titles.style.cssText = "margin-right:20px";

        }
    }

})

// **MILESTONE 2**
// Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.

btn2.addEventListener('click', function(){
    for(let i = 1; i <= limit; i++){
            let box = document.createElement("div");
            box.append(i);
            box.style.cssText = "width: 150px; height: 150px; background-color: red; font-size: 100px; color: white; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 20px "
            console.log(box)
            div2.append(box)
    }
})
// **MILESTONE 3**
// Applica uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

btn3.addEventListener('click', function(){
    for(i = 1; i<= limit; i++){
        if(!(i%3) && (i%5)){
            let box = document.createElement("div");
            box.append("FizzBuzz");
            box.style.cssText = "width: 150px; height: 150px; background-color: yellowgreen; font-size: 30px; color: white; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 20px "
            console.log(box)
            div3.append(box)
        }else if(!(i%3)){
            let box = document.createElement("div");
            box.append("Fizz");
            box.style.cssText = "width: 150px; height: 150px; background-color: yellow; font-size: 70px;  display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 20px "
            console.log(box)
            div3.append(box)
        }else if(!(i % 5)){
            let box = document.createElement("div");
            box.append("Buzz");
            box.style.cssText = "width: 150px; height: 150px; background-color: bisque; font-size: 70px;  display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 20px; color: brown; "
            console.log(box)
            div3.append(box)

        }else{
            let box = document.createElement("div");
            box.append(i + " Not Fizz/Buzz ");
            box.style.cssText = "width: 150px; height: 150px; background-color: red; font-size: 18px; color: white; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 20px "
            console.log(box)
            div3.append(box)
        }
    }
})