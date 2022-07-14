import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import './Testimonial.css'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export default function Testimonial() {
    const { ref, inView } = useInView({
        threshold: .1
    })


    const animation = useAnimation()


    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1,
            })
        }

    })
    return (
        <div className="testimonial">
            <div className="smCon">
                <div className="row title">
                    <div className="col1">
                        <div className="content">
                            <motion.h1 ref={ref}
                                initial={{ y: 100, opacity: 0 }}
                                animate={animation}
                                transition={{ type: 'spring', duration: 1 }}>Our Customers</motion.h1>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col4">

                        <motion.div className="card" ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: .6, delay: .1 }}>
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
                        </motion.div>
                    </div>
                    <div className="col4">

                        <motion.div className="card" ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: .6, delay: .2 }}>
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
                        </motion.div>
                    </div>
                    <div className="col4">

                        <motion.div className="card" ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: .6, delay: .3 }}>
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
                        </motion.div>
                    </div>
                    <div className="col4">

                        <motion.div className="card" ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: .6, delay: .4 }}>
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
                        </motion.div>
                    </div>

                </div>

            </div>
        </div>
    )
}
