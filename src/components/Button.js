import React from 'react';

const Button = ({ label, handleClick, onClick, className }) => {

    const click = () => {
        handleClick()
        onClick()
    }

    return (
        <>
            <button
                className={className}
                onClick={click}
            >
                {label}
            </button>
        </>
    );

}
export default Button;