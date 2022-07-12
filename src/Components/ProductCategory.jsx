import React from 'react'
import './ProductCategory.css'

export default function ProductCategory() {
    return (
        <div className="prodcat">
            <button className='first'>All</button>
            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>
            <button className='last'>Sports</button>
        </div>
    )
}
