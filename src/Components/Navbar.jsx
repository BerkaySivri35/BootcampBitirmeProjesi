import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [li1, setLi1] = useState("Kampanyalar")
    const [li2, setLi2] = useState("Bilet İşlemlerim")
    const [li3, setLi3] = useState("Hizmetlerimiz")
    const [li4, setLi4] = useState("Bize Yazın")
    const [li5, setLi5] = useState("TR")

    function changeEN() {
        console.log("Dil:EN");
        setLi1("Campaign")
        setLi2("Manage My Booking")
        setLi3("Services")
        setLi4("Contact Us")
        setLi5("EN")
    }
    function changeTR() {
        console.log("Dil: TR");
        setLi1("Kampanyalar")
        setLi2("Bilet İşlemlerim")
        setLi3("Hizmetlerimiz")
        setLi4("Bize Yazın")
        setLi5("TR")
    }
    return (
        <div class="container-fluid p-0 sticky-top">
            <nav class="navbar navbar-expand-lg bg-warning ">
                <div class="container-fluid">
                    <Link class="navbar-brand">
                        <img src="assets\images\plane.png" className="logo" alt="" /><span class="h4 ms-2">BiletiniAL.com</span>

                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto ms-5 mb-2 mb-lg-0 fw-bold">
                            <li class="nav-item disabled">
                                <a class="nav-link " href="#">{li1}</a>
                            </li>
                            <li class="nav-item disabled">
                                <a class="nav-link " href="#">{li2}</a>
                            </li>
                            <li class="nav-item disabled">
                                <a class="nav-link " href="#">{li3}</a>
                            </li>
                            <li class="nav-item disabled">
                                <a class="nav-link " href="#">{li4}</a>
                            </li>

                        </ul>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {li5}
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <div class="dropdown-item" onClick={changeTR}>TR
                                            <span>
                                                <img src="assets/images/tr.svg" alt="tr" />
                                            </span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="dropdown-item"  onClick={changeEN}>
                                            EN <span>
                                                <img src="assets/images/gb.svg" alt="" />
                                            </span>
                                        </div>
                                    </li>

                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar