import React, { useState } from 'react'
import { useEffect } from 'react'
import OrderHistory from '../Components/OrderHistory'
import OrderView from '../Components/OrderView'
import './Cart.css'

export default function Cart() {

    const [orders, setOrders] = useState([])
    const [prices, setPrices] = useState([])
    const [total, setTotal] = useState(0)
    const [history, setHistory] = useState([])

    useEffect(() => {

        fetch('https://ecommerce-leonell.herokuapp.com/orders/getmyorder', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {

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

    useEffect(() => {
        fetch('https://ecommerce-leonell.herokuapp.com/orders/orderhistory', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {
            setHistory(data.map(item => {
                return (
                    <OrderHistory key={item._id} historyProp={item} />
                )
            }))
        })
    })

    function checkout(e) {
        e.preventDefault()

        fetch('https://ecommerce-leonell.herokuapp.com/orders/checkout', {
            method: 'PATCH',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {

        })
    }


    return (
        <div className="Cart">
            <div className="smCon">
                <div className="row">
                    <div className="col5 column">
                        <div className="content">
                            <h2>My Cart</h2>
                        </div>
                    </div>
                    <div className="col1 column">
                        <div className="content">
                            <div className="tableHead">

                            </div>
                            <div className="table">
                                {orders}
                                <div className="totalbalance">
                                    <h2 className='total'>Total Balance: ${total}.00</h2>
                                    <button onClick={checkout}>Checkout</button>
                                </div>
                            </div>
                            <div className="tableFoot">

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col5">
                        <div className="content">
                            <h2>Order History</h2>
                        </div>
                    </div>
                    <div className="col1">
                        <div className="content">
                            <div className="tableHead">

                            </div>
                            <div className="table">
                                {history}

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
