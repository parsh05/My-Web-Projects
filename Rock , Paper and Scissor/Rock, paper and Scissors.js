let userScore = 0;
let compScore = 0;
let draw = 0;
const resultMsg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
  console.log(choice);
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id")
      playGame(userChoice)

  })
})

const playGame = (userChoice)=>{
  console.log("user choice = ",userChoice)
  // Generate computer choice
  const computerChoice = genComputerChoice();
  console.log("Computer choice = ",computerChoice)

  showWinner(userChoice,computerChoice);
}
const genComputerChoice =( )=>{
    const options = ["rock","paper","scissors"];
    
   let randomIdx =  Math.floor( Math.random() * 3 );
   return options[randomIdx];
}

const showWinner = (userChoice,computerChoice)=>{

  let userWin = true;
    if(userChoice==computerChoice){
       
      resultMsg.innerHTML = (`game was draw , both chose ${userChoice}`);
      resultMsg.style.backgroundColor = "brown";
      draw++;
      document.querySelector("#draw-score").innerHTML = draw;
    } else{
     
      if(userChoice==="rock" ){
        if(computerChoice==="paper") userWin = false;
      } else if(userChoice==="paper"){
        if(computerChoice==="scissors") userWin = false;
      } else if(userChoice ==="scissors"){
        if(computerChoice==="rock") userWin = false;
      }
      
      if(userWin == true) {
       
        resultMsg.innerText = `You Won! Your ${userChoice} beats ${computerChoice}`;
        resultMsg.style.backgroundColor = "green";
        userScore++;
        document.querySelector("#user-score").innerHTML = userScore;
      } else{
        resultMsg.innerHTML = `You lose, ${computerChoice} beats your ${userChoice}`;
        resultMsg.style.backgroundColor = "red";
        compScore++;
        document.querySelector("#computer-score").innerHTML = compScore;
      }
    }
}