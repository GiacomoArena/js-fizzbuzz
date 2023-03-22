js-fizzbuzz
===
Consegna:   
Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

## Passaggi
- creare un ciclo for che stampa in console numeri da   i=1 a i <=100   
  ```
  for(let i = 1; i <= 100; i++){
  console.log(i)};   
  ```
.
- individuare i numeri divisibili per 3 e sostituire al numero il valore 'Fizz'
  ```
  if(i % 3 === 0 ){
    console.log("Fizz");
  }
  else {
    console.log(i);
  }
  ```
  .
- ## individuare     
  i numeri divisibili per 5 e sostituire al numero il valore 'Buzz'
  ```
  else if(i % 5 === 0 ){
    console.log("Buzz");
  }
  ```
  .
    
- ## individuare 
   i numeri che sono sia divisibili per 3 che per 5 e assegnare il valore “FizzBuzz”
   ```
  if(i % 3 === 0 && i % 5 === 0 ){
    console.log("FizzBuzz");
  }
  else if(i % 5 === 0 ){
    console.log("Buzz");
  }
  else if(i % 3 === 0 ){
    console.log('Fizz');
  }
  else {
    console.log(i);
  }
  ```
  .

## bonus
 Creare nel dom un element container "div" per poi aggiungere la classe "container "
 e anche un element container "box"
 poi attraverso append mandare a schermo i nostri risultati per poi occuparsi della parte grafica con css  
 

 ```
 const section = document.querySelector("section");
  
  const div = document.createElement('div');
  

  section.classList.add('container');
  div.classList.add('box');

  section.append(div);

 ```
.

