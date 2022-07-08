import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Login() {
    return (
        <div className="login">
            <div className="mdCon">
                <div className="row">
                    <div className="col2">
                        <div className="content slog">
                            <h1>Shop at the comfort <br /> of your Home</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos sapiente nemo quaerat </p>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="content content">
                            <div className="title"><h2>Login     <FontAwesomeIcon className='idIcon' icon="fa-solid fa-id-card" /></h2></div>
                            <div className="card">
                                <div className="email"><input type="text" placeholder='Email' /></div>
                                <div className="password"><input type="text" placeholder='Password' /></div>
                                <div className="divider"></div>
                                <div className="footer">
                                    <div className="already">
                                        <p>Don't have an account? <Link className='link' to='/login'>Register</Link></p>
                                    </div>
                                    <div className="create">
                                        <button>Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
