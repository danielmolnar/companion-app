fetch("https://muc-2020-w1-student-api.vercel.app/api/journals")
  .then((res) => res.json())
  .then((entries) => {
    entries.forEach(renderEntries);
  });

const container = document.querySelector(".container");

function renderEntries(entry, index) {
  const card = document.createElement("div");
  card.classList.add("journal", "sh-dark");
  container.appendChild(card);

  card.innerHTML = `   <p class="sebo-14-dark-up">Date</p>
        <div class="journal__div">
            <p class="reg">Rating:</p>
            <div id= "${index}-stars" class="stars">
            </div>
        </div>
        <div class="journal__div">
          <p class="reg">Comprehension:</p>
          <div id="${index}-comp" class="comprehension">
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

  // Create Stars

  const starsContainer = document.getElementById(`${index}-stars`);
  const star1 = document.createElement("div");
  const star2 = document.createElement("div");
  const star3 = document.createElement("div");
  const star4 = document.createElement("div");
  const star5 = document.createElement("div");
  starsContainer.append(star1, star2, star3, star4, star5);

  // Fill Stars

  const starsArr = [star1, star2, star3, star4, star5];
  //const starsArr = Array.from(stars);

  const untilStar = starsArr.slice(0, entry.rating);
  untilStar.forEach((untilStarItem) => {
    untilStarItem.classList.add("star__full");
  });

  const fromStar = starsArr.slice(entry.rating);
  fromStar.forEach((fromStarItem) => {
    fromStarItem.classList.add("star__empty");
  });

  // Create Comprehension

  const compContainer = document.getElementById(`${index}-comp`);
  const comp1 = document.createElement("div");
  const comp2 = document.createElement("div");
  const comp3 = document.createElement("div");
  const comp4 = document.createElement("div");
  const comp5 = document.createElement("div");
  const comp6 = document.createElement("div");
  const comp7 = document.createElement("div");
  const comp8 = document.createElement("div");
  const comp9 = document.createElement("div");
  const comp10 = document.createElement("div");
  compContainer.append(
    comp1,
    comp2,
    comp3,
    comp4,
    comp5,
    comp6,
    comp7,
    comp8,
    comp9,
    comp10
  );

  //Fill Comprehension

  const comps = [
    comp1,
    comp2,
    comp3,
    comp4,
    comp5,
    comp6,
    comp7,
    comp8,
    comp9,
    comp10,
  ];
  const compArr = Array.from(comps);

  const untilComp = compArr.slice(0, entry.comprehension);
  untilComp.forEach((untilCompItem) => {
    untilCompItem.classList.add("comp__full");
  });

  const fromComp = compArr.slice(entry.comprehension, 10);
  fromComp.forEach((fromCompItem) => {
    fromCompItem.classList.add("comp__empty");
  });

  return entry;
}
