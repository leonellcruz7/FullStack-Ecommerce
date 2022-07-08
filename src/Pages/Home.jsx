import React from 'react'
import './Home.css'
import Featured from '../Components/Featured'
import Categories from '../Components/Categories'
import Filter from '../Components/Filter'
import ProductSection from '../Components/ProductSection'
import Testimonial from '../Components/Testimonial'
import Brands from '../Components/Brands'
import Footer from '../Components/Footer'


export default function Home() {

    return (
        <div className="home">
            <Categories />
            <Featured />

            <div className="smCon products">
                <div className="row">
                    <Filter />
                    <ProductSection />
                </div>
            </div>
            <Testimonial />
            <Brands />
            <Footer />



        </div>
    )
}
