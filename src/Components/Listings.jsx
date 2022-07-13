import React from 'react'
import './Listings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Listings({ listProp }) {
    return (
        <div className="col4 listings">
            <div className="content">
                <img src={listProp.image} alt="" />
                <div className='detail'>
                    <div className="info">
                        <h4>{listProp.name}</h4>
                        <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                        <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                        <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                        <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                        <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                        <p>Price: ${listProp.price}.00</p>
                    </div>
                    <div className="btn">
                        <button className='listBtn'>Update</button>
                        <button className='listBtn remove'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
