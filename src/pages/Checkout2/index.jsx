import React from 'react'
import CheckTicket from '../../Components/CheckTicket'
import Navbar from '../../Components/Navbar'


function Checkout2(props) {
  return (
    <div>
            <Navbar />
            <CheckTicket query={props.location.query} />
        </div>
  )
}

export default Checkout2