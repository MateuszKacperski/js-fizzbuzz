Ciao ragazzi,<br>
Esercizio di oggi: **FizzBuzz**<br>
nome repo: `js-fizzbuzz`

### Consegna:
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:

- per i multipli di 3 stampi “Fizz” al posto del numero.
- per i multipli di 5 stampi “Buzz”.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

### Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per un altro?
Abbiamo visto qualcosa di particolare che possiamo usare?
### Come strutturare la consegna
1. Inizializziamo la repo con git, aggiungiamo un file readme.md vuoto e facciamo il primo push su github
2. Creiamo lo scaffolding di base con la struttura che segue:
`js/script.js 
css/style.css
index.html
readme.md`
Poi facciamo il commit e il **secondo push**
3. Nel file readme.md **scomponiamo il problema** in passaggi semplici descritti **in italiano**. Poi facciamo il commit e il **terzo push.**
4. Procediamo a svolgere l'esercizio in javascript,  facendo **un adeguato numero** di commit e push.

### BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
### BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
 Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.
 
Buon lavoro e buon divertimento!




# Scompongo in passaggi

- 1 Creo un `for` per prendere i numeri da 1 a 100.
- 2 Stampo i numeri.
- 3 Faccio il controllo per vedere se il numero è un multiplo di 3.
- 4 Faccio il controllo per vedere se il numero è un multiplo di 4.
- 5 Faccio il controllo per vedere se il numero è un multiplo sia di 3 che di 5.
- 6 Sostituisco i numeri con le scritte in caso le condizioni risultano vere.

