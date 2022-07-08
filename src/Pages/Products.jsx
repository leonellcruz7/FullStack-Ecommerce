import React from 'react'
import AllProducts from '../Components/AllProducts'
import ProductCategory from '../Components/ProductCategory'
import './Products.css'

export default function Products() {
    return (
        <div className="products">
            <div className="smCon">
                <div className="row">
                    <div className="col6">
                        <ProductCategory />
                    </div>
                    <div className="col2">
                        <AllProducts />
                    </div>
                </div>
            </div>
        </div>
    )
}
