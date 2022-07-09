import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AllProducts from '../Components/AllProducts'
import ProductCategory from '../Components/ProductCategory'
import ProductView from '../Components/ProductView'
import './Products.css'

export default function Products() {

    const [products, setProduct] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/products/all', {
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

    }, [])
    return (
        <div className="products">
            <div className="smCon">
                <div className="row">
                    <div className="col6">
                        <ProductCategory />
                    </div>
                    <div className="col2">
                        {products}
                    </div>
                </div>
            </div>
        </div>


    )
}
