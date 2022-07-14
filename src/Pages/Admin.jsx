import React, { useContext, useEffect, useState } from 'react'
import './Admin.css'
import axios from 'axios'

import Listings from '../Components/Listings'


export default function Admin() {




    const [imageFile, setImageFile] = useState(null)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [stock, setStock] = useState('')
    const [kind, setKind] = useState('')
    const [brand, setBrand] = useState('')
    const [active, setActive] = useState(false)



    useEffect(() => {
        if (name !== '' && description !== '' && category !== '' && price !== '' && imageFile !== undefined && imageFile !== null && stock !== '' && kind !== '' && brand !== '') {
            setActive(true)
        }
        else {
            setActive(false)
        }
    })






    function submit(e) {
        e.preventDefault()


        const formData = new FormData()
        formData.append('file', imageFile)
        formData.append('upload_preset', 'vuglmxxy')

        axios.post('https://api.cloudinary.com/v1_1/dyecs1c3j/image/upload', formData).then(res => setImage(res.data.secure_url))




    }

    useEffect(() => {
        if (image !== '') {
            fetch('https://ecommerce-leonell.herokuapp.com/products/addProduct', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({
                    name: name.toUpperCase(),
                    description: description,
                    category: category.toLowerCase(),
                    kind: kind.toLowerCase(),
                    brand: brand.toLowerCase(),
                    price: price,
                    image: image,
                    availableStock: stock
                })
            }).then(res => res.json()).then(data => {
                console.log(data)
                alert('Upload Successful')
                window.location.reload()
            })
        }
    }, [image])




    return (
        <div className="admin">
            <div className="mdCon">
                <div className="row head">
                    <div className="col2">
                        <div className="content">
                            <div className="title">
                                <h2>Start selling in easy 3 steps</h2>
                            </div>
                            <div className="box">
                                <div className="number">
                                    <h2>1</h2>
                                </div>
                                <div className="details">
                                    <h4>Register a Seller Account</h4>
                                    <p>Check seller account</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="number">
                                    <h2>2</h2>
                                </div>
                                <div className="details">
                                    <h4>Type details in the registration form</h4>
                                    <p>Enter Name, Email Address and Contact Number</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="number">
                                    <h2>3</h2>
                                </div>
                                <div className="details">
                                    <h4>Upload your product</h4>
                                    <p>Upload your product image and details.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    {(localStorage.getItem('isAdmin') === 'true') ?
                        <div className="col2">
                            <div className="content">
                                <div className="card">
                                    <div className="title">
                                        <h2>Sell your product.</h2>
                                        <div className="divider"></div>
                                    </div>

                                    <form onSubmit={submit}>
                                        <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} />
                                        <input type="text" placeholder='Description' onChange={e => setDescription(e.target.value)} />


                                        <div className="types">
                                            <input className='left' type="text" placeholder='Brand' onChange={e => setBrand(e.target.value)} />
                                            <input className='right' type="dropdown" placeholder='Kind' onChange={e => setKind(e.target.value)} />

                                        </div>
                                        <div className="category">
                                            <input className='left' type="text" placeholder='Category' onChange={e => setCategory(e.target.value)} />
                                            <input className='right' type="number" placeholder='Quantity' onChange={e => setStock(e.target.value)} />
                                        </div>
                                        <div className="price">
                                            <input className='left' type="number" placeholder='Price' onChange={e => setPrice(e.target.value)} />
                                            <input className='right' type="file" onChange={e => setImageFile(e.target.files[0])} />
                                        </div>
                                        <div className="upload">

                                            {active ?
                                                <button onClick={submit}>Upload Product</button>
                                                :
                                                <button className='inactive' onClick={submit} disabled>Upload Product</button>
                                            }

                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                        :
                        <div className="col2">
                            <div className="content">
                                <div className="card">
                                    <div className="title">
                                        <h2 className='alert'>Log in as Seller</h2>
                                        <div className="divider"></div>
                                    </div>

                                    <form>
                                        <input type="text" placeholder='Name' onChange={e => setName(e.target.value)} disabled />
                                        <input type="text" placeholder='Description' onChange={e => setDescription(e.target.value)} disabled />


                                        <div className="types">
                                            <input className='left' type="text" placeholder='Brand' onChange={e => setBrand(e.target.value)} disabled />
                                            <input className='right' type="dropdown" placeholder='Kind' onChange={e => setKind(e.target.value)} disabled />

                                        </div>
                                        <div className="category">
                                            <input className='left' type="text" placeholder='Category' onChange={e => setCategory(e.target.value)} disabled />
                                            <input className='right' type="number" placeholder='Quantity' onChange={e => setStock(e.target.value)} disabled />
                                        </div>
                                        <div className="price">
                                            <input className='left' type="number" placeholder='Price' onChange={e => setPrice(e.target.value)} disabled />
                                            <input className='right' type="file" onChange={e => setImageFile(e.target.files[0])} disabled />
                                        </div>
                                        <div className="upload">

                                            {(localStorage.getItem('isAdmin') === 'true') ?
                                                <button onClick={submit}>Upload Product</button>
                                                :
                                                <button className='inactive' onClick={submit} disabled>Upload Product</button>
                                            }


                                        </div>
                                    </form>


                                </div>
                            </div>
                        </div>
                    }

                </div>
                <div className="row aaa">
                    <div className="divider"></div>
                </div>

            </div>
        </div>
    )
}
