
var addText = document.querySelector('#wordInput')
var textSpace = document.querySelector('#textSpace')
var input = document.querySelector('#word');

addText.addEventListener('click', textInput)

//function to input word 
function textInput (e){ 
   e.preventDefault();
   var addTextEL = document.createElement("div");
   textSpace.appendChild(addTextEL);

   textSpace.textContent = input.value;
   console.log(input.value);
   
   

}