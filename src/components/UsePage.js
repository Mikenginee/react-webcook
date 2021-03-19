import React from 'react'
import './UsePage.css'

const UsePage = () => {
    return (
        <div className="usePage-wrapper" >
            <div className="usePage-item usePage-rules">
                <div>
                    <h2>Beginning</h2>
                    <p>Without log in you can look only through the list of chocolate dishes, it's ingredients and recipe.</p>
                    <p></p>
                </div>
            </div>
            <div className="usePage-item usePage-login">
                <div>
                    <h2>Login</h2>
                    <p>When you are logged in, you immediately get the possibility of searching whatever you want, of course speaking about cooking :) </p>
                    <p>To start log in procedure tap the door icon at the top right corner, or tap the button in the middle of the navigation panel.</p>
                </div>
            </div>
            <div className="usePage-item usePage-navigation">
                <div>
                    <h2>Navigation</h2>
                    <p>If you read this you know how to use navigation bar :)</p>
                    <p>To leave the account just tap the door icon at the top right corner. You will automatically redirected to the main page.</p>
                </div>
            </div>
        </div>
    )
}

export default UsePage
