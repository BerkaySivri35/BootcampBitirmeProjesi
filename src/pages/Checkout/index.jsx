import React from 'react'
import Navbar from '../../Components/Navbar'
import Payment from '../../Components/Payment'
function Checkout(props) {
    return (
        <div>
            <Navbar />
            <Payment query={props.location.query} />
        </div>
    )
}

export default Checkout