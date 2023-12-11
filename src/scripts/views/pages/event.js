const Event = {
    async render(){
        const main = document.querySelector('main');
        main.classList.remove('reset-padding');

      return `
        <div class="container1">
            <h1 class="text-center mb-3">
            Kami Menyambut Anda Untuk Mengikuti </br> Beberapa Event Ini
            </h1>
            <div class="d-flex align-items-center">
                <img src="/event1.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Galungan and Kuningan</h2>
                    </a>
                    <p><span>Festival Galungan secara keseluruhan merujuk pada sepuluh hari yang dimulai dari Galungan dan berakhir pada Kuningan, dirayakan dalam siklus 210 hari.</p>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
        <hr style="border: 3px solid black; margin: 0;">
        <div class="container1">
            <div class="d-flex align-items-center">
                <img src="/event2.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Tari Kecak Event</h2>
                    </a>
                    <p><span>Festival Galungan secara keseluruhan merujuk pada sepuluh hari yang dimulai dari Galungan dan berakhir pada Kuningan, dirayakan dalam siklus 210 hari.</p>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
        <hr style="border: 3px solid black; margin: 0;">
        <div class="container1">
            <div class="d-flex align-items-center">
                <img src="/event3.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Anniversary of Denpasar</h2>
                    </a>
                    <p><span>Festival Galungan secara keseluruhan merujuk pada sepuluh hari yang dimulai dari Galungan dan berakhir pada Kuningan, dirayakan dalam siklus 210 hari.</p>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
        <hr style="border: 3px solid black; margin: 0;">
        <div class="container1">
            <div class="d-flex align-items-center">
                <img src="/event4.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#/formpendaftaran" class="nav-link">
                        <h2 class="fw-bold">Nyepi – Day of Silence</h2>
                    </a>
                    <p><span>Festival Galungan secara keseluruhan merujuk pada sepuluh hari yang dimulai dari Galungan dan berakhir pada Kuningan, dirayakan dalam siklus 210 hari.</p>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#/formpendaftaran" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
        </div>
  `;},

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