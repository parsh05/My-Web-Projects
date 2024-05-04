let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset_button")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")


let turnX = true;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
  box.addEventListener("click", () =>{
  console.log("box was clicked");
  if(turnX == true){
    box.innerHTML = "X";
    turnX= false;
  } else{
    box.innerHTML = "O";
    turnX = true;
  } 
   box.disabled = true;
   checkWinner();
  })
});

const disableBoxes = () => {
  for(let box of boxes ){
    box.disabled = true;
  }
}
const enableBoxes = () => {
  for(let box of boxes ){
    box.disabled = false;
    box.innerHTML=""
  }
}


const showWinner = (winner)=>{
    msg.innerHTML = `Congratulations! , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    
}

const checkWinner = ()=>{
  for(let pattern of winPatterns){
    
    let pos1 =  boxes[pattern[0]].innerHTML ;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;
    if(pos1 != "" && pos1 == pos2 && pos1==pos3 ){
      showWinner(pos1);
      disableBoxes();
    }
  }
}

const resetGame = () => {
  turnX=true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

newGameBtn.addEventListener("click",resetGame);
reset_btn.addEventListener("click",resetGame);