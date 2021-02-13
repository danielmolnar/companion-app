fetch("https://muc-2020-w1-student-api.vercel.app/api/journals")
  .then((res) => res.json())
  .then((entries) => {
    entries.forEach(renderEntries);
    entries.forEach(createStars);
  });

const container = document.querySelector(".container");

function renderEntries(entry, i) {
  const card = document.createElement("div");
  card.classList.add("journal", "sh-dark");
  container.appendChild(card);
  const id = entry.id;
  card.innerHTML = `   <p class="sebo-14-dark-up">Date</p>
        <div class="journal__div">
            <p class="reg">Rating:</p>
            <div class="stars"></div>
        </div>
        <div class="journal__div">
          <p class="reg">Comprehension:</p>
          <div class="comprehension">
          </div>
        </div>
         
        <div class="journal__div">
        <p class="reg">Motto:</p>
        <p class="motto">"${entry.motto}"</p>
    </div>
    <div class="journal__div">
        <p class="reg">Notes:</p>
        <p class="notes">"${entry.notes}"
        </p>
    </div>`;

  // paintStars(entry.rating, entry.id);

  //paintStars(); */

  return entry;
}

function createStars() {
  const starsContainer = document.getElementsByClassName("stars");
  const star1 = document.createElement("div");
  const star2 = document.createElement("div");
  const star3 = document.createElement("div");
  const star4 = document.createElement("div");
  const star5 = document.createElement("div");
  starsContainer.appendChild(star1, star2, star3, star4, star5);

  const stars = [star1, star2, star3, star4, star5];

  stars.map((star) => star.classList.add("star__empty"));

  //return stars;
}

function paintStars(number, stars) {
  const starsArr = Array.from(stars);

  // starsArr = [star1, star2, star3, star4, star5]

  const untilStar = starsArr.slice(0, number + 1);

  untilStar.forEach((untilStarItem) => {
    untilStarItem.classList.add("star__full");
    untilStarItem.classList.remove("star__empty");
  });
}

/* const stars = document.querySelectorAll(.star__empty)
const starsArr = Array.from(stars) */

/* function createStars(number, entry) {
  const id = entry.id;
  const stars = document.querySelector(id);
  const starsArr = Array.from(stars);

  // starsArr = [star1, star2, star3, star4, star5]

  const untilStar = starsArr.slice(0, number + 1);

  console.log(untilStar);

  untilStar.forEach((untilStarItem) => {
    untilStarItem.classList.add("star__full");
    untilStarItem.classList.remove("star__empty");
  });
}
 */
