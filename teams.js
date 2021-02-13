
fetch('https://muc-2020-w1-student-api.vercel.app/api/teams')
  .then((res) => res.json())
  .then((teams) => teams.forEach(renderTeam))

/*   
  {
    const newBuddies = teams.concat()
    console.log(newBuddies)
  }) */


const container = document.querySelector(".main-container");

function renderTeam(groupMember, a) {
  const team = document.createElement('section')
  team.classList.add('team')
  container.appendChild(team)
  team.innerHTML = `<p class="team__headline"> Team  ${(a + 1).toString()}</p>
                    <div class="team__member"> ${groupMember[0]} </div>
                    <div class="team__member"> ${groupMember[1]} </div>
                    <div class="team__member"> ${groupMember[2]} </div>
                    <div class="team__member"> ${groupMember[3]} </div>`
}



/* const wholeTeam = [
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

 */