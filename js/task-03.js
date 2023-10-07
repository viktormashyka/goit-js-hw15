const formField = document.querySelector("form.login-form");
console.log(formField);

formField.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formField.email.value === "" || formField.password.value === "") {
    alert("Увага, всі поля повинні бути заповнені");
    return;
  }

  const userData = {
    email: formField.email.value,
    password: formField.password.value,
  };

  console.log("user data: ", userData);
  formField.reset();
});
