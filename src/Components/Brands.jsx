import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Brands.css'

export default function Brands() {
    const navigate = useNavigate()

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
                </div>
            </div>
        </div>
    )
}
