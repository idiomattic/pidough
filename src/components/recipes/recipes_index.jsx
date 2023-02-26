import React, {useEffect, useState} from 'react'

function RecipesIndexItem(props) {
  let { recipe, history } = props
  let truncatedBody = recipe.body.split('. ')[0] + '...'
  return (
    <div className='px-4 w-[30rem] mt-2 cursor-pointer' onClick={() => history.push(`/recipes/${recipe._id}`)}>
      <div className='bg-white px-4 py-3 border-2 h-full border-yellow-900 rounded-sm'>
        <div className='flex justify-between items-center my-2'>
          <h2 className='text-xl font-bold'>{recipe.title}</h2>
          <p>{recipe.authorName}</p>
        </div>
        <p className='w-full'>{truncatedBody}</p>
      </div>
    </div>
  )
}

function RecipesIndex(props) {
  useEffect(() => props.getAllRecipes(), [])

  return (
    <div className='mt-7 w-full'>
      <ul className='flex flex-wrap justify-center -mt-4 w-full mx-auto px-2'>
        {  props.recipes.map((recipe, i) => <RecipesIndexItem key={i} recipe={recipe}/>) }
      </ul>
    </div>
  )
}

export default RecipesIndex
