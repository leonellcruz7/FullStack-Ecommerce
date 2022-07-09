import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import UserContext from '../Components/UserContext'

export default function Login() {


    const navigate = useNavigate()

    const { user, setUser } = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [active, setActive] = useState(false)



    function login(e) {
        e.preventDefault()

        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: pass
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            if (data) {
                localStorage.setItem('token', data.access)
                fetch('http://localhost:4000/users/details', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${data.access}`
                    }
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    if (data) {

                    }
                    localStorage.setItem('name', data.firstName)
                    alert('You have successfully logged in!')
                    navigate('/')

                })
            }
            else {
                alert('Login Failed')
            }
        })
    }

    useEffect(() => {
        if (email !== '' && pass !== '') {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })

    return (
        <div className="login">
            <div className="mdCon">
                <div className="row">
                    <div className="col2 slogan">
                        <div className="content slog">
                            <h1>Shop at the comfort <br /> of your Home</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos sapiente nemo quaerat </p>
                        </div>
                    </div>
                    <div className="col2 loginform">
                        <div className="content">
                            <div className="title"><h2>Login     <FontAwesomeIcon className='idIcon' icon="fa-solid fa-id-card" /></h2></div>
                            <div className="card">
                                <div className="email">
                                    <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.currentTarget.value)} />
                                </div>
                                <div className="password">
                                    <input type="text" placeholder='Password' value={pass} onChange={e => setPass(e.currentTarget.value)} />
                                </div>
                                <div className="divider"></div>
                                <div className="footer">
                                    <div className="already">
                                        <p>Don't have an account? <Link className='link' to='/register'>Register</Link></p>
                                    </div>
                                    <div className="create">
                                        {active ? < button onClick={login}> Login</button> : <button className='inactive' disabled>Login</button>}
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
