import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './OrderView.css'

export default function OrderView({ orderProp }) {
    const navigate = useNavigate()


    function view(e) {
        e.preventDefault()

        fetch('https://ecommerce-leonell.herokuapp.com/products/getbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: orderProp.productId
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            localStorage.setItem('productId', data._id)
            localStorage.setItem('productName', data.name)
            localStorage.setItem('description', data.description)
            localStorage.setItem('price', data.price)
            localStorage.setItem('stock', data.availableStock)
            localStorage.setItem('image', data.image)
            navigate(`/product/${data._id}`)
        })
    }

    function remove(e) {
        e.preventDefault()
        console.log(orderProp._id)
        fetch('https://ecommerce-leonell.herokuapp.com/orders/deleteorder', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: orderProp._id
            })
        }).then(res => res.json()).then(data => {

            window.location.reload()
        })
    }

    useEffect(() => {
        fetch('https://ecommerce-leonell.herokuapp.com/orders/getmyorder', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {

        })
    })

    return (
        <div className="orderview">
            <div className="details">
                <div className='left'>
                    <img src={orderProp.productImage} onClick={view} />
                    <h3 onClick={view}>{orderProp.productName}</h3>
                </div>
                <div className='right'>
                    <h4>Price: ${orderProp.productPrice}.00</h4>
                    <h4>x{orderProp.quantity}</h4>
                    <button className='remove' onClick={remove}>Remove</button>
                    <button className='checkout'>Checkout</button>
                </div>

            </div>
            <div className="divider"></div>

        </div>
    )
}
