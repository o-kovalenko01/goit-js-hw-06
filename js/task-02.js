const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("ul");

ingredients.forEach((ingredient) => {
  const itemList = document.createElement("li");
  itemList.textContent = ingredient;
  itemList.classList.add("item");
  ingredientsList.append(itemList);
});
