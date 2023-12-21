console.log('Js ok');


//Prendo il documento sul quale scrivere
const stampa = document.getElementById('results-list');
const quadrato = document.getElementById('results-squere')
//Creo la lista
let lista = '<ul>'

//Preparo il for per stampare i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    let risultato = i;
    if((i % 3 === 0) && (i % 5 === 0)){
        risultato = 'FizzBuzz';
    }else if(i % 3 === 0){
        risultato = 'Fizz';
    
    }else if(i % 5 === 0){
        risultato = 'Buzz';
        
    }
    console.log(risultato);


    // aggiungo gli li alla lista
    lista += `<li class="${risultato}">${risultato}</li>`


}

    //chiudo la lista
    lista += '</ul>'

    stampa.innerHTML = lista; 

