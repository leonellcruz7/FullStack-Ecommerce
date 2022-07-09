import React, { useState } from 'react'
import { useEffect } from 'react'
import OrderView from '../Components/OrderView'
import './Cart.css'

export default function Cart() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/orders/getmyorder', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setOrders(data.map(order => {
                return (
                    <OrderView key={order._id} orderProp={order} />
                )
            }))
        })
    }, [])
    return (
        <div className="Cart">
            <div className="smCon">
                <div className="row">
                    <div className="col5">
                        <div className="content">
                            <h1>My Cart</h1>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="content">
                            <div className="tableHead">

                            </div>
                            <div className="table">
                                {orders}

                            </div>
                            <div className="tableFoot">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
