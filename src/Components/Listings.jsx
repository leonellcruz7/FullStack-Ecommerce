import React from 'react'
import './Listings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export default function Listings({ listProp }) {

    const navigate = useNavigate()

    function update(e) {
        e.preventDefault()

        fetch('https://ecommerce-leonell.herokuapp.com/products/getbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: listProp._id
            })
        }).then(res => res.json()).then(data => {
            localStorage.setItem('productName', data.name)
            localStorage.setItem('productId', listProp._id)
            localStorage.setItem('description', data.description)
            localStorage.setItem('price', data.price)
            localStorage.setItem('stock', data.availableStock)
            localStorage.setItem('image', data.image)
            localStorage.setItem('category', data.category)
            localStorage.setItem('kind', data.kind)
            localStorage.setItem('brand', data.brand)
            navigate(`/update/${listProp._id}`)
        })
    }

    function remove(e) {


        fetch('https://ecommerce-leonell.herokuapp.com/products/deleteproduct', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: listProp._id
            })
        }).then(res => res.json()).then(data => {
            window.location.reload()
        })
    }
    return (
        <div className="col5 listings">
            <div className="content">
                <div className="image">
                    <img src={listProp.image} alt="" />
                </div>

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
                        <button className='listBtn' onClick={update}>Update</button>
                        <button className='listBtn remove' onClick={remove}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
