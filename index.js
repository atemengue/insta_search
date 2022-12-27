/** @format */

import { recipes } from './recipes.js';

const recipe_wrapper = document.querySelector('.recipe_wrapper');
const search = document.querySelector('#app-search');
const recipesList = document.querySelector('#recipe_list');

const cleanupWord = (word) => {
  return word.trim().toLowerCase();
};

const filterData = (word) => {
  return recipes.filter(
    (item) =>
      item.name.toLocaleLowerCase().includes(word) ||
      item.description.toLocaleLowerCase().includes(word) ||
      item.ustensils.toString('').toLocaleLowerCase().includes(word)
  );
};

// Moteur de rendu
const render = (word = ' ') => {
  recipesList.innerHTML = '';

  word = cleanupWord(word);

  const filtered = filterData(word);
  filtered.forEach((recipe) => {
    const recipe_card = document.createElement('div');
    const recipe_title = document.createElement('h1');
    const recipe_descript = document.createElement('div');

    recipe_card.classList.add('recipe_card');
    recipe_title.classList.add('recipe_title');
    recipe_descript.classList.add('recipe_description');

    recipe_title.innerHTML = recipe.name;
    recipe_descript.innerHTML = recipe.description;
    recipe_card.append(recipe_title);
    recipe_card.append(recipe_descript);

    recipe_wrapper.append(recipe_card);
  });
};

render();

// render as the user types

search.addEventListener('input', () => {
  console.log(search.value);
  render(search.value);
});
