import React from 'react'

function Card() {
  return (
    <div className="container-fluid p-0">
                <FlightSearch/>
                <article class="container px-5 pt-4 my-3 rounded-5 border border-2 border-success Card">
                    <a href="checkout.html" class="text-decoration-none text-dark">
                        <div class="row ">
                            <div class="col-4">
                                <div class="row">
                                    <div class="col-8 ">
                                        <h1 class="text-warning">
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black"
                                                    class="bi bi-airplane-fill planeskewed" viewBox="0 0 16 16">
                                                    <path
                                                        d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z" />
                                                </svg>
                                            </span>
                                            Pegasus
                                        </h1>
                                    </div>
                                    <div class="col-4  d-flex justify-content-center">
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

                            <div class="col-4">
                                <div class="row ">
                                    <div class="col">
                                        <div class="row">
                                            <div class="col">
                                                <h2>21:00</h2>

                                                <span>
                                                    
                                                </span>
                                            </div>
                                            <div class="col">
                                                <p class="text-center">
                                                    <small>1s 10dk</small>
                                                </p>
                                                <p>
                                        ----------------
                                                </p>

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
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="row p-5">
                                    <button class="btn btn-outline-success ">799 TL</button>
                                </div>

                            </div>
                        </div>
                    </a>

                </article>
            </div>
  )
}

export default Card