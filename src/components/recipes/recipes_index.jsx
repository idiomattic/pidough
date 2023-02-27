import React, {useEffect, useState} from 'react'
import { withRouter } from 'react-router';
import RECIPES from '../../data/recipes'
import RecipesIndexItem from './recipes_index_item';

const RecipesIndex = () => {
  return (
    <div className='mt-7 w-full'>
      <ul className='flex flex-wrap justify-center -mt-4 w-full mx-auto px-2'>
        {  RECIPES.map((recipe, i) => <RecipesIndexItem key={i} recipe={recipe}/>) }
      </ul>
    </div>
  )
}

export default RecipesIndex
