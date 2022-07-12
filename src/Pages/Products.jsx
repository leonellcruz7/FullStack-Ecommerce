import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AllProducts from '../Components/AllProducts'
import './Products.css'

export default function Products() {

    const [products, setProduct] = useState('')
    const [filter, setFilter] = useState(null)

    useEffect(() => {
        if (filter == null) {
            fetch('https://ecommerce-leonell.herokuapp.com/products/all', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            }).then(res => res.json()).then(data => {
                console.log(data)
                setProduct(data.map(item => {
                    return (
                        <AllProducts key={item._id} productProp={item} />
                    )
                }))
            })
        }
        else {
            fetch('https://ecommerce-leonell.herokuapp.com/products/getbycategory', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    category: filter
                })
            }).then(res => res.json()).then(data => {
                setProduct(data.map(item => {
                    return (
                        <AllProducts key={item._id} productProp={item} />
                    )
                }))
            })
        }


    }, [filter])

    return (
        <div className="products">
            <div className="smCon">
                <div className="row">
                    <div className="col6">
                        <div className="prodcat">
                            <button className='first' onClick={e => setFilter(null)}>All</button>
                            <button onClick={e => setFilter('men')}>Men</button>
                            <button onClick={e => setFilter('women')}>Women</button>
                            <button className='last' onClick={e => setFilter('kids')}>Kids</button>
                        </div>
                    </div>
                    <div className="col2">
                        {products}
                    </div>
                </div>
            </div>
        </div>


    )
}
