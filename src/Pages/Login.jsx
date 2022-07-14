import React, { useEffect, useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import UserContext from '../Components/UserContext'
import { motion } from 'framer-motion'


export default function Login() {


    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [active, setActive] = useState(false)
    const { user, setUser } = useContext(UserContext)



    function login(e) {
        e.preventDefault()

        fetch('https://ecommerce-leonell.herokuapp.com/users/login', {
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
                fetch('https://ecommerce-leonell.herokuapp.com/users/details', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${data.access}`
                    }
                }).then(res => res.json()).then(data => {
                    console.log(data)
                    if (data) {

                    }
                    localStorage.setItem('name', data.firstName)
                    localStorage.setItem('isAdmin', data.isAdmin)
                    setUser({
                        isAdmin: localStorage.getItem('isAdmin')
                    })

                    alert('You have successfully logged in!')
                    if (data.isAdmin) {
                        navigate('/admin')
                    }
                    else {
                        navigate('/')
                    }


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
                            <motion.h1
                                initial={{ x: -500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', duration: 1.2, bounce: .3, delay: 0 }}><span className='shoptxt'> Shop</span> at the comfort <br /> of your <span className='hometxt'>Home</span> </motion.h1>
                            <motion.p
                                initial={{ x: -500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', duration: 1.2, bounce: .3, delay: .1 }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi dignissimos sapiente nemo quaerat </motion.p>
                        </div>
                    </div>
                    <motion.div className="col2 loginform"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', duration: 1.2, bounce: .3, delay: .1 }}>
                        <form className="content" onSubmit={login}>
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
                        </form>
                    </motion.div>

                </div>
            </div>

        </div>
    )
}
