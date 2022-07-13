import React from 'react'
import './Admin.css'

export default function Admin() {
    return (
        <div className="admin">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <div className="title">
                                <h2>Start selling in easy 3 steps</h2>
                            </div>
                            <div className="box">
                                <div className="number">
                                    <h2>1</h2>
                                </div>
                                <div className="details">
                                    <h4>Register</h4>
                                    <p>Check seller account</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="number">
                                    <h2>2</h2>
                                </div>
                                <div className="details">
                                    <h4>Type details in the registration form</h4>
                                    <p>Enter Name, Email Address and Contact Number</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="number">
                                    <h2>3</h2>
                                </div>
                                <div className="details">
                                    <h4>Upload your product</h4>
                                    <p>Upload your product image and details.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col2">
                        <div className="content">
                            <div className="card">
                                <div className="title">
                                    <h2>Sell your product.</h2>
                                    <div className="divider"></div>
                                </div>


                                <input type="text" placeholder='Name' />
                                <input type="text" placeholder='Description' />


                                <div className="types">
                                    <input className='left' type="text" placeholder='Brand' />
                                    <input className='right' type="dropdown" placeholder='Kind' />

                                </div>
                                <div className="category">
                                    <input className='left' type="text" placeholder='Category' />
                                    <input className='right' type="file" />
                                </div>
                                <div className="upload">
                                    <button>Upload Product</button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
