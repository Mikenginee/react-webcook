import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import ContactsPage from './ContactsPage'
import { ContextApp } from './contextApp'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import RecipesPage from './Recipes/RecipesPage'
import UsePage from './UsePage'

const MainContent = () => {

    const { isLogged } = useContext(ContextApp)

    return (
        <Switch>
            <Route exact path="/">
                <RecipesPage />
            </Route>
            <Route path="/login">
                {isLogged ? <Redirect to="/home" /> : <LoginPage />}
            </Route>
            <Route path="/use">
                <UsePage />
            </Route>
            <Route path="/contacts">
                <ContactsPage />
            </Route>
            <Route path="/home">
                <HomePage />
            </Route>
        </Switch>
    )
}

export default MainContent
