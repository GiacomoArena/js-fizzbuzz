


for(let i = 1; i <= 100; i++){
  const section = document.querySelector("section")
  
  const div = document.createElement('div');
  div.classList.add('container')

  const div2 = document.createElement('div');
  div.classList.add('box')
  
  
  section.append(div);
  div.append(i);

  if(i % 3 === 0 && i % 5 === 0 ){
    div.innerHTML = "FizzBuzz";
    console.log("FizzBuzz");
  }
  else if(i % 5 === 0 ){
    div.innerHTML = "Buzz";
    console.log("Buzz");
  }
  else if(i % 3 === 0 ){
    div.innerHTML = "Fizz";
    console.log('Fizz');
  }
  else {
    console.log(i);
  }
  

  
  console.log(section);
}