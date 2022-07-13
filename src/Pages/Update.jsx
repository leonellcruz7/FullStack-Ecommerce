import React, { useEffect, useState } from 'react'
import './Update.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Update() {
    const navigate = useNavigate()
    const [imageFile, setImageFile] = useState(localStorage.getItem('image'))
    const [name, setName] = useState(localStorage.getItem('productName'))
    const [description, setDescription] = useState(localStorage.getItem('description'))
    const [category, setCategory] = useState(localStorage.getItem('category'))
    const [price, setPrice] = useState(localStorage.getItem('price'))
    const [image, setImage] = useState('')
    const [stock, setStock] = useState(localStorage.getItem('stock'))
    const [kind, setKind] = useState(localStorage.getItem('kind'))
    const [brand, setBrand] = useState(localStorage.getItem('brand'))

    function update(e) {
        e.preventDefault()

        const formData = new FormData()
        formData.append('file', imageFile)
        formData.append('upload_preset', 'vuglmxxy')

        axios.post('https://api.cloudinary.com/v1_1/dyecs1c3j/image/upload', formData).then(res => setImage(res.data.secure_url))
    }
    useEffect(() => {
        if (image !== '') {
            fetch('https://ecommerce-leonell.herokuapp.com/products/updateproduct', {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: localStorage.getItem('productId'),
                    name: name,
                    description: description,
                    category: category,
                    kind: kind,
                    brand: brand,
                    price: price,
                    image: image,
                    availableStock: stock
                })
            }).then(res => res.json()).then(data => {
                console.log(data)
                alert('Update Successful')
                navigate('/admin')
            })
        }
    }, [image])


    return (
        <div className="update">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <img src={localStorage.getItem('image')} alt="" />
                        </div>
                    </div>
                    <div className="col2">
                        <div className="content">
                            <p>Name</p>
                            <input type="text" placeholder={name} onChange={e => setName(e.target.value)} />
                            <p>Description</p>
                            <input type="text" placeholder={description} onChange={e => setDescription(e.target.value)} />
                            <div className="number">
                                <div className='left'>
                                    <p>Price</p>
                                    <input type="number" placeholder={price} onChange={e => setPrice(e.target.value)} />
                                </div>
                                <div className='center'>
                                    <p>Available Stock</p>
                                    <input type="number" placeholder={stock} onChange={e => setStock(e.target.value)} />
                                </div>
                                <div className='last'>
                                    <p>Category</p>
                                    <input type="text" placeholder={category} onChange={e => setCategory(e.target.value)} />
                                </div>

                            </div>

                            <div className="class">
                                <div className='one'>
                                    <p>Kind</p>
                                    <input type="text" placeholder={kind} onChange={e => setKind(e.target.value)} />
                                </div>
                                <div className='two'>
                                    <p>Brand</p>
                                    <input type="text" placeholder={brand} onChange={e => setBrand(e.target.value)} />
                                </div>
                                <div className='last'>
                                    <p>Image</p>
                                    <input type="file" placeholder={imageFile} onChange={e => setImageFile(e.target.files[0])} />
                                </div>

                            </div>
                            <div className="buttons">
                                <button onClick={update}>Update</button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
