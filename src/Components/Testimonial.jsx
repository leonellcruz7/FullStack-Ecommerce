import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Testimonial.css'


export default function Testimonial() {
    return (
        <div className="testimonial">
            <div className="smCon">
                <div className="row title">
                    <div className="col1">
                        <div className="content">
                            <h1>Our Customers</h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col4">

                        <div className="card">
                            <FontAwesomeIcon className='quote' icon="fa-solid fa-quote-right" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis animi magni vitae deserunt obcaecati enim maxime nemo harum soluta! </p>
                            <div className="stars">
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                            </div>
                            <img className='users' src={require('../img/user-1.jpg')} alt="" />
                            <h4>Leonell Cruz</h4>
                        </div>
                    </div>
                    <div className="col4">

                        <div className="card">
                            <FontAwesomeIcon className='quote' icon="fa-solid fa-quote-right" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis animi magni vitae deserunt obcaecati enim maxime nemo harum soluta! </p>
                            <div className="stars">
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                            </div>
                            <img className='users' src={require('../img/user-2.jpg')} alt="" />
                            <h4>Angelic Lumanlan</h4>
                        </div>
                    </div>
                    <div className="col4">

                        <div className="card">
                            <FontAwesomeIcon className='quote' icon="fa-solid fa-quote-right" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis animi magni vitae deserunt obcaecati enim maxime nemo harum soluta! </p>
                            <div className="stars">
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                            </div>
                            <img className='users' src={require('../img/user-3.jpg')} alt="" />
                            <h4>Zarina Katrina</h4>
                        </div>
                    </div>
                    <div className="col4">

                        <div className="card">
                            <FontAwesomeIcon className='quote' icon="fa-solid fa-quote-right" />
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis animi magni vitae deserunt obcaecati enim maxime nemo harum soluta! </p>
                            <div className="stars">
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                            </div>
                            <img className='users' src={require('../img/user-4.jpg')} alt="" />
                            <h4>Harold Joseph</h4>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
