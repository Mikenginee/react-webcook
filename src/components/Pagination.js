import React, { useContext } from 'react'
import { ContextApp } from './contextApp'
import './Pagination.css'

const Pagination = () => {
    const { itemsPerPage, recipes, paginate, currentPage } = useContext(ContextApp)

    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(recipes.length / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                {pageNumbers.map(num => (
                    <button onClick={() => paginate(num)} key={num} className={currentPage === num ? "page-item active" : "page-item"}>
                        {num}
                    </button>))}
            </ul>
        </div>
    )
}

export default Pagination
