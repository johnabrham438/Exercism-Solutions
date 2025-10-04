/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer){
   if (arguments.length === 0) {
    return 'You forgot to set the timer.';
  }

  if (timer === 0) {
    return 'Lasagna is done.';
  }

  if (timer > 0) {
    return 'Not done, please wait.';
  }

  return 'You forgot to set the timer.';
}

export function preparationTime(layers, time = 2){
  return layers.length * time;
}
export function quantities(layers) {
  const noodles = layers.filter(w => w === 'noodles').length * 50;
  const sauce = layers.filter(w => w === 'sauce').length * 0.2;
  
  return {"noodles": noodles, "sauce": sauce}
  
}

export function addSecretIngredient(friendsList,myList){
  const secretIngredient = friendsList[friendsList.length - 1];
  
  myList.push(secretIngredient);
  
}
export function scaleRecipe(recipe, factor){
  const scaled = {};

  for (const ingredient in recipe) {
    scaled[ingredient] = recipe[ingredient] * (factor / 2);
    
  }
  return scaled;
  
  
  
}