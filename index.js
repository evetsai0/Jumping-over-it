const cardcontainer = document.querySelector(".card-container");
let card = [];
let cardOne, cardTwo;
let LockBoard = false;
let score = 0;

fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

document.querySelector(".score").textContent = score;

function resetBoard() { //restart
  LockBoard = false;
  CardOne = null;
  CardTwo = null;
  
}

function FlipCard{
	if(LockBoard == false) return;
	if(CardOne == current){
		return;
	}
	this.classList.add("flipped");

	if (!CardOne) {
    CardOne = this;
    return;
    }

  CardTwo = this;
  score++;
  document.querySelector(".score").textContent = score;
  lockBoard = true;

  checkForMatch();
}