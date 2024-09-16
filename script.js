const randomColor = function () {
  const hex = "0123456789ABCDEF";

  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
// console.log(randomColor());
let intervalidId;
const startchangingcolor = function () {
  intervalidId = setInterval(changebgcolor, 1000);
  function changebgcolor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopchangingcolor = function () {
  clearInterval(intervalidId);
};

document.querySelector("#start").addEventListener("click", startchangingcolor);

document.querySelector("#stop").addEventListener("click", stopchangingcolor);
