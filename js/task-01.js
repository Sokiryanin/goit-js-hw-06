const itemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemsEl.length}`);

itemsEl.forEach((item) => {
  const titleItemsEl = item.querySelector("h2");
  console.log(`Category: ${titleItemsEl.textContent}`);

  const numberOfItemEl = item.querySelectorAll("li");
  console.log(`Elements: ${numberOfItemEl.length}`);
});
