import React from 'react'
import logo from '../img/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'


export default function NavBar() {
    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="mdCon">
                <div className="row">
                    <h2>Online Shop</h2>
                    <ul>
                        <li><Link className='link' to='/'>home</Link></li>
                        <li><Link className='link' to='/products'>products</Link></li>
                        <li><Link className='link' to='/offers'>offers</Link></li>
                        <li><Link className='link' to='/events'>events</Link></li>
                        <li><input type="text" /><button>Search</button></li>

                    </ul>
                    <div className="logform">
                        <Link className='link' to='/login'>login</Link>
                        <button className='regBtn' onClick={e => navigate('/register')}>Register</button>
                        <button className='regBtn' onClick={e => navigate('/logout')}>Logout</button>
                        <FontAwesomeIcon className='fontIcons' icon="fa-solid fa-cart-shopping" />

                    </div>
                </div>
            </div>
        </div>
    )
}
