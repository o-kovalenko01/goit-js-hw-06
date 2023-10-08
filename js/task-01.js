const categoriesList = document.querySelectorAll("li.item");
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const subList = category.querySelectorAll("li");
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subList.length}`);
});
