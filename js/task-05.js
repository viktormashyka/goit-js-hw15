let quantity = 0;

const refs = {
  controlsContainer: document.querySelector("#controls"),
  inputField: document.querySelector("div#controls input"),
  boxesContainer: document.querySelector("div#boxes"),
  createBtn: document.querySelector("div#controls button[data-create]"),
  destroyBtn: document.querySelector("div#controls button[data-destroy]"),
};

refs.createBtn.addEventListener("click", handleCreateBoxes);

refs.destroyBtn.addEventListener("click", handleDestroyBoxes);

function handleCreateBoxes() {
  quantity = parseInt(refs.inputField.value, 10);
  if (!isNaN(quantity) && quantity > 0) {
    createBoxes(quantity);
  }
}

function handleDestroyBoxes() {
  destroyBoxes();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(quantity) {
  const boxesArr = Array.from({ length: quantity }, (_, idx) => idx + 1);

  const markup = boxesArr
    .map((el, idx) => {
      const boxSize = 30 + idx * 10;
      return `<div class='box' style='width:${boxSize}px; height:${boxSize}px; background-color: ${getRandomHexColor()}'>${el}</div>`;
    })
    .join("");

  refs.boxesContainer.innerHTML = markup;
}

function destroyBoxes() {
  refs.boxesContainer.innerHTML = "";
  refs.inputField.value = "";
}
