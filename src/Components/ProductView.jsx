import React, { useState } from 'react'
import './ProductsView.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useContext } from 'react'
import UserContext from './UserContext'

export default function ProductView() {
    const { user, setUser } = useContext(UserContext)

    const [amount, setAmount] = useState(0)
    const [product, setProduct] = useState([])
    const [active, setActive] = useState(false)

    function inc(e) {
        setAmount(amount + 1)
    }

    function dec(e) {
        if (amount > 0) {
            setAmount(amount - 1)
        }

    }

    useEffect(() => {
        if (amount == 0) {
            setActive(false)
        }
        else {
            setActive(true)
        }
    })

    useEffect(() => {
        console.log(user)
    })

    useEffect(() => {
        fetch('http://localhost:4000/products/getbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: localStorage.getItem('productId')
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            setProduct(data)
        })
    }, [])

    function buy(e) {
        e.preventDefault()
        fetch('http://localhost:4000/orders/addtocart', {
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
            console.log(data)
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

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
