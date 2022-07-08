import React from 'react'

import './Brands.css'

export default function Brands() {
    return (
        <div className="brands">
            <div className="smCon">
                <div className="row">
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/nike.png')} alt="" />
                        </div>
                    </div>
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/adidas.png')} alt="" />
                        </div>
                    </div>
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/bench.png')} alt="" />
                        </div>
                    </div>
                    <div className="col5">
                        <div className="content">
                            <img src={require('../img/hnm.png')} alt="" />
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
