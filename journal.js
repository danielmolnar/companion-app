// const imgURL1 = 'assets/Star.svg'
// const imgURL2 = "assets/Star Copy 8@2x.png"
// //const img = document.querySelector('img');
//const star = document.getElementById('Stern1');

// img.src = imgURL1;

//star.addEventListener('click', () => {
//    console.log('test');
//)}

const star1 = document.getElementById("Stern1");
const star2 = document.getElementById("Stern2");
const star3 = document.getElementById("Stern3");
const star4 = document.getElementById("Stern4");
const star5 = document.getElementById("Stern5");

var state = 0;

star1.addEventListener("click", () => {
  if (state == 0) {
    star1.classList.add("star__full");
    state = 1;
  } else {
    star1.classList.remove("star__full");
    star2.classList.remove("star__full");
    star3.classList.remove("star__full");
    star4.classList.remove("star__full");
    star5.classList.remove("star__full");

    state = 0;
  }
});

star2.addEventListener("click", () => {
  if (state == 0) {
    star1.classList.add("star__full");
    star2.classList.add("star__full");

    state = 1;
  } else {
    star1.classList.remove("star__full");
    star2.classList.remove("star__full");
    star3.classList.remove("star__full");
    star4.classList.remove("star__full");
    star5.classList.remove("star__full");
    state = 0;
  }
});

for (i = 0; i < 6; i++)
  star3.addEventListener("click", () => {
    if (state == 0) {
      star1.classList.add("star__full");
      star2.classList.add("star__full");
      star3.classList.add("star__full");

      state = 1;
    } else {
      star1.classList.remove("star__full");
      star2.classList.remove("star__full");
      star3.classList.remove("star__full");
      star4.classList.remove("star__full");
      star5.classList.remove("star__full");
      state = 0;
    }
  });

star4.addEventListener("click", () => {
  if (state == 0) {
    star1.classList.add("star__full");
    star2.classList.add("star__full");
    star3.classList.add("star__full");
    star4.classList.add("star__full");

    state = 1;
  } else {
    star1.classList.remove("star__full");
    star2.classList.remove("star__full");
    star3.classList.remove("star__full");
    star4.classList.remove("star__full");
    star5.classList.remove("star__full");
    state = 0;
  }
});

star5.addEventListener("click", () => {
  if (state == 0) {
    star1.classList.add("star__full");
    star2.classList.add("star__full");
    star3.classList.add("star__full");
    star4.classList.add("star__full");
    star5.classList.add("star__full");

    state = 1;
  } else {
    star1.classList.remove("star__full");
    star2.classList.remove("star__full");
    star3.classList.remove("star__full");
    star4.classList.remove("star__full");
    star5.classList.remove("star__full");
    state = 0;
  }
});

// star4.addEventListener("click", () => {
//   star1.classList.toggle("star__full");
//   star2.classList.toggle("star__full");
//     star3.classList.toggle("star__full");
//     star4.classList.toggle("star__full");
// });

// star5.addEventListener("click", () => {
// star1.classList.toggle("star__full");
// star2.classList.toggle("star__full");
// star3.classList.toggle("star__full");
// star4.classList.toggle("star__full");
// star5.classList.toggle("star__full");
// });
