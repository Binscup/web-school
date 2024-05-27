import React from "react";

function Profile() {
  return (
    <>
      <div class="profile" id="profile">
        <div class="container">
          <div class="title-profile text-center">
            <p>
              <b>Profile</b>
            </p>
            <hr class="arrow mx-auto" />
          </div>
          <div class="row">
            <div class="col-6">
              <img src="/asset/pict/logo-sekul.png" class="img-fluid" />
            </div>
            <div class="col-6">
              <div class="text-desc">
                <b>
                  Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI
                  BAZMA)
                </b>{" "}
                merupakan sekolah unggulan berasrama yang diperuntukkan bagi
                anak-anak tidak mampu. Pembangunan sekolah, baik fasilitas
                maupun operasional didanai dari hasil pengelolaan wakaf dan
                sumber dana sosial kemanusiaan lainnya yang diamanahkan oleh
                masyarakat. SMK TI BAZMA menyelenggarakan program pembelajaran
                yang ditempuh selama 4 tahun dengan siswa-siswa yang berasal
                dari berbagai daerah di seluruh Indonesia. SMK TI Bazma
                menyelenggarakan pendidikan dengan jurusan SIJA (Sistem
                Informatika, Jaringan & Aplikasi) dengan kombinasi kurikulum
                berbasis asrama.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Profile;
