const cardcontainer = document.querySelector(".card-container");
let card = [];
let cardOne, cardTwo;
let LockBoard = false;
let score = 0;

 const items= {
  "https://evetsai0.github.io/cardfronts/cat.jpg"
  "https://evetsai0.github.io/cardfronts/creeper.jpg"
  "https://evetsai0.github.io/cardfronts/deer.jpg"
  "https://evetsai0.github.io/cardfronts/dog.jpg"
  "https://evetsai0.github.io/cardfronts/doraemon.jpg"
  "https://evetsai0.github.io/cardfronts/eevee.jpg"
  "https://evetsai0.github.io/cardfronts/ghost.jpg"
  "https://evetsai0.github.io/cardfronts/kirby.jpg"
 }
fetch("./data/cards.json")
  .then((res) => res.json())
  .then((data) => {
    cards = [...data, ...data];
    shuffleCards();
    generateCards();
  });

document.querySelector(".score").textContent = score;

function Reset() { //restart
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
  LockBoard = true;

  checkForMatch();
}

function unflipCards() {
    CardOne.classList.remove("flipped");
    CardTwo.classList.remove("flipped");
    Reset();
}


