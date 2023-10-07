function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyBg = document.querySelector("body");

const buttonBg = document.querySelector("button.change-color");

const colorName = document.querySelector("span.color");

buttonBg.addEventListener("click", () => {
  const changedColor = getRandomHexColor();
  bodyBg.style.backgroundColor = changedColor;
  colorName.textContent = changedColor;
});
