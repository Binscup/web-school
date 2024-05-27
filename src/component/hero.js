import React from "react";

function Hero() {
  return (
    <>
      <div class="hero">
        <div class="container">
          <nav class="navbar navbar-expand-lg" id="header">
            <div class="container-fluid">
              <a class="navbar-head d-flex" href="#">
                <img src="/asset/pict/bazmamono.png" class="img-fluid" />
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class=" ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 1C0 0.447715 0.447715 0 1 0H15C15.5523 0 16 0.447715 16 1C16 1.55228 15.5523 2 15 2H1C0.447715 2 0 1.55228 0 1ZM0 7C0 6.44772 0.447715 6 1 6H15C15.5523 6 16 6.44772 16 7C16 7.55228 15.5523 8 15 8H1C0.447715 8 0 7.55228 0 7ZM1 12C0.447715 12 0 12.4477 0 13C0 13.5523 0.447715 14 1 14H15C15.5523 14 16 13.5523 16 13C16 12.4477 15.5523 12 15 12H1Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item mx-auto">
                    <a class="nav-link" href="#" id="margin">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mx-auto">
                    <a class="nav-link" href="#profile" id="margin">
                      Profile Sekolah
                    </a>
                  </li>
                  <li class="nav-item mx-auto">
                    <a class="nav-link" href="#" id="margin">
                      Kemitraan
                    </a>
                  </li>
                </ul>
                <button class="btn-contact" type="submit">
                  Contact
                </button>
              </div>
            </div>
          </nav>
          <div class="content">
            <div class="row">
              <div class="col-md-6">
                <div class="title-content">
                  <h1>SMK TI BAZMA</h1>
                  <h2>Merajut Asa, Menjejak & Menebar Manfaat</h2>
                  <h3>
                    Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                    BAZMA) merupakan sekolah unggulan berasrama
                  </h3>
                  <div class="toggle-btn d-flex">
                    <a href="" class="work">
                      Profile Sekolah
                    </a>
                    <a href="" class="contact">
                      Contact
                    </a>
                  </div>
                  <div class="icon d-flex">
                    <img src="/asset/pict/Bitmap.png" alt="" />
                    <div class="said">
                      <h1>"Lorem ipsum dolor sit amet, consectetur "</h1>
                      <p>Kepala Sekolah</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-6">
                <div class="img">
                  <img src="/asset/pict/pic.png" class="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
