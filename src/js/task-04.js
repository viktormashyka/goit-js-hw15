let countValue = 0;

const counterContainer = document.querySelector("#counter");
console.log(counterContainer);

const value = counterContainer.querySelector("#value");
console.log(value);

const decrementBtn = document.querySelector(
  'div#counter button[data-action="decrement"]'
);

const incrementBtn = document.querySelector(
  'div#counter button[data-action="increment"]'
);

console.log(decrementBtn.dataset.action);
console.log(incrementBtn.dataset.action);

decrementBtn.addEventListener("click", () => {
  const result = (countValue -= 1);
  console.log("result: ", result);
  return (value.innerHTML = result);
});

incrementBtn.addEventListener("click", () => {
  const result = (countValue += 1);
  console.log("result: ", result);
  return (value.innerHTML = result);
});
