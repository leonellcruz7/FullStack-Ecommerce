import React from 'react'
import logo from '../img/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function NavBar() {
    const [toggle, setToggle] = useState(false)

    function show() {
        setToggle(!toggle)
    }

    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="mdCon">
                <div className="row">
                    <h2>Online Shop</h2>
                    <ul className='desktopNav'>
                        <li><Link className='link' to='/'>home</Link></li>
                        <li><Link className='link' to='/products'>products</Link></li>
                        <li><Link className='link' to='/offers'>offers</Link></li>
                        <li><Link className='link' to='/events'>events</Link></li>
                        <li><input type="text" /><button>Search</button></li>
                    </ul>
                    {toggle ? <ul className='mobileNav'>
                        <li><Link className='link' to='/'>home</Link></li>
                        <li><Link className='link' to='/products'>products</Link></li>
                        <li><Link className='link' to='/offers'>offers</Link></li>
                        <li><Link className='link' to='/events'>events</Link></li>
                        <li><Link className='link' to='/login'>login</Link></li>
                        <li><Link className='link' to='/register'>register</Link></li>
                        <li><Link className='link' to='/logout'>logout</Link></li>
                    </ul>
                        :
                        <ul className='desktopNav mobileNavToggle'>
                            <li><Link className='link' to='/'>home</Link></li>
                            <li><Link className='link' to='/products'>products</Link></li>
                            <li><Link className='link' to='/offers'>offers</Link></li>
                            <li><Link className='link' to='/events'>events</Link></li>
                        </ul>
                    }


                    <button className='toggler' onClick={show}><FontAwesomeIcon icon="fa-solid fa-circle-chevron-down" /></button>
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
