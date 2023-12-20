console.log('Js ok');



//Preparo il for per stampare i numeri da 1 a 100
for(let i = 1; i <= 100; i++){
    let risultato = i;
    if((i % 3 === 0) && (i % 5 === 0)){
        risultato = 'FizzBuzz';
    }else if(i % 3 === 0){
        risultato = 'Fizz'
    }else if(i % 5 === 0){
        risultato = 'Buzz'
    }
    console.log(risultato);
}
