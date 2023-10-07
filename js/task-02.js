const inputField = document.querySelector("input#font-size-control");

const text = document.querySelector("span#text");

text.style.fontSize = `${inputField.value}px`;

inputField.addEventListener("input", () => {
  text.style.fontSize = `${inputField.value}px`;
});
