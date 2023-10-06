const inputField = document.querySelector("input#name-input");
const outputField = document.querySelector("span#name-output");

inputField.addEventListener("input", (e) => {
  console.log(e.target.value);
  if (e.target.value === "") {
    return (outputField.innerHTML = "Anonymous");
  }

  return (outputField.innerHTML = e.target.value);
});
