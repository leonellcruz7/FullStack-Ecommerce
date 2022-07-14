import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'


import './Brands.css'

export default function Brands() {
    const navigate = useNavigate()
    const { ref, inView } = useInView({
        threshold: .2
    })
    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1
            })
        }
    }, [inView])


    function nike(e) {

        localStorage.setItem('search', 'nike')
        navigate('/search')
        window.location.reload()
    }

    function adidas(e) {

        localStorage.setItem('search', 'adidas')
        navigate('/search')
        window.location.reload()
    }

    function hnm(e) {

        localStorage.setItem('search', 'hnm')
        navigate('/search')
        window.location.reload()
    }

    function bench(e) {

        localStorage.setItem('search', 'bench')
        navigate('/search')
        window.location.reload()
    }

    return (
        <div className="brands">
            <div className="smCon">
                <div className="row">
                    <div className="col5">
                        <motion.div className="content"
                            ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: 1, delay: .1 }}>

                            <img src={require('../img/nike.png')} onClick={nike} />
                        </motion.div>
                    </div>
                    <div className="col5">
                        <motion.div className="content"
                            ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: 1, delay: .2 }}>
                            <img src={require('../img/adidas.png')} onClick={adidas} />
                        </motion.div>
                    </div>
                    <div className="col5">
                        <motion.div className="content"
                            ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: 1, delay: .3 }}>
                            <img src={require('../img/bench.png')} onClick={bench} />
                        </motion.div>
                    </div>
                    <div className="col5">
                        <motion.div className="content"
                            ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: 1, delay: .4 }}>
                            <img src={require('../img/hnm.png')} onClick={hnm} />
                        </motion.div>
                    </div>
                    <div className="col5">
                        <motion.div className="content"
                            ref={ref}
                            initial={{ y: 100, opacity: 0 }}
                            animate={animation}
                            transition={{ type: 'spring', duration: 1, delay: .5 }}>
                            <img src={require('../img/paypal.png')} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    )
}
