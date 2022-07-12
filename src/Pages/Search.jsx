import React, { useEffect, useState } from 'react'
import SearchResult from '../Components/SearchResult'
import './Search.css'

export default function Search() {
    const [result, setResult] = useState([])
    const [resultLength, setResultLength] = useState(0)

    useEffect(() => {
        fetch('https://ecommerce-leonell.herokuapp.com/products/search', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                search: localStorage.getItem('search')
            })
        }).then(res => res.json()).then(data => {
            setResultLength(data.length)
            setResult(data.map(item => {
                return (
                    <SearchResult key={item._id} resultProp={item} />
                )
            }))
        })
    }, [])


    return (
        <div className="search">
            <div className="smCon">
                <div className="row">
                    <h2>Seach Result for {localStorage.getItem('search')}: {resultLength} </h2>
                </div>
                <div className="row">
                    {result}
                </div>
            </div>
        </div>
    )
}
