const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul#ingredients");
const item = document.createElement("li");

// item.classList.add = "item";
// const markup = ingredients.map((el) => `<li class='item'>${el}</li>`).join("");
// list.innerHTML = markup;

const createEl = (el) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = el;
  return itemEl;
};
const markup = ingredients.map((ingredient) => createEl(ingredient));
list.append(...markup);
