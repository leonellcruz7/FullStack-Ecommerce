import React from 'react'
import './Filter.css'

export default function Filter() {
    return (
        <div className="col6 filter">
            <div className="content">
                <h4>Choose Product</h4>
                <ul>
                    <li>
                        <div>
                            <input type="radio" name='options' id='Top' />
                        </div>
                        <div className="div">
                            <label for='Top'>Top</label>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name='options' id='Shorts' />
                        </div>
                        <div className="div">
                            <label for='Shorts'>Shorts</label>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name='options' id='Pants' />
                        </div>
                        <div className="div">
                            <label for='Pants'>Pants</label>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name='options' id='Jeans' />
                        </div>
                        <div className="div">
                            <label for='Jeans'>Jeans</label>
                        </div>
                    </li>
                    <li>
                        <div>
                            <input type="radio" name='options' id='Underwear' />
                        </div>
                        <div className="div">
                            <label for='Underwear'>Underwear</label>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )
}
