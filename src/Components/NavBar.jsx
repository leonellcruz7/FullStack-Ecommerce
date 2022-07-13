import React, { Fragment } from 'react'
import logo from '../img/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


export default function NavBar() {
    const [toggle, setToggle] = useState(false)
    const [isOnline, setIsOnline] = useState(false)
    const [searchValue, setSearchValue] = useState()

    function show() {
        setToggle(!toggle)
    }

    useEffect(() => {
        if (localStorage.getItem('token') == null) {
            setIsOnline(false)
        }
        else {
            setIsOnline(true)
        }
    })

    function search(e) {
        setToggle(false)

        localStorage.setItem('search', searchValue.toLowerCase())
        navigate('/search')
    }

    const navigate = useNavigate()
    return (
        <div className="navbar">
            <div className="mdCon">
                <div className="row">
                    <div className="logosec" onClick={e => navigate('/')}>
                        <img src={require('../img/logo.png')} alt="" />
                    </div>

                    <ul className='desktopNav'>
                        <li><Link className='link' to='/admin'>admin dashboard</Link></li>
                        <li><Link className='link' to='/'>home</Link></li>
                        <li><Link className='link' to='/products'>products</Link></li>

                        <li><form onSubmit={search}> <input type="text" placeholder='Brand, Men or Women.. Top or Shorts..' onChange={e => setSearchValue(e.target.value)} /><button onClick={search}>Search</button></form></li>
                    </ul>
                    {toggle ? <ul className='mobileNav'>
                        <li><Link className='link' to='/admin' onClick={e => setToggle(false)}>admin dashboard</Link></li>
                        <li><form onSubmit={search}> <input type="text" placeholder='Brand, Men or Women.. Top or Shorts..' onChange={e => setSearchValue(e.target.value)} /><button onClick={search}>Search</button></form></li>
                        <li><Link className='link' to='/' onClick={e => setToggle(false)}>home</Link></li>
                        <li><Link className='link' to='/products' onClick={e => setToggle(false)}>products</Link></li>

                        {isOnline ?
                            <Fragment>
                                <li><Link className='link' to='/logout' onClick={e => setToggle(false)}>logout</Link></li>
                                <li><Link className='link' to='/cart' onClick={e => setToggle(false)}>cart</Link></li>
                            </Fragment>
                            :
                            <Fragment>
                                <li><Link className='link' to='/login' onClick={e => setToggle(false)}>login</Link></li>
                                <li><Link className='link' to='/register' onClick={e => setToggle(false)}>register</Link></li>
                            </Fragment>
                        }


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
                        {isOnline ?
                            <Fragment>
                                <div className='cart'>
                                    <button className='regBtn' onClick={e => navigate('/logout')}>Logout</button>
                                    <Link to='/cart'><FontAwesomeIcon className='fontIcons' icon="fa-solid fa-cart-shopping" /></Link>
                                </div>
                            </Fragment>
                            :
                            <Fragment>
                                <Link className='link' to='/login'>login</Link>
                                <button className='regBtn' onClick={e => navigate('/register')}>Register</button>
                            </Fragment>
                        }



                    </div>

                </div>
            </div>
        </div>
    )
}
