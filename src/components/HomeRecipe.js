import React, { useContext } from 'react'
import { ContextApp } from './contextApp'
import './HomeRecipe.css'
import Button from './Button'
import { FaTimes } from 'react-icons/fa'

const HomeRecipe = ({ label, image, id, url }) => {

    const { deleteFromRecipes, showToast } = useContext(ContextApp)

    return (
        <div className="home-recipe-wrapper">
            <Button
                className={`home-recipe-delete`}
                label={<FaTimes />}
                handleClick={() => showToast("successDel")}
                onClick={() => deleteFromRecipes(id)} />
            <div className="home-recipe-title">
                <p>{label}</p>
                <a rel="noreferrer" target="_blank" className="home-recipe-title__link" href={url} >More info</a>
            </div>
            <img className="home-recipe-image" src={image} alt={`${label}`}></img>
        </div>
    )
}

export default HomeRecipe
