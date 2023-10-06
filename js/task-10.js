let quantity = 0;
let boxSize = 30;

const controlsContainer = document.querySelector("#controls");

const inputField = controlsContainer.querySelector("input");

const boxesContainer = document.querySelector("div#boxes");

const createBtn = document.querySelector("div#controls button[data-create]");
const destroyBtn = document.querySelector("div#controls button[data-destroy]");

createBtn.addEventListener("click", () => {
  quantity = parseInt(inputField.value, 10);
  if (!isNaN(quantity) && quantity > 0) {
    createBoxes(quantity);
  }
});

destroyBtn.addEventListener("click", () => destroyBoxes());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(quantity) {
  for (let i = 0; i < quantity; i += 1) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    boxSize += 10;
  }

  // const boxesArr = Array.from({ length: quantity }, (_, idx) => idx + 1);
  // console.log(boxesArr);
  // const markup = boxesArr
  //   .map((el) => {
  //     `<div class='box' style='width:${boxSize}px; height:${boxSize}px; background-color: ${getRandomHexColor()}'>${el}</div>`;
  //     boxSize += 10;
  //   })
  //   .join("");
  // boxesContainer.innerHTML = markup;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
  inputField.value = "";
}
