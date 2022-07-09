import React from 'react'
import './Featured.css'

export default function Featured() {
    return (
        <div className="featured">
            <div className="smCon">
                <div className="row">
                    <div className="col2">
                        <div className="content">
                            <img src={require(`../img/vr.png`)} alt="" />
                        </div>
                    </div>
                    <div className="col2">
                        <div className="content">
                            <p>Exclusive  on Online Store</p>
                            <h1>Samsung Gear VR</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum esse dolore distinctio quos in rerum ducimus quis? Quidem commodi ad aspernatur rem qui voluptas facilis consequuntur perferendis excepturi, deserunt eveniet.</p>
                            <button>View Product</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
