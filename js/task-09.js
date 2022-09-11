const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");
const body = document.querySelector(".body");

changeColorBtn.addEventListener("click", changeColorClick);

function changeColorClick() {
  const currentColor = getRandomHexColor();
  color.textContent = currentColor;
  body.getElementsByClassName.backgroundColor = currentColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
