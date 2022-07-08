import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'

export default function Categories() {
    return (
        <div className="categories">
            <div className="smCon">
                <div className="row">
                    <div className="col1">
                        <div className="content">
                            <button className='first'>Men</button>
                            <button>Women</button>
                            <button>Kids</button>
                            <button>Sports</button>
                            <button>Lifestyle</button>
                            <button className='last'>Home</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
