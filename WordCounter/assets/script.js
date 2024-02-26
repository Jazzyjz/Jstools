
var addText = document.querySelector('#wordInput')
var textSpace = document.querySelector('#textSpace')
var input = document.querySelector('#word');

addText.addEventListener('click', textInput)

//function to input word 
function textInput (e){ 
   e.preventDefault();
   var addTextEL = document.createElement("div");
   textSpace.appendChild(addTextEL);

   var word = input.value;
   textSpace.textContent = word;
   console.log(word);

   wordcounter(word)

}

//function to count letters in word

function wordcounter(word){
   // evaluate how many letters in word
   let length = word.length;

   const words = word.split(' ');
   console.log(words.length);

   console.log(length);
}