
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

import { useNavigate } from 'react-router-dom'




import './Brands.css'

export default function Brands() {
    const navigate = useNavigate()

    const { ref, inView } = useInView()

    const animation = useAnimation()

    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                opacity: 1
            })
        }
    })

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
                <motion.div className="row"
                    ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={animation}
                    transition={{ type: 'spring', duration: 1 }}>
                    <div className="col5">
                        <div className="content">

                            <img src={require('../img/nike.png')} onClick={nike} />
                        </div>
                    </div>
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/adidas.png')} onClick={adidas} />
                        </div>
                    </div>
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/bench.png')} onClick={bench} />
                        </div>
                    </div>
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/hnm.png')} onClick={hnm} />
                        </div>
                    </div>
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/paypal.png')} alt="" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}
