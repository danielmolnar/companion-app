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

for (i = 0; i < wholeTeam.length; i = i + 2) {
  const section = document.createElement("section");
  section.classList.add("team");
  container.appendChild(section);
  section.innerHTML = `<div class="team__member"> ${wholeTeam[i]} </div>
                           <img src="/Plus@2x.16876357.png" class='plus'>
                           <div class="team__member"> ${wholeTeam[i + 1]
    } </div>`;
}
