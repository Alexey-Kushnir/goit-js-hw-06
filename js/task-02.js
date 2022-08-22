const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');
// const ingredientItemsArray = [];

// ingredients.forEach(item => {
//   const ingredientItem = document.createElement('li');
//   ingredientItem.classList.add('item');
//   ingredientItem.textContent = item;
//   ingredientItemsArray.push(ingredientItem);
// });

const ingredientItemsArray = ingredients.map(item => {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = item;
  return ingredientItem;
});

listIngredients.append(...ingredientItemsArray);
