import React, { useState } from 'react'
import { useEffect } from 'react'
import OrderView from '../Components/OrderView'
import './Cart.css'

export default function Cart() {

    const [orders, setOrders] = useState([])
    const [prices, setPrices] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch('https://ecommerce-leonell.herokuapp.com/orders/getmyorder', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {
            console.log(data)
            setPrices(data.map(result => {
                return (
                    result.totalBalance
                )
            }))
            setTotal(prices.reduce((a, b) => a + b, 0))
            setOrders(data.map(order => {
                return (
                    <OrderView key={order._id} orderProp={order} />
                )
            }))
        })
    }, [total, prices])


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
                                <h2 className='total'>Total Balance: ${total}.00</h2>
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
