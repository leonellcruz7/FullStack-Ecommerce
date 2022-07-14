import React, { useEffect } from 'react'
import './Featured.css'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'



export default function Featured() {
    const { ref, inView } = useInView()
    const animation = useAnimation()

    useEffect(() => {

    }, [inView])


    const navigate = useNavigate()
    return (
        <div className="featured">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <img src={require(`../img/feature.png`)} />
                        </div>
                    </div>
                    <div className="col2">
                        <div className="content">
                            <motion.p
                                initial={{ x: 500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', duration: .6 }}>Great Deals only at Online Store</motion.p>
                            <motion.h1
                                initial={{ x: 500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', duration: .6, delay: .2 }}>Shop Fashion Online.</motion.h1>
                            <motion.p
                                initial={{ x: 500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', duration: .6, delay: .3 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse dolore distinctio quos in rerum ducimus quis? Quidem commodi ad aspernatur rem qui voluptas facilis consequuntur perferendis excepturi, deserunt eveniet.</motion.p>
                            <motion.button onClick={e => navigate('/products')}
                                initial={{ x: 500, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ type: 'spring', duration: .6, delay: .4 }}>Shop Now</motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
