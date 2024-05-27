import React from "react";

const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];

function Kemitraan() {
  let currentSlide = 0;

  function showSlide(index) {
    const slider = document.querySelector(".slider");
    const totalSlides = document.querySelectorAll(".card").length;

    if (index >= totalSlides) {
      currentSlide = 0;
    } else if (index < 0) {
      currentSlide = totalSlides - 1;
    } else {
      currentSlide = index;
    }

    slider.style.transform = `translateX(-${currentSlide * 310}px)`;
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  // Show the first slide initially
  showSlide(currentSlide);

  return (
    <>
      <div class="Kemitraan">
        <div class="container">
          <p class="mitra text-center">
            <b>Kemitraan</b>
          </p>
          <hr class="arrow mx-auto" />
          <div class="row" id="mitra-desc">
            <div class="col-6">
              SMK TI Bazma adalah wujud cita-cita bersama dalam rangka
              memberikan ruang bagi peserta didik untuk dapat berkarya dan
              menjadi generasi produktif. Dengan bekal kecerdasan kognitif,
              emosional, dan spritual yang baik, siswa-siswa ini diharapkan
              dapat menjadi generasi unggul dan berdaya saing global.
              <br /> <br /> Oleh karena itu, SMK TI Bazma menjalin kerja sama
              dengan berbagai mitra Dunia Usaha dan Dunia Industri (DU/DI)
              sebagai upaya menyelaraskan kebutuhan industri dengan persiapan
              SDM yang kompeten. Bentuk kerja sama tersebut, antara lain: <br />{" "}
              <br /> Memberikan kesempatan kepada siswa untuk melakukan Praktek
              Kerja Industri (Prakerin) sebagai bekal persiapan menghadapi dunia
              kerja, Membantu dalam menyusun kurikulum yang selaras dengan
              sektor industri masa kini untuk meningkatkan kemampuan SDM agar
              dapat bersaing di dunia industri.
            </div>
            <div class="col-6">
              <div class="slider-container">
                <div class="slider">
                  <div class="card">
                    <img src="/asset/pict/pertamina.png" alt="Image 1" />
                  </div>
                  <div class="card">
                    <img src="/asset/pict/uper.png" alt="Image 2" />
                  </div>
                  <div class="card">
                    <img src="image3.jpg" alt="Image 3" />
                  </div>
                  <div class="card">
                    <img src="image4.jpg" alt="Image 4" />
                  </div>
                </div>
                <button class="prev" onclick="prevSlide()">
                  &#10094;
                </button>
                <button class="next" onclick="nextSlide()">
                  &#10095;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Kemitraan;
