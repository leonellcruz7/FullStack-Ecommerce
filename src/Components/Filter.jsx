import React, { useEffect, useState } from 'react'
import './Filter.css'
import KindDisplay from './KindDisplay'

export default function Filter() {

    const [filter, setFilter] = useState()
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/products/getbykind', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                kind: filter
            })
        }).then(res => res.json()).then(data => {
            setProducts(data.map(product => {
                return (
                    <KindDisplay key={product._id} productProp={product} />
                )
            }))
        })
    })
    return (
        <div className="filter">
            <div className="smCon">
                <div className="row">
                    <div className="col1">
                        <div className="content">
                            <button className='first' onClick={e => setFilter('top')}>Top</button>
                            <button onClick={e => setFilter('shorts')}>Shorts</button>
                            <button onClick={e => setFilter('jeans')}>Jeans</button>
                            <button onClick={e => setFilter('shoes')}>Shoes</button>
                            <button className='last' onClick={e => setFilter('underwear')}>Underwear</button>
                        </div>
                    </div>


                </div>
                <div className="row">
                    <div className="col1">
                        {products}
                    </div>
                </div>
            </div>

        </div>
    )
}
