const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  let body= document.querySelector('body');
  body.addEventListener('keydown', function(e){
    let keyPressNum = 0;
    let correctKeys = 0;
    if (e.key === codes[keyPressNum]) {
      correctKeys+=1;
    }
    
    if (correctKeys === codes.length) {
      
    }
  })
  
}

init();
