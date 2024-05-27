import React from "react";

function Fasilitas() {
  return (
    <>
      <div class="container">
        <div class="float-card">
          <div class="row">
            <div class="col-4">
              <div class="fasilitas d-flex">
                <div class="cover">
                  <img src="/asset/pict/online-test 1.png" class="img-fluid " />
                </div>
                <div class="desc ">
                  <p class="green-building">
                    <b>Green buliding</b>{" "}
                  </p>
                  <p class="title">
                    Elemen hijau pada bangunan sebagai barrier cahaya dan panas
                    matahari
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="fasilitas d-flex">
                <div class="cover" id="blue-area">
                  <img src="/asset/pict/certification 1.png" class="img-fluid " />
                </div>
                <div class="desc ">
                  <p class="green-building">
                    <b>Blue Area</b>
                  </p>
                  <p class="title">
                    Tempat budidaya ikan dansebagai penyejuk alami
                  </p>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="fasilitas d-flex">
                <div class="cover" id="Passive">
                  <img src="/asset/pict/exam 1.png" class="img-fluid " />
                </div>
                <div class="desc ">
                  <p class="green-building">
                    <b>Active Energy</b>{" "}
                  </p>
                  <p class="title">
                    Orientasi bangunan utara-selatan, cross ventilation & rainwater harvesting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Fasilitas;
