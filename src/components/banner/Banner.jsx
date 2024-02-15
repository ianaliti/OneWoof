import React from 'react'
import MyMainButton from '../buttons/myMainButton/MyMainButton'


const Banner = () => {
    return (
        <div className='banner'>
            <div className="information">
                <h3>Act fast to save $150</h3>
                <h1>Introductory price ends soon</h1>
                <h3>Order the VanWoof S4 &amp; X4 for the introductory price of $2.198 before it ends on June 26.</h3>
                <div className="buttons">
                    <MyMainButton className="button">Buy the S4</MyMainButton>
                    <MyMainButton className="button">Buy the X4</MyMainButton>
                </div>
            </div>
        </div>
    )
}

export default Banner