import React, { useState } from 'react'
import './Recipe.css'
import RecipeModal from './RecipeModal'
import { Context } from './contextModal'

const Recipe = ({ calories, ingredients, image, label, url }) => {
    const [isModalShown, setIsModalShown] = useState(false)

    const showModal = () => {
        setIsModalShown(true)
    }

    const closeModal = () => {
        setIsModalShown(false)
    }

    return (
        <Context.Provider value={{
            closeModal, isModalShown
        }}>
            <div className="recipe-container" >
                <h2 className="recipe-label" onClick={showModal}>{label}</h2>
                <RecipeModal
                    url={url}
                    isModalShown={isModalShown}
                    label={label}
                    ingredients={ingredients}
                    image={image}
                    calories={calories}
                />
                <img className="recipe-image" onClick={showModal} src={image} alt={`${label}`} />
                <p className="recipe-text">Calories: {calories.toFixed(0)}</p>
            </div>
        </Context.Provider>
    )
}

export default Recipe
