import React, { useContext } from 'react'
import './RecipeModal.css'
import { Context } from './contextModal'
import { ContextApp } from '../contextApp'
import { Link } from 'react-router-dom'
import Button from '../Button'



function RecipeModal({ ingredients, label, image, calories, isModalShown, url }) {
    const { closeModal } = useContext(Context)
    const { isLogged, addToRecipes, showToast } = useContext(ContextApp)

    return (
        <div className={isModalShown ? "recipe-modal active" : "recipe-modal"} onClick={closeModal}>
            <div className="recipe-modal-window" onClick={e => e.stopPropagation()}>
                <div className="recipe-modal-window__header">
                    <p>{label}</p>
                    <p className="recipe-modal-window__header-close" onClick={closeModal}>&times;</p>
                </div>
                <div className="recipe-modal-window__body">
                    <div className="recipe-modal-window__body-image-container">
                        <img src={image} alt={`${label}`} />
                    </div>
                    <div className="recipe-modal-window__body-list-container">
                        <ul className="recipe-modal-window__body-list">
                            {ingredients.map((ingredient, i) => <li key={i} className="ingredient">{ingredient.text}</li>)}
                        </ul>
                        <p>Calories:{calories.toFixed(0)}</p>
                    </div>
                </div>
                <div className="recipe-modal-window__footer">
                    {isLogged ? <Button
                        label={"Add to your recipes"}
                        handleClick={() => showToast("success")}
                        onClick={() => addToRecipes(image)}>Add to my recipes</Button> :
                        <Link className="recipe-modal-window__footer-redirect" to="/login">Log in to add to your recipes</Link>
                    }
                    <a className="recipe-modal-window__footer-link" rel="noreferrer" target="_blank" href={url} >More info</a>
                </div>

            </div>
        </div>
    )
}

export default RecipeModal
