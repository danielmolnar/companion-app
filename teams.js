const wholeTeam = [
  "Andre T.",
  "Andre W.",
  "Anita",
  "Calvin",
  "Daniel",
  "Emmanuel",
  "Karin",
  "Lea",
  "Maize",
  "Marlena",
];



const container = document.querySelector(".main-container");


for (i = 0, a = 1; i < wholeTeam.length, a <= (wholeTeam.length / 5); i = i + 5, a++) {
  const section = document.createElement("section");
  section.classList.add("team");
  container.appendChild(section);
  section.innerHTML = `
    <p class="team__headline"> Team  ${a.toString()}</p>
    <div class="team__member"> ${wholeTeam[i]} </div>
    <div class="team__member"> ${wholeTeam[i + 1]} </div>
    <div class="team__member"> ${wholeTeam[i + 2]} </div>
    <div class="team__member"> ${wholeTeam[i + 3]} </div>
    <div class="team__member"> ${wholeTeam[i + 4]} </div>`
}

