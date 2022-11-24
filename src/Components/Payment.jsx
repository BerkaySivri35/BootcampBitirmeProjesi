import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Payment(props) {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [ad, setAd] = useState("")
    const [soyad, setSoyad] = useState("")
    const [dTarih, setDtarih] = useState("")
    const [TcNo, setTCNO] = useState("")
    //const [cinsiyet, setCinsiyet] = useState("Erkek")

    function onFormSubmit(e) {
        e.preventDefault();
        const FormElements = e.target.elements
        setEmail(FormElements.email.value)
        console.log(email)
        setPhone(FormElements.phone.value)
        setAd(FormElements.ad.value)
        setSoyad(FormElements.soyad.value)
        setDtarih(FormElements.dTarih.value)
        setTCNO(FormElements.TcNo.value)
        //setCinsiyet(FormElements.cinsiyet.value)
    }
    return (
        <div>
            <section class="container-fluid p-5 mb-5">
                <div class="row ">
                    <article class="col-8 ">
                        {/* <!-----------------------------------Gidiş Bilet----------------------------------------> */}
                        <div class="container bg-light">
                            <div class="row">
                                <div class="col">
                                    <div class="row">
                                        <h6 class="text-uppercase p-3">
                                            uçuş bilgileri
                                        </h6>
                                        <hr />
                                    </div>
                                    <div class="row">
                                        <p class="h6 p-2 bg-mavi">

                                            Gidiş: {props.query.Tarih}
                                        </p>
                                    </div>
                                    <div class="row">
                                        <div class="col-6">
                                            <p className='h5'>
                                                Firma: {props.query.firma}
                                            </p>
                                        </div>
                                        <div class="col-6">
                                            <div class="row ">
                                                <div class="col">
                                                    <div class="row">
                                                        <div class="col ">
                                                            <h2>{props.query.kalkisS}</h2>
                                                            <p>{props.query.nereden}</p>
                                                        </div>
                                                        <div class="col">
                                                            <p class="text-center">
                                                                <span>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                        height="16" fill="currentColor"
                                                                        class="bi bi-clock-fill" viewBox="0 0 16 16">
                                                                        <path
                                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                    </svg>
                                                                </span>
                                                                <small>1s 10dk</small>
                                                            </p>
                                                            <hr />
                                                            <p class="text-center">
                                                                <small>
                                                                    Direkt
                                                                </small>
                                                            </p>

                                                        </div>
                                                        <div class="col">
                                                            <h3 class="text-secondary">
                                                                {props.query.varisS}
                                                            </h3>
                                                            <p>
                                                                {props.query.nereye}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!------------------------------------Donus Bilet----------------------------------------------------------> */}
                        <hr />
                        {/* <div class="container bg-light">
                                <div class="row mt-3">
                                    <div class="col">
                                        <div class="row mt-4">
                                            <p class="h6 p-2 bg-mavi">
                                                Dönüş: 12 Kasım Cumartesi
                                            </p>
                                        </div>
                                        <div class="row">
                                            <div class="col-6">Pegasus </div>
                                            <div class="col-6">
                                                <div class="row ">
                                                    <div class="col">
                                                        <div class="row">
                                                            <div class="col">
                                                                <h2>21:00</h2>
                                                                <p>İzmir Adnan Menderes</p>
                                                            </div>
                                                            <div class="col">
                                                                <p class="text-center">
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                                            height="16" fill="currentColor"
                                                                            class="bi bi-clock-fill" viewBox="0 0 16 16">
                                                                            <path
                                                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                                                                        </svg>
                                                                    </span>
                                                                    <small>1s 10dk</small>
                                                                </p>
                                                                <hr />
                                                                <p class="text-center">
                                                                    <small>
                                                                        Direkt
                                                                    </small>
                                                                </p>

                                                            </div>
                                                            <div class="col">
                                                                <h3 class="text-secondary">
                                                                    22:10
                                                                </h3>
                                                                <p>
                                                                    Sabiha Gökçen
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                        {/* <!----------------------------------------Contact Form------------------------------------------> */}
                        
                        
                            <div class="container bg-light mt-2">
                                <div class="row">
                                    <h6 class="text-uppercase p-3">
                                        uçuş bilgileri
                                    </h6>
                                    <hr />
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                            <input type="email" class="form-control" id="email"
                                                placeholder="name@example.com" required />
                                        </div>

                                    </div>

                                    <div class="col-6">
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" class="form-label">Tel No: </label>
                                            <input type="tel" class="form-control" id="phone" name="phone"
                                                placeholder="5xx-xxx-xx-xx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
                                                required minLength={11} maxLength={11} />
                                        </div>
                                    </div>
                                    <div class="row p-3">
                                        <div class="form-check ms-2">
                                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                            <label class="form-check-label" for="defaultCheck1">
                                                <p class="small">Biletimi ÜCRETSİZ SMS ile alıp, kampanya ve duyuruları ticari
                                                    elektronik ileti olarak almayı ve kişisel verilerimin pazarlama amacıyla
                                                    işlenmesini onaylıyorum.</p>
                                            </label>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* <!--------------------------------------User Infos------------------------------------------------> */}
                            <div class="container bg-light mt-2">
                                <div class="row">
                                    <h6 class="text-uppercase p-3">
                                        yolcu bilgileri
                                    </h6>
                                    <hr />
                                </div>
                                <form onSubmit={onFormSubmit}>
                                    <div class="row">
                                        <div class="col-2">
                                            <div class="mb-3">
                                                <label class="form-label">Ad </label>
                                                <input type="text" class="form-control" id="ad" name="ad" placeholder="Yolcu Adı"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="mb-3">
                                                <label class="form-label">Soyad </label>
                                                <input type="text" class="form-control" id="soyad" name="soyad" placeholder="Soyadı"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="mb-3">
                                                <label class="form-label">Doğum Tarihi </label>
                                                <input type="text" class="form-control" id="dTarih" name="dTarih" placeholder="xx/xx/xxxx"
                                                    required />
                                            </div>
                                        </div>
                                        <div class="col-4">
                                            <div class="mb-3">
                                                <label class="form-label">TC Kimlik No </label>
                                                <input type="text" class="form-control" id="TcNo" name="TcNo" placeholder="TC No"
                                                    minLength="11" maxLength="11" required />
                                            </div>
                                        </div>
                                        <div class="row p-3">
                                            {/* <div class="col-8">
                                                <div class="form-check ms-3">
                                                    <input class="form-check-input" type="radio" name="Rerkek" id="Rerkek" />
                                                    <label class="form-check-label">
                                                        Erkek
                                                    </label>

                                                </div>

                                                <div class="form-check ms-3">
                                                    <input class="form-check-input" type="radio" name="Rkadin" id="Rkadin" />
                                                    <label class="form-check-label" >
                                                        Kadın
                                                    </label>
                                                </div>
                                            </div> */}

                                            <div class="col-4">
                                                <div class="form-check ms-2">
                                                    <input class="form-check-input" type="checkbox" value="" id="TcDegil" />
                                                    <label class="form-check-label" >
                                                        <p class="small">TC vatandaşı değilim</p>
                                                    </label>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <Link to='/tamamlandi'>
                                            
                                                <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                                            </Link>                                       
                                        </div>
                                    </div>
                                </form>






                            </div>
                        
                    </article>

                    <aside class="col-4">
                        {/* <!-----------------------------------------Checkout Credit Card----------------------------------------------> */}
                        <div class="container bg-light pb-4">
                            <div class="py-5 text-center">
                                <img class="d-block mx-auto mb-4" src="assets/images/plane.png" alt="" width="80" height="70" />
                                <h2>Keyifli Uçuşlar</h2>
                                <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
                            </div>

                            <div class="row g-5">
                                <div class="col">


                                    <hr />

                                    <h4 class="mb-3">Payment</h4>

                                    <div class="my-3">
                                        <div class="form-check">
                                            <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
                                            <label class="form-check-label" for="credit">Credit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
                                            <label class="form-check-label" for="debit">Debit card</label>
                                        </div>
                                        <div class="form-check">
                                            <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required />
                                            <label class="form-check-label" for="paypal">PayPal</label>
                                        </div>
                                    </div>

                                    <div class="row gy-3">
                                        <div class="col-md-6">
                                            <label for="cc-name" class="form-label">Name on card</label>
                                            <input type="text" class="form-control" id="cc-name" placeholder="" required />
                                            <small class="text-muted">Full name as displayed on card</small>
                                            <div class="invalid-feedback">
                                                Name on card is required
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <label for="cc-number" class="form-label">Credit card number</label>
                                            <input type="text" class="form-control" id="cc-number" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Credit card number is required
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <label for="cc-expiration" class="form-label">Expiration</label>
                                            <input type="text" class="form-control" id="cc-expiration" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Expiration date required
                                            </div>
                                        </div>

                                        <div class="col-md-3">
                                            <label for="cc-cvv" class="form-label">CVV</label>
                                            <input type="text" class="form-control" id="cc-cvv" placeholder="" required />
                                            <div class="invalid-feedback">
                                                Security code required
                                            </div>
                                        </div>
                                    </div>

                                    <hr class="my-4" />

                                    {/* <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button> */}

                                </div>
                            </div>
                        </div >
                    </aside >
                </div >

            </section >
        </div>
    )
}

export default Payment