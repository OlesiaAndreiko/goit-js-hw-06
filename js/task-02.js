const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')
const ingredientsItems =[];

ingredients.forEach((ingredient => {
  const ingredientsItem = document.createElement('li');
  ingredientsItem.textContent = ingredient;
  ingredientsItem.classList.add('item')
  ingredientsItems.push(ingredientsItem)
}))

ingredientsList.append(...ingredientsItems)





// ще один спосіб:
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredientsItem = document.createElement('li');
//   ingredientsItem.textContent = ingredients[i];
//   // console.log(ingredients[i]);
//   ingredientsItem.classList.add('item')
//   // console.log(ingredientsItem);
//   ingredientsItems.push(ingredientsItem)
// }

// console.log(ingredientsItems)
// console.log(...ingredientsItems)
// ingredientsList.append(...ingredientsItems)
