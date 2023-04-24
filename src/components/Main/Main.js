import React from 'react'
import './Main.css'
import img1 from "../../image/img1.svg"

function Main() {
    return (
        <div className='Main'>
            <div className="left">
                <img src={img1} alt="" />
            </div>
            <div className="right">
                <h1>Create together, </h1>
                <h1>earn together.</h1>
                <p className='p'>Add a Split to your NFT to seamlessly pay creative collaborators—photographers, producers, choreographers, dancers, poets—and so on.</p>
                <p>You can also use Splits to donate directly to the causes you care  about most. That’s the web3 way.</p>
                <button>Learn More</button>
            </div>
        </div>
    )
}

export default Main