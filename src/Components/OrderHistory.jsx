import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './OrderHistory.css'

export default function OrderView({ historyProp }) {
    const navigate = useNavigate()


    function view(e) {
        e.preventDefault()

        fetch('https://ecommerce-leonell.herokuapp.com/products/getbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: historyProp.productId
            })
        }).then(res => res.json()).then(data => {

            localStorage.setItem('productId', data._id)
            localStorage.setItem('productName', data.name)
            localStorage.setItem('description', data.description)
            localStorage.setItem('price', data.price)
            localStorage.setItem('stock', data.availableStock)
            localStorage.setItem('image', data.image)
            navigate(`/product/${data._id}`)
        })
    }



    return (
        <div className="orderhistory">
            <div className="details">
                <div className='left'>
                    <img src={historyProp.productImage} onClick={view} />
                    <h3 onClick={view}>{historyProp.productName}</h3>
                </div>
                <div className='right'>
                    <h4>x{historyProp.quantity}</h4>
                    <h4>Total: ${historyProp.productPrice}.00</h4>
                    <h4>Status: {historyProp.status}</h4>


                </div>

            </div>
            <div className="divider"></div>

        </div>
    )
}
