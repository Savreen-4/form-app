import React from 'react'
import './App.css'
import useForm from './useForm'
import{Route, Router} from 'react-router-dom'
import Home from './Home'
import validate from './validateInfo'
const FormSignup = () => {
    const{handleChange,values,handleSubmit,errors}=useForm(validate);
    return (
        <div className="face-context-right">
            
            <form className="form" onSubmit={handleSubmit}>
                <h1>get started</h1>
                
                <div className="form-inputs">
                    <label htmlfro="username" className="from-label">
                        Username
                    </label>
                    <input
                    id="username"
                    type="text"
                    name="username"
                    className="form-input"
                    placeholder="Enter your username"
                    value={values.username}
                    onChange={handleChange}
                    />
                     {errors.username && <p>{errors.username}</p>}

                    <div/>
    
                    <div className="form-inputs">
                    <label htmlfro="email" className="from-label">
                    email
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    className="from-input"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    />
                      {errors.email && <p>{errors.email}</p>}

                    </div>

                    <div className="form-inputs">
                    <label htmlfro="password" className="from-label">
                        password
                    </label>
                    <input
                    id="password"
                    type="password"
                    name="password"
                    className="form-input"
                    placeholder="Enter your Password"
                    value={values.password}
                    onChange={handleChange}
                    />
                 {errors.password && <p>{errors.password}</p>}

                    </div>
                   
                   <label htmlfro="password2" className="from-label">
                        confirm password
                    </label>
                    <input
                    id='password2'
                    type="password"
                    name="password2"
                    className="form-input"
                    placeholder="Enter your Confirm-Password"
                    value={values.password2}
                    onChange={handleChange}
                    />
                 {errors.password2 && <p>{errors.password2}</p>}

                </div>
                <button className="forn-input-btn" type="submit">Signup </button>
                <span className="form-input-login">Already have an account ? login
                <a href="#">here</a>
                </span>
            </form>
            {/* <Router>
            <Route path = "Home" component={Home}/>
            </Router> */}
        </div>
    )
}

export default FormSignup