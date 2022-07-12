import React from 'react'
import './Home.css'
import Featured from '../Components/Featured'
import Filter from '../Components/Filter'
import Testimonial from '../Components/Testimonial'
import Brands from '../Components/Brands'


export default function Home() {

    return (
        <div className="home">

            <Featured />
            <Filter />
            <Testimonial />
            <Brands />



        </div>
    )
}
