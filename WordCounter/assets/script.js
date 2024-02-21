
var addText = document.querySelector('#addText')
var textSpace = document.querySelector('#textSpace')

addText.addEventListener('click', textInput)

//function to input word 
function textInput (){ 
   var addTextEL = document.createElement("div");
   textSpace.appendChild(addTextEL);

   var input = document.querySelector('#word').value ;

   textSpace.textContent = input
   

}