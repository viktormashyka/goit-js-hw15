const inputField = document.querySelector("input#validation-input");

inputField.addEventListener("blur", (e) => {
  if (+e.target.value.length !== +inputField.dataset.length) {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
    console.log(
      `Invalid input. You inputted ${e.target.value.length} symbols. Please enter  ${inputField.dataset.length} symbols.`
    );
  } else {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
    console.log(
      `Well done! You inputted necessary ${e.target.value.length} symbols.`
    );
  }
});
