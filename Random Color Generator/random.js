let boxes = document.querySelectorAll(".random-number");
// let btns = document.querySelector(".copy");
function genFunction(){
  for( let box in boxes){
    
  boxes.forEach(box => {
    let randomNo = Math.floor(Math.random() * 1000000);
  box.innerText=`Hex-value: #${randomNo}`;
  box.style[`background-color`]= `#${randomNo}`;
  });
}
}

function copyColor(){
    let box = this;
    
}