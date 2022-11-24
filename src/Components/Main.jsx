import React from 'react'

function Main() {
  return (
    <div>
            <article className="container">
                <div className="row p-4">
                    <div className="col-sm-12 col-md-6">
                        <a href="">
                            <img src="images/ikili_kutucuktr.webp" className="img-fluid" alt=""/>
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <a href="">
                            <img src="images/ikili_kutucuk2[14].webp" className="img-fluid" alt=""/>
                        </a>

                    </div>
                </div>
            </article>

            <article className="container">
                <div className="row p-4">
                    <div className="col-12">
                        <div className="row">
                            <h2 className="text-center">Uçuşuna Ek Hizmet Ekle</h2>
                        </div>
                        <div className="row">
                            <div className="col">
                                <ul className="list-inline mt-3">
                                    <li className="list-inline-item"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--service-food.webp" alt="food"/><span
                                            className="text-uppercase">yemek seçimi</span>
                                    </a></li>
                                    <li className="list-inline-item mt-3"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--service-seat.webp" alt="food"/><span
                                            className="text-uppercase">koltuk seçimi</span>
                                    </a></li>
                                    <li className="list-inline-item mt-3"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--service-luggage.webp" alt="food"/><span
                                            className="text-uppercase">bagaj seçimi</span>
                                    </a></li>
                                    <li className="list-inline-item mt-3"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--service-car.webp" alt="food"/><span
                                            className="text-uppercase">araç kiralama</span>
                                    </a></li>
                                    <li className="list-inline-item mt-3"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--service-hotel.webp" alt="food"/><span
                                            className="text-uppercase">hotels.com & Airbnb</span>
                                    </a></li>
                                    <li className="list-inline-item mt-3"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--service-transfer.webp" alt="food"/><span
                                            className="text-uppercase">Havaalanı ulaşım</span>
                                    </a></li>
                                    <li className="list-inline-item mt-3"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--service-parking.webp" alt="food"/><span
                                            className="text-uppercase">otopark</span>
                                    </a></li>
                                    <li className="list-inline-item mt-3"><a href="" className="btn btn-sm btn-outline-warning p-4">
                                        <img src="assets/icons/icon--gift-card.webp" alt="food"/><span
                                            className="text-uppercase">hediye kartı</span>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

             <article className="container">
                <div className="row ">
                    <h2 className="text-center">En Ucuz Fiyatlarımla Uç!</h2>
                </div>

                <div className="row mt-4">
                    <div className="col-sm-12 col-md-6 col-lg-3 Card">
                        <a href="" className="text-decoration-none Card">
                            <div className="card shadow-lg p-2 mb-5 bg-body rounded" style={{width: "18rem"}}>
                                <img src="assets/cities/best-deals-v1-izmir-sm.jpg" className="card-img-top" alt="Izmir" />
                                <div className="card-body">
                                    <h5 className="card-title">İzmir</h5>
                                    <p className="card-text">419,99 TL'den başlayan fiyatlarla</p>
                                </div>
                            </div>
                        </a>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3 Card">
                        <a href="" className="text-decoration-none Card">
                            <div className="card shadow-lg p-2 mb-5 bg-body rounded" style={{width: "18rem"}}>
                                <img src="assets/cities/best-deals-v1-ankara-sm.jpg" className="card-img-top" alt="Izmir"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Ankara</h5>
                                        <p className="card-text">419,99 TL'den başlayan fiyatlarla</p>
                                    </div>
                            </div>
                        </a>

                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-3  Card">
                        <a href="" className="text-decoration-none Card">
                            <div className="card shadow-lg p-2 mb-5 bg-body rounded" style={{width: "18rem"}}>
                                <img src="assets/cities/best-deals-v1-antalya-sm.jpg" className="card-img-top" alt="Izmir"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Antalya</h5>
                                        <p className="card-text">419,99 TL'den başlayan fiyatlarla</p>
                                    </div>
                            </div>
                        </a>

                    </div>
                    <div className="col-sm-12 col-md-3  Card">
                        <a href="" className="text-decoration-none Card">
                            <div className="card shadow-lg p-2 mb-5 bg-body rounded" style={{width: "18rem"}}>
                                <img src="assets/cities/best-deals-v1-lefkosa-sm.jpg" className="card-img-top" alt="Izmir"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Lefkoşa</h5>
                                        <p className="card-text">419,99 TL'den başlayan fiyatlarla</p>
                                    </div>
                            </div>
                        </a>

                    </div>
                </div>

            </article> 
        </div>
  )
}

export default Main