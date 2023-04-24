import React from 'react'
import "./Line.css"
import img2 from "../../image/img2.svg"
import img3 from "../../image/img3.svg"


function Line() {
    return (
        <div className='Line'>
            <div className="left1">
                <h1>Download</h1>
                <p>In web3, artists are taking back ownership and control over their creativity. All collections on Crypter are creator-owned smart contracts that will stand the test of time. </p>
                <div className="btn">
                    <button>Apple Store </button>
                    <button>GOOGLE PLAY</button>
                </div>

            </div>
            <div className="right1">
                <h1>Newsletter</h1>
                <span>Get the latest Crypter updates</span>
                <div className="inputs">
                    <div className="inputs1">

                        <input type="text" placeholder='Name' />
                        {/* <img src={img2} alt="" /> */}
                    </div>
                    <div className="inputs2">

                        <input type="text" placeholder='Email' />
                        {/* <img src={img3} alt="" /> */}
                    </div>
                </div>

                <button>SUBSCRIBE NOW</button>


            </div>


            .
        </div>
    )
}

export default Line