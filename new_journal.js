let squareCounter = {};

//STARS

const stars = document.querySelectorAll(".star");
const starsArr = Array.from(stars);
let untilStar = "";
let counter;

starsArr.forEach(fillStars);

function fillStars(star, i) {
  star.addEventListener("click", () => {
    starsArr.forEach((starArrowItem) => {
      starArrowItem.classList.remove("star__full");
    });

    //star.classList.add('star__full')

    untilStar = starsArr.slice(0, i + 1);

    untilStar.forEach((untilStarItem) => {
      untilStarItem.classList.add("star__full");
    });
    console.log(untilStar.length);
    counter = untilStar.length;
    //return untilStar;
  });
}

const button = document.querySelector("#btn-save");

button.addEventListener("click", () => {
  console.log("button", counter);
});

//console.log(counter)
//const length = untilStar.length;
//console.log("das hier", length);

//COMPREHENSION

const squares = document.querySelectorAll(".square");
const squaresArr = Array.from(squares);
let untilSquare;
// let squareCounter;

squaresArr.forEach(fillSquares);

function fillSquares(square, i) {
  square.addEventListener("click", () => {
    squaresArr.forEach((squaresArrowItem) => {
      squaresArrowItem.classList.remove("comp__full");
    });

    square.classList.add("comp__full");

    untilSquare = squaresArr.slice(0, i);

    untilSquare.forEach((untilSquareItem) => {
      untilSquareItem.classList.add("comp__full");
    });
    squareCounter = { i };
    return squareCounter;
  });
}

console.log(squareCounter);

/* const rating = howManyStars;
const comprehension = howManySquares;
console.log(howManySquares);
console.log(howManyStars); */

/* const motto = ;
const notes = ; */

/* 
fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newTodo),
})
  .then((res) => res.json())
  .then((data) => console.log(data));
 */
