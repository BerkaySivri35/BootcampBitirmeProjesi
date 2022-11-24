import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function FlightSearch() {
    const [nereden,setNereden] = useState("")
    const [nereye,setNereye] = useState("")
    const [gidisTarihi,setGidisTarihi] = useState("")
    // const [donusTarihi,setDonusTarihi] = useState("")
    const [yolcuSayisi,setYolcuSayisi] = useState("")
    const [showTickets,setShowTickets] = useState(false)
    const [tickets,setTickets] = useState("")
    const [biletler, setBiletler] = useState([])

    useEffect(() => {
        axios.get('https://localhost:7251/api/Flights')
        .then(function (response) {
            console.log(response)
            setTickets(
                response.data
            )
        })
        .catch(function (error) {
            console.log(error);
        });
    
      
    }, [])

    function onFormSubmit(e) {
        e.preventDefault();
        const formElements = e.target.elements
        setNereden(formElements.neredenTxt.value)
        setNereye(formElements.nereyeTxt.value)
        setGidisTarihi(formElements.gidisT.value)
        // setDonusTarihi(formElements.donusT.value)
        setYolcuSayisi(formElements.yolcuS.value)

        tickets.map((e,i)=>{
            console.log(e)
            if(e.start===nereden && e.end===nereye){
                //setShowTickets(true)
                setBiletler(oldArray => [...oldArray,e])

            }

            // else{
            //     alert("Bilet Bulunamadı")
            // }

        })
        setShowTickets(true)
    }    
    
    return (
    <div class="container  p-5">

                <div class="row bg-warning p-3 rounded-4 shadow-lg p-3 mb-5 bg-body rounded">
                    <div class="col">
                        <div class="row">
                            <h3 class="text-center">
                                <span className="me-3">
                                    <img src="assets/images/flightIcon.png" class="flightIcon" alt="icon" />
                                </span>
                                Ucuz Uçak Bileti Ara
                            </h3>
                        </div>
                        
                        <form onSubmit={onFormSubmit}>
                            <div class="row p-4">
                                <div class="col-sm-12 col-md-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Nereden</span>
                                        <input type="text" class="form-control" name="neredenTxt" id="neredenTxt" />

                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-6">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="inputGroup-sizing-default">Nereye</span>
                                        <input type="text" class="form-control" name="nereyeTxt" />

                                    </div>
                                </div>

                            </div>




                            <div class="row p-4">
                                <div class="col-sm-12 col-md-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" for="gidisT">Gidiş Tarihi: </span>
                                        <input type="date" class="form-control" id="gidisT" name="gidisT" required />
                                    </div>

                                </div>
                                {/* <div class="col-sm-12 col-md-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" for="donusT">Dönüş Tarihi: </span>
                                        <input type="date" class="form-control" id="donusT" name="donusT" required/>
                                    </div>
                                </div> */}
                                <div class="col-sm-12 col-md-3">
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" for="yolcuS">Yolcu Sayısı: </span>
                                        <input type="number" class="form-control" id="yolcuS" name="yolcuS" min="1"  />
                                    </div>
                                </div>

                                <div class="col-sm-12 col-md-3 ">
                                    <div class="d-grid gap-2" >
                                        <button type="submit" class="btn btn-success">Uçuş Ara</button>
                                    </div>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

{
    showTickets?        (biletler.map((e,i)=>(
        <Link to={{ pathname: '/satinalma', query: { nereden: nereden, nereye: nereye,  kalkisS:e.starttime, varisS:e.arrivetime,Tarih:e.date, firma: e.name,yolcuSayisi:yolcuSayisi  } }} className="text-decoration-none">
    <div className="container-fluid p-0">

        <article class="container px-5 pt-4 my-3 rounded-5 border border-2 border-success Card">
            <div class="text-decoration-none text-dark">
                <div class="row ">
                    <div class="col-4">
                        <div class="row">
                            <div class="col-sm-12 col-md-8 ">
                                <h1 class="text-warning">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black"
                                            class="bi bi-airplane-fill planeskewed" viewBox="0 0 16 16">
                                            <path
                                                d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                        </svg>
                                    </span>
                                    {e.name}
                                </h1>
                            </div>
                            <div class="col-sm-12 col-md-4  d-flex justify-content-center">
                                <small class="text-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        class="bi bi-briefcase-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                                        <path
                                            d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                                    </svg>
                                    Bagaj 15kg
                                </small>
                            </div>
                        </div>


                    </div>

                    <div class="col-sm-12 col-md-4">
                        <div class="row ">
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <h2>{e.starttime}</h2>

                                        <span>
                                            {nereden}
                                        </span><br />
                                        {/* <span>
                                            {e.date}
                                        </span> */}
                                    </div>
                                    <div class="col">
                                        <p class="text-center">
                                            <small>Direkt Uçuş</small>
                                        </p>
                                        <p>
                                            ----------------
                                        </p>

                                        {/* <p class="text-center">
                                            <small>
                                                Tarih: {e.date}
                                            </small>
                                        </p> */}

                                    </div>
                                    <div class="col">
                                        <h3 class="text-secondary">
                                            {e.arrivetime}
                                        </h3>
                                        <span>{nereye}</span><br />
                                        {/* <span>{donusTarihi}</span> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="row p-5">
                            <button class="btn btn-outline-success ">{e.price} TL</button>
                        </div>

                    </div>
                    <div className='row'>
                    <p class="text-center">
                                            <small className='fw-bold'>
                                                Tarih: {e.date}
                                            </small>
                                        </p>
                    </div>
                </div>
            </div>

        </article>
    </div>
</Link>
    )))       : undefined
}
            </div>
  )
}


export default FlightSearch