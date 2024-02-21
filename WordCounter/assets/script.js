
var addText = document.querySelector('#addText')
var textSpace = document.querySelector('#textSpace')

addText.addEventListener('click', textInput)

function textInput (){ 
   var addTextEL = document.createElement("div");
   textSpace.appendChild(addTextEL);
   
}