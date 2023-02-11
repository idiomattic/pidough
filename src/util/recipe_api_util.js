import axios from 'axios'
import ApiUtil from './api_util';

export const showAllRecipes = async () => {
  const response = await ApiUtil(`/recipes`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  });
  return response.data;
}

export const showRecipe = async (recipeId) => {
  const response = await ApiUtil(`/recipes/${recipeId}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
  return response.data;
}

export const createRecipe = async (recipe) => {
  const response = await ApiUtil("/recipes/create", {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    data: {
      recipe
    }
  });
  return response.data;
};

export const deleteRecipe = async (recipeId) => {
  const response = await ApiUtil(`/recipes/${recipeId}/delete`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
  return response.data
}