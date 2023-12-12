const Event = {
  async render() {
    const main = document.querySelector('main');
    main.classList.remove('reset-padding');

    return `
        <div class="container1">
            <div class="d-flex align-items-center">
                <img src="/event1.jpg" alt="">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Festival Sanur Village</h2>
                    </a>
                    <p><span>Sanur Village Festival adalah acara tahunan di Sanur, Bali, yang menampilkan seni, budaya, musik, dan kegiatan olahraga. Festival ini mempromosikan warisan lokal dan pariwisata.</p>
                    <p><span><i class="bi bi-clock"></i></span> 23 Agustus 2024, 07.00 pm</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jln. Iskandar Muda 1</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
        <hr style="border: 3px solid black; margin: 0;">
        <div class="container1">
            <div class="d-flex align-items-center">
                <img src="/event2.jpg" alt="">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Pesta Kesenian Bali</h2>
                    </a>
                    <p><span>Pesta Kesenian Bali (PKB) adalah festival tahunan di Bali yang menampilkan seni tradisional, musik, tari, dan pameran untuk mempromosikan kekayaan budaya lokal.</p>
                    <p><span><i class="bi bi-clock"></i></span> 20 Juni 2024, 07.00 pm</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jln. Iskandar Tua 4</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
        <hr style="border: 3px solid black; margin: 0;">
        <div class="container1">
            <div class="d-flex align-items-center">
                <img src="/event3.jpg" alt="">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Bali International Film Festival</h2>
                    </a>
                    <p><span>Bali International Film Festival (BALINALE) adalah acara tahunan yang menampilkan film-film internasional di Bali, mempromosikan budaya dan seni perfilman global.</p>
                    <p><span><i class="bi bi-clock"></i></span> 15 September 2024, 07.00 pm</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jln. Iskandar Balita 2</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
        <hr style="border: 3px solid black; margin: 0;">
        <div class="container1">
            <div class="d-flex align-items-center">
                <img src="/event4.jpg" alt="">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Tari Kecak</h2>
                    </a>
                    <p><span>Tari Kecak adalah pertunjukan tari tradisional Bali yang menonjolkan gerakan tari yang disertai dengan vokal "cak-cak" yang dihasilkan oleh kelompok penari.</p>
                    <p class="tengah"><span><i class="bi bi-clock"></i></span> 2 Maret 2024, 04.00 pm</p>
                    <p class="tengah"><span><i class="bi bi-geo-alt-fill"></i></span> Jln. Raya Iskandar 1</p>
                    <p class="tengah"><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
  `;
  },

  async afterRender() {
    // munculkan hamburger
    // hide hamburger
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('hide-content');

    // munculkan nav
    const navigasi = document.querySelector('nav');
    navigasi.classList.remove('hide-content');
  },
};

export default Event;
