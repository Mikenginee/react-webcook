import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import LoadingIndicator from "./components/LoadingIndicator";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import { ContextApp } from './components/contextApp'
import { BrowserRouter } from 'react-router-dom'
import Toast from "./components/Toast/Toast";
import { FaCheck } from "react-icons/fa";

const API_KEY = process.env.REACT_APP_API_KEY
const APP_ID = process.env.REACT_APP_APP_ID

const App = () => {
    const [recipes, setRecipes] = useState([])
    const [value, setValue] = useState('')
    const [searchValue, setSearchValue] = useState('chocolate')
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(20)
    const [isLogged, setIsLogged] = useState(false)
    const [isSearching, setIsSearching] = useState(false)
    const [myRecipes, setMyRecipes] = useState([])
    const [list, setList] = useState([]);
    let toastProperties = null;

    const showToast = type => {
        const id = Math.floor((Math.random() * 101) + 1);

        switch (type) {
            case 'success':
                toastProperties = {
                    id,
                    title: 'Success',
                    description: 'Added to your recipes!',
                    backgroundColor: '#5cb85c',
                    icon: <FaCheck />
                }
                break;
            case 'successDel':
                toastProperties = {
                    id,
                    title: 'Success',
                    description: 'Succesfuly deleted!',
                    backgroundColor: '#d9534f',
                    icon: <FaCheck />
                }
                break;
            default:
                setList([]);
        }

        setList([...list, toastProperties]);
    }


    useEffect(() => {
        const isInAccount = JSON.parse(localStorage.getItem('isLogged'))
        setIsLogged(isInAccount)
    }, [])

    const search = e => {
        setIsSearching(true)
        e.preventDefault()
        if (value.trim() !== '') {
            setSearchValue(value)
            setValue('')
            setCurrentPage(1)
        }
        else {
            setSearchValue('fries')
            setCurrentPage(1)
        }
    }

    useEffect(() => {
        getRecipes()
        setIsSearching(false)
    }, [searchValue])

    const getRecipes = async () => {
        setIsLoading(true)
        let response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=${APP_ID}&app_key=${API_KEY}&from=0&to=100`)
        let data = await response.json()
        setRecipes(data.hits)
        setIsLoading(false)
    }

    const indexOfTheLastItem = currentPage * itemsPerPage
    const indexOfTheFirstItem = indexOfTheLastItem - itemsPerPage
    const currentRecipes = recipes.slice(indexOfTheFirstItem, indexOfTheLastItem)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const addToRecipes = image => {
        const myRec = recipes.filter(recipe => recipe.recipe.image === image)
        setMyRecipes([...myRecipes, {
            id: Date.now(),
            image: myRec[0].recipe.image,
            label: myRec[0].recipe.label,
            calories: myRec[0].recipe.calories,
            ingredients: myRec[0].recipe.ingredients,
            url: myRec[0].recipe.url,
        }])
    }

    const deleteFromRecipes = id => {
        let data = myRecipes.filter(i => i.id !== id)
        setMyRecipes(data)
    }

    useEffect(() => {
        const rec = JSON.parse(localStorage.getItem('myRecipes')) || []
        setMyRecipes(rec)
    }, [])

    useEffect(() => {
        localStorage.setItem('myRecipes', JSON.stringify(myRecipes))
    }, [myRecipes])



    return (
        <BrowserRouter>
            <ContextApp.Provider value={{
                search, value, setValue,
                currentPage, paginate, searchValue,
                currentRecipes, recipes, itemsPerPage,
                isLogged, setIsLogged, isSearching,
                addToRecipes, deleteFromRecipes,
                myRecipes, showToast
            }}>
                <div className="app">
                    <Navbar />
                    {isLoading ? <LoadingIndicator /> :
                        <MainContent />}
                    <Footer />
                    <Toast
                        toastList={list}
                        dismissTime={1500}
                    />
                </div >
            </ContextApp.Provider >
        </BrowserRouter>
    );
};

export default App;
