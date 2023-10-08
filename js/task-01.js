const categoriesList = document.querySelectorAll(".item");

console.log("Number of categories", categoriesList.length);
console.log("");
categoriesList.forEach((category) => {
  console.log("Category:", category.firstElementChild.textContent);
  console.log("Elements:", category.lastElementChild.children.length);
  console.log("");
});
