import React from 'react'

function Footer() {
  return (
    <div class="container-fluid bg-warning mt-5">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                <p class="col-md-4 mb-0 text-muted">&copy; 2022 BiletiniAL, tüm hakları saklıdır.</p>

                <a href="/"
                    class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <img src="assets/images/plane.png" class="logo" alt=""/>
                </a>

                <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Kampanyalar</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Bilet İşlemlerim</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Hizmetlerimiz</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Bize Yazın</a></li>
                </ul>
            </footer>
        </div>
  )
}

export default Footer