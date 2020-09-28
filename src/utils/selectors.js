// librairie qui permet d'obtenir un slug à partir d'une chaine de caractères =>
// chaîne de caractères simplifiée (notamment remplacement des espaces par des
// tirets), qui passera bien pour être utilisée dans une URL
import slugify from 'slugify';

// récupérer le slug qui correspond à un titre
export const slugifyTitle = (title) => slugify(title, {
  lower: true,
});

// récupérer une recette à partir d'un slug
export const getRecipeBySlug = (recipes, slug) => {
  const recipeFound = recipes.find((recipe) => {
    // on calcule le slug de la recette
    const slugForRecipe = slugifyTitle(recipe.title);

    // return true si c'est le bon élément, false sinon (find s'arrête au premier
    // élément qui correspond)
    return slug === slugForRecipe;
  });

  // console.log(recipeFound);
  return recipeFound;
};
