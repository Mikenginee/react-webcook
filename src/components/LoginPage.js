import React, { useContext } from 'react'
import useInput from './Hooks/useInput'
import './LoginPage.css'
import { ContextApp } from './contextApp'





const LoginPage = () => {
    const email = useInput('', { isEmpty: true, minLength: 10, maxLength: 28 })
    const password = useInput('', { isEmpty: true, minLength: 5, maxLength: 14 })

    const { setIsLogged } = useContext(ContextApp)

    const validateUser = (e) => {
        e.preventDefault()
        if (email.value === 'React2021@mail.ru' && password.value === 'Password') {
            setIsLogged(true)
            localStorage.setItem('isLogged', JSON.stringify(true))
        }
        else {
            alert('Login or password is incorrect')
        }
    }

    return (
        <div className="login-wrapper">
            <form className="login-form">
                <h1 className="login-form__title">LOGIN</h1>
                {email.isFocused && email.isEmpty && <div style={{ color: 'red' }}>The field cannot be empty</div>}
                {email.isFocused && !email.isEmpty && email.minLengthError && <div style={{ color: 'red' }}>Incorrent email</div>}
                {email.isFocused && email.maxLengthError && <div style={{ color: 'red' }}>Incorrent email</div>}
                <input
                    onChange={e => email.onChange(e)}
                    onBlur={e => email.onBlur(e)}
                    value={email.value}
                    className="login-form__input"
                    name="Email"
                    type="email"
                    placeholder="Enter your email" />
                {password.isFocused && password.maxLengthError && <div style={{ color: 'red' }}>Password must be shorter</div>}
                {password.isFocused && password.isEmpty && <div style={{ color: 'red' }}>The field cannot be empty</div>}
                {password.isFocused && !password.isEmpty && password.minLengthError && <div style={{ color: 'red' }}>Password must be longer</div>}
                <input
                    onChange={e => password.onChange(e)}
                    onBlur={e => password.onBlur(e)}
                    value={password.value}
                    className="login-form__input"
                    name="Password"
                    type="password"
                    placeholder="Enter your password" />
                <p>Email: React2021@mail.ru</p>
                <p>Password: Password</p>

                <button
                    disabled={!email.isInputValid || !password.isInputValid}
                    onClick={validateUser}
                    className="login-form__button"
                    type="submit">Log in</button>
            </form>
        </div>
    )
}

export default LoginPage
