const categoriesList = document.querySelector("ul");

const categoryItems = categoriesList.children;
console.log(`Number of categories: ${categoryItems.length}`);

[...categoryItems].forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const subList = category.querySelectorAll("li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subList.length}`);
});
