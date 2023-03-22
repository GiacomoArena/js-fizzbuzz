


for(let i = 1; i <= 100; i++){
  const section = document.querySelector("section");
  
  const div = document.createElement('div');
  

  section.classList.add('container');
  div.classList.add('box');

  section.append(div);

  if(i % 3 === 0 && i % 5 === 0 ){
    div.innerHTML = "FizzBuzz";
    div.style.cssText = "background-color:lightblue; ";
    console.log("FizzBuzz");
  }
  else if(i % 5 === 0 ){
    div.innerHTML = "Buzz";
    div.style.cssText = "background-color:lightgreen; ";
    console.log("Buzz");
  }
  else if(i % 3 === 0 ){
    div.innerHTML = "Fizz";
    div.style.cssText = "background-color:lightcoral; ";
    console.log('Fizz');
  }
  else {
    div.innerHTML = i;
    console.log(i);
  }
  

  
  console.log(section);
}