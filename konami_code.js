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
  let keyPressNum = 0;
  let correctKeys = 0;
  body.addEventListener('keydown', function(e){
    console.log(e.key, keyPressNum );
    if (e.key === codes[keyPressNum]) {
      correctKeys+=1; 
      console.log(` and index is ${keyPressNum} and `  + ' & correct key count is ' + correctKeys);
    }
     keyPressNum += 1 ;
    
    if (correctKeys === codes.length) {
      alert ('Well done!!');
    } else {
      if (keyPressNum === 10 && correctKeys != codes.length) {
        alert ('NOPE - NOT RIGHT');
        correctKeys = 0;
        keyPressNum = 0;
        
      } 
    }
    
  })
  
}

init();
