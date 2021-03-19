import React, { useContext } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ContextApp } from './contextApp'
import './HomePage.css'
import HomeRecipe from './HomeRecipe'

const HomePage = () => {

    const { myRecipes } = useContext(ContextApp)

    return (
        <div className="home">
            <div className="home-info">
                <div className="home-info-wrapper">
                    <h1 className="home-info-wrapper__title" >Hello User</h1>
                    <p className="home-info-wrapper__text">Glad you read it, it means that you looked through the all functionality of my application :)</p>
                    <p className="home-info-wrapper__text">Hope you like it :)</p>
                    <p className="home-info-wrapper__text">Tap the buttons below!</p>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mikhail-ulasevich/" className="home-info-wrapper__icon">
                        <FaLinkedin />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/MikeGitFront" className="home-info-wrapper__icon">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div className="home-recipes-wrapper">
                <h1 className="home-recipes-title">Your Recipes</h1>
                <div className="home-recipes">
                    {myRecipes.length !== 0 ?
                        myRecipes.map(recipe =>
                            <HomeRecipe
                                key={recipe.id}
                                label={recipe.label}
                                ingredients={recipe.ingredients}
                                calories={recipe.calories}
                                image={recipe.image}
                                id={recipe.id}
                                url={recipe.url}
                            />
                        )
                        : <div
                            style={{ color: 'red', padding: '20px', fontSize: '32px', textAlign: 'center', fontWeight: '800' }}>Your haven't gor any saved recipes yet!</div>}
                </div>
            </div>
        </div>
    )
}

export default HomePage
