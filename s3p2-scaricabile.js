// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


// ESERCIZIO 7
function modificaH1() {
  document.getElementById('nome').innerHTML = "Compra al mio negozio!"  
}

// ESERCIZIO 8
function modificaSfondo (){
    document.querySelector ('body').style.backgroundColor = "pink"
}

// ESERCIZIO 9
function modificaIndirizzo(){
  document.querySelector ('span').innerText ="Via Pincopallo, 8 80100 Napoli "
}

// ESERCIZIO 10
function aggiungiClasse (){
  let nuovaClasse = document.querySelectorAll('p')
  for (i=0; i<nuovaClasse.length; i++)
  nuovaClasse[i].classList.add ('nuovoStile') //a ciascun ciclo viene aggiunta la classe 'nuovo stile' ad ognuno dei 'p'
}
// ho fatto mille ricerche per riuscire a eseguire correttamente questa funzione, non sono sicura di averne capito il senso

// ESERCIZIO 11
 function nascondiImg (){
  let imgNascosta = document.querySelectorAll ('img')
  for (i=0; i<imgNascosta.length; i++)
  imgNascosta[i].classList.toggle ('visibilityImg')
 }

// ESERCIZIO 12 (ho dovuto fare due funzioni)
function coloriRandom (num1){ //creo una funzione che mi ritorni dei numeri
  let arrayColori = [] //creo un array vuoto dove farò finire 3 numeri
  for (let i=0; i<num1; i++){
  let random1 = Math.floor (Math.random()*255) //random 1 mi da un numero casuale da 0 a 255
  let random2 = Math.floor (Math.random()*255) //random 2 mi da un numero casuale da 0 a 255
  let random3 = Math.floor (Math.random()*255) //random 3 mi da un numero casuale da 0 a 255
  arrayColori.push ('rgb(' + random1 +', ' + random2 + ', ' + random3 + ')') //pusho i 3 colori nell'array vuoto mettendo davanti rgb e le parentesi tonde con i numeri randomici all'interno 
}
 return arrayColori //ritorno l'array di colori con i numeri randomici all'interno
}
 function colorePrezzo (){
 let prezzi = document.querySelectorAll ('.prz') //richiamo la classe che ho assegnato nell'html
 let colori = coloriRandom(prezzi.length) //creo un array di colori con la stessa lunghezza di prezzi
 for (i=0; i<prezzi.length; i++){
 prezzi [i].style.color = colori[i] //do a ciascun elemento con classe prz un colore random
 }
}