// variables
const theButtons = document.querySelectorAll("#buttonHolder img"),
  puzzleBoard = document.querySelector(".puzzle-board"),
  puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
  dropZones = document.querySelectorAll(".drop-zone"),
  puzzlePieceDiv = document.querySelector(".puzzle-pieces"),
  resetbutton = document.querySelector("#resetBut");
// store the dragged piece in a global variable
// we will need it in the handleDrop function
let draggedPiece;
let bgroundid = 0;

// data structure to hold the image paths for each background
const puzzles = {
  0: [
    "images/topLeft0.jpg",
    "images/topRight0.jpg",
    "images/bottomLeft0.jpg",
    "images/bottomRight0.jpg",
  ],
  1: [
    "images/topLeft1.jpg",
    "images/topRight1.jpg",
    "images/bottomLeft1.jpg",
    "images/bottomRight1.jpg",
  ],
  2: [
    "images/topLeft2.jpg",
    "images/topRight2.jpg",
    "images/bottomLeft2.jpg",
    "images/bottomRight2.jpg",
  ],
  3: [
    "images/topLeft3.jpg",
    "images/topRight3.jpg",
    "images/bottomLeft3.jpg",
    "images/bottomRight3.jpg",
  ],
};

// functions
function changeBGImage() {
  // console.log("changeBGImage called");
  // url('../images/backGround0.jpg');

  bgroundid = this.id;
  puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;

  // Update puzzle piece images based on the selected background
  puzzlePieces.forEach((piece, index) => {
    piece.src = puzzles[this.id][index];
  });

  // Move all pieces back to the puzzle piece container
  puzzlePieces.forEach((piece) => puzzlePieceDiv.appendChild(piece));
}

function handleStartDrag() {
  console.log(`started dragging ${this}`);
  draggedPiece = this;
}

function handleDragOver(e) {
  e.preventDefault();
  console.log("Dragged Over");
}

function handleDrop() {
  // Check if the drop zone already has a piece
  if (this.children.length > 0) {
    console.log("Drop zone is already occupied");

    // Swap the pieces
    const existingPiece = this.children[0];
    puzzlePieceDiv.appendChild(existingPiece); // Move the existing piece back to the container
    this.appendChild(draggedPiece); // Place the dragged piece in the drop zone
  } else {
    console.log("Dropped");
    this.appendChild(draggedPiece); // Place the dragged piece in the drop zone
  }
}

function resetpic() {
  puzzlePieces.forEach((piece) => puzzlePieceDiv.appendChild(piece));
  puzzleBoard.style.backgroundImage = `url(images/backGround${bgroundid}.jpg)`;
  puzzlePieces.forEach((piece, index) => {
    piece.src = puzzles[piece][index];
  });
}

// event Listeners
theButtons.forEach((button) => button.addEventListener("click", changeBGImage));

puzzlePieces.forEach((piece) =>
  piece.addEventListener("dragstart", handleStartDrag)
);

dropZones.forEach((zone) => zone.addEventListener("dragover", handleDragOver));

dropZones.forEach((zone) => zone.addEventListener("drop", handleDrop));

puzzlePieceDiv.addEventListener("dragover", handleDragOver);
puzzlePieceDiv.addEventListener("drop", handleDrop);

resetbutton.addEventListener("click", resetpic);
