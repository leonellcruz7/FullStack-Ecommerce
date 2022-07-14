import React, { useState } from 'react'
import './ProductsView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

export default function ProductView() {

    const [amount, setAmount] = useState(0)
    const [product, setProduct] = useState([])
    const [active, setActive] = useState(false)

    function inc(e) {
        if (amount < product.availableStock) {
            setAmount(amount + 1)
        }
    }

    function dec(e) {
        if (amount > 0) {
            setAmount(amount - 1)
        }

    }

    useEffect(() => {
        if (amount == 0 || product.availableStock < amount || localStorage.getItem('token') == null || localStorage.getItem('isAdmin') == 'true') {
            setActive(false)
        }
        else {
            setActive(true)
        }
    }, [amount, product])

    useEffect(() => {
        fetch('https://ecommerce-leonell.herokuapp.com/products/getbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem('productId')
            })
        }).then(res => res.json()).then(data => {
            setProduct(data)
        })
    }, [product])

    function buy(e) {
        e.preventDefault()
        setAmount(0)
        fetch('https://ecommerce-leonell.herokuapp.com/orders/addtocart', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                productId: localStorage.getItem('productId'),
                amount: amount
            })
        }).then(res => res.json()).then(data => {

            setProduct({
                availableStock: product.availableStock - amount
            })


        })
    }


    return (
        <div className="productsView">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <img src={localStorage.getItem('image')} alt="" />
                        </div>
                    </div>
                    <div className="col2">
                        <div className="content product">
                            <h1>{localStorage.getItem('productName')}</h1>
                            <div className="divider"></div>
                            <p className='desc'>{localStorage.getItem('description')}</p>
                            <h2>Price: ${localStorage.getItem('price')}.00</h2>
                            <p className='stock'>Available stocks: {product.availableStock}</p>
                            <div className="quantity">
                                <button onClick={dec}><FontAwesomeIcon icon="fa-solid fa-minus" /></button>
                                <h2>{amount}</h2>
                                <button onClick={inc}><FontAwesomeIcon icon="fa-solid fa-plus" /></button>
                            </div>
                            {active ? <button className='buyBtn' onClick={buy}>Add to Cart</button> : <button className='buyBtn inactive' onClick={buy} disabled>Add to Cart</button>}
                            {(localStorage.getItem('isAdmin') == 'true') ? <h4 className='alert'>Please login to a customer account</h4> : <h4 hidden>Login first</h4>}
                            {(localStorage.getItem('token') == null) ? <h4 className='alert'>Please login first</h4> : <h4 hidden>Login first</h4>}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
