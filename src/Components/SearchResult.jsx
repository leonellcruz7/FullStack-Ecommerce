import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './SearchResult.css'
import { useNavigate } from 'react-router-dom'


export default function SearchResult({ resultProp }) {
    const navigate = useNavigate()


    function view(e) {
        e.preventDefault()

        fetch('https://ecommerce-leonell.herokuapp.com/products/getbyid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                id: resultProp._id
            })
        }).then(res => res.json()).then(data => {
            console.log(data)
            localStorage.setItem('productName', data.name)
            localStorage.setItem('productId', resultProp._id)
            localStorage.setItem('description', data.description)
            localStorage.setItem('price', data.price)
            localStorage.setItem('stock', data.availableStock)
            localStorage.setItem('image', data.image)
            navigate(`/product/${resultProp._id}`)
        })

    }

    return (
        <div className="col5 result">
            <div className="content">
                <img src={resultProp.image} onClick={view} />
                <h4>{resultProp.name}</h4>
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <FontAwesomeIcon className='star' icon="fa-solid fa-star" />
                <p>Price: ${resultProp.price}.00</p>
            </div>

        </div>
    )
}
