const list = document.querySelector("ul#categories");

const items = list.querySelectorAll("li.item");
console.log("Number of categories: ", items.length);

items.forEach((el, idx) => {
  const title = document.querySelectorAll("ul#categories li.item h2");
  const item = document.querySelectorAll("ul#categories li.item ul");

  console.log(`Category: ${title[idx].innerHTML} 
Elements: ${item[idx].children.length}`);

  //   const category = items[idx].firstElementChild.innerHTML;
  //   console.log("Category: ", category);
  //   const numberOfElements = items[idx].lastElementChild.children.length;
  //   console.log("Elements: ", numberOfElements);
});
