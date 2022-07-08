import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Register() {
    return (
        <div className="register">
            <div className="mdCon">
                <div className="row">
                    <div className="col3">
                        <div className="content">
                            <div className="title"><h2>Register <FontAwesomeIcon className='idIcon' icon="fa-solid fa-id-card" /></h2></div>
                            <div className="card">
                                <div className="name">
                                    <input className='nameTxt' type="text" placeholder='Email' />
                                    <input className='nameTxt' type="text" placeholder='Password' />
                                </div>
                                <div className="address">
                                    <input type="text" placeholder='Complete Adress' />
                                </div>
                                <div className="contact">
                                    <input className='email' type="text" placeholder='Email' />
                                    <input className='mobile' type="text" placeholder='Mobile Number' />
                                </div>
                                <div className="password">
                                    <input className='nameTxt' type="text" placeholder='Password' />
                                    <input className='nameTxt' type="text" placeholder='Confirm Password' />
                                </div>
                                <div className="divider"></div>
                                <div className="footer">
                                    <div className="already">
                                        <p>Already have an account? <Link className='link' to='/login'>Login</Link></p>
                                    </div>
                                    <div className="create">
                                        <button>Create Account</button>
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
