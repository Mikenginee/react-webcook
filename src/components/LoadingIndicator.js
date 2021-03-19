import React from 'react'
import './LoadingIndicator.css'

const LoadingIndicator = () => {
    return (
        <div className="container">
            <svg className="loading">
                <circle className="loading-circle" cx="75" cy="75" r="60"></circle>
            </svg>
        </div>
    )
}

export default LoadingIndicator
