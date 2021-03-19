import React, { useContext } from 'react'
import { ContextApp } from '../contextApp'
import Pagination from '../Pagination'
import Recipe from './Recipe'

const RecipesPage = () => {
    const { currentRecipes, searchValue } = useContext(ContextApp)
    return (
        <div className="content">
            <div className="recipes">
                {currentRecipes.length !== 0 ?
                    currentRecipes.map(recipe => <Recipe
                        key={recipe.recipe.image}
                        label={recipe.recipe.label}
                        image={recipe.recipe.image}
                        ingredients={recipe.recipe.ingredients}
                        calories={recipe.recipe.calories}
                        url={recipe.recipe.url}
                    />)
                    : <h2 className="no-results">No results for {searchValue}</h2>}
            </div>
            <Pagination />
        </div>
    )
}

export default RecipesPage
