import React from 'react'
import { Link } from 'react-router-dom'
function CheckTicket(props) {
  return (
    <div className='container mt-5'>
      <div className="row ">
        <div className="col-sm-12 col-md-12 d-flex justify-content-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="green" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
          </span>
          <h3 className='ms-4 mt-2'>Keyifli uçuşlar, bizi tercih ettiğiniz için teşekkür ederiz. </h3>
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <Link to='/'>
            <button className='btn btn-outline-success'>Tamamla</button>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default CheckTicket