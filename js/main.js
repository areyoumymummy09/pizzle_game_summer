//variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
  puzzleBoard = document.querySelector(".puzzle-board");
//console.log(theButtons);
//console.log(puzzleBoard);

function changeBGImage() {
  //console.log("changeBGImage called");
  //url('../images/backGround0.jpg');
  puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
}

//event Listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));
