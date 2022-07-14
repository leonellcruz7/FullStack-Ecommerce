import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import './Testimonial.css'





export default function Testimonial() {

    const { ref, inView } = useInView({
        threshold: .2
    })
    const animation = useAnimation()

    useEffect(() => {
        console.log(inView)
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1
            })
        }
    })

    return (
        <div className="testimonial">
            <div className="smCon">
                <div className="row title">
                    <div className="col1">
                        <motion.div className="content"
                            ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: .5 }}>
                            <h1>Our Customers</h1>
                        </motion.div>
                    </div>
                </div>
                <motion.div className="row"
                    ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={animation}
                    transition={{ type: 'spring', duration: 1, delay: .2 }}>
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

                </motion.div>

            </div>
        </div>
    )
}
