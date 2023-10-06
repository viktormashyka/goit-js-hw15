const inputField = document.querySelector("input#font-size-control");

const text = document.querySelector("span#text");

inputField.addEventListener("input", () => {
  text.style.fontSize = `${inputField.value}px`;
});
