import React, { useEffect, useState } from 'react'
import './Register.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Register() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [first, setFirst] = useState('')
    const [last, setLast] = useState('')
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [pass1, setPass1] = useState('')
    const [pass2, setPass2] = useState('')
    const [active, setActive] = useState(true)

    function register(e) {
        e.preventDefault()

        fetch('https://ecommerce-leonell.herokuapp.com/users/register', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName: first,
                lastName: last,
                mobileNumber: mobile,
                email: email,
                password: pass1
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            alert('Registration Successful')
            navigate('/login')
        })
    }

    useEffect(() => {
        if (email !== '' && first !== '' && last !== '' && address !== '' && mobile !== '' && pass1 !== '' && pass2 !== '' & pass1 == pass2 && mobile.length >= 11) {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })

    return (
        <div className="register">
            <div className="mdCon">
                <div className="row">
                    <div className="col3">
                        <div className="content">
                            <div className="title"><h2>Register <FontAwesomeIcon className='idIcon' icon="fa-solid fa-id-card" /></h2></div>
                            <div className="card">
                                <div className="name">
                                    <input className='nameTxt' type="text" placeholder='First Name' value={first} onChange={e => setFirst(e.target.value)} />
                                    <input className='nameTxt' type="text" placeholder='Last Name' value={last} onChange={e => setLast(e.target.value)} />
                                </div>
                                <div className="address">
                                    <input type="text" placeholder='Complete Adress' value={address} onChange={e => setAddress(e.target.value)} />
                                </div>
                                <div className="contact">
                                    <input className='email' type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                                    <input className='mobile' type="text" placeholder='Mobile Number' value={mobile} onChange={e => setMobile(e.target.value)} />
                                </div>
                                <div className="password">
                                    <input className='nameTxt' type="password" placeholder='Password' value={pass1} onChange={e => setPass1(e.target.value)} />
                                    <input className='nameTxt' type="password" placeholder='Confirm Password' value={pass2} onChange={e => setPass2(e.target.value)} />
                                </div>
                                <div className="divider"></div>
                                <div className="footer">
                                    <div className="already">
                                        <p>Already have an account? <Link className='link' to='/login'>Login</Link></p>
                                    </div>
                                    <div className="create">
                                        {active ? <button onClick={register}>Create Account</button> : <button className='inactive' disabled>Create Account</button>}
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
