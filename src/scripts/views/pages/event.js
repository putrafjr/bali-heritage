const Event = {
    async render(){
        const main = document.querySelector('main');
        main.classList.remove('reset-padding');

      return `
        <div class="container">
            <h1 class="text-center mb-3">
                Kami menyambut anda untuk menjadi<br>bagian dari event kami disini
            </h1>
            <div class="d-flex align-items-center">
                <img src="/event1.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#" class="nav-link">
                        <h2 class="fw-bold">Judul Event (Dapat Diklik)</h2>
                    </a>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
            <hr>
            <div class="d-flex align-items-center">
                <img src="/event2.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#" class="nav-link">
                        <h2 class="fw-bold">Judul Event (Dapat Diklik)</h2>
                    </a>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
            <hr>
            <div class="d-flex align-items-center">
                <img src="/event3.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#" class="nav-link">
                        <h2 class="fw-bold">Judul Event (Dapat Diklik)</h2>
                    </a>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
            <hr>
            <div class="d-flex align-items-center">
                <img src="/event4.png" alt="" style="width: 479px; height: 364px;">
                <div class="text-event">
                    <a href="#" class="nav-link">
                        <h2 class="fw-bold">Judul Event (Dapat Diklik)</h2>
                    </a>
                    <p><span><i class="bi bi-clock"></i></span> 19 Desember 2023, 07.00 p.m</p>
                    <p><span><i class="bi bi-geo-alt-fill"></i></span> Jlanin aja dulu</p>
                    <p><span><i class="bi bi-coin"></i></span> Gratis (Free)</p>
                    <a href="#" class="btn btn-primary rounded-pill border-4">Daftar</a>
                </div>
            </div>
            <hr>
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