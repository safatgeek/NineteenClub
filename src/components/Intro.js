import React from 'react'
import Logo from '../img/19ClubLogo.png'
import './intro.css'

const Intro = () => {
    return (
        <div className="container">

            <div className="intro">
                <div className="logo"><img src={Logo} alt="" /></div>

                <div className="heading">
                    <span>Nineteen</span>
                    <span>Club</span>
                    <span>SSC batch-2019</span>
                    <span>Jamalpur</span>
                    <span>estd. 2023</span>
                </div>
            </div>

        </div>
    )
}

export default Intro