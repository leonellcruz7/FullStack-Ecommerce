import React, { useEffect, useState } from 'react'
import Listings from '../Components/Listings'
import './Dashboard.css'

export default function Dashboard() {

    const [listing, setListing] = useState([])

    useEffect(() => {
        fetch('https://ecommerce-leonell.herokuapp.com/products/listings', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json()).then(data => {
            setListing(data.map(list => {
                return (
                    <Listings key={list._id} listProp={list} />
                )
            }))
        })
    }, [])
    return (
        <div className="dashboard">
            <div className="smCon">
                <div className="row">
                    <div className="col1 list">
                        <h2>Listings</h2>
                    </div>
                </div>
                <div className="row">
                    {listing}
                </div>
            </div>
        </div>
    )
}
