const Kesenian = {
  async render() {
    const main = document.querySelector('main');
    main.classList.remove('reset-padding');

    return `
        <div class="kesenian">
            <div class="kesenianright-side"></br>
                <h1>Tari Kecak</h1>
                <p>Tari Kecak adalah sebuah tarian tradisional Bali yang unik karena tidak menggunakan musik instrumen, melainkan mengandalkan suara paduan suara laki-laki yang berulang-ulang mengucapkan kata "cak" dalam pola yang teratur. Tarian ini biasanya menggambarkan cerita epik dari Ramayana, sebuah wiracarita Hindu kuno, di mana para penari membentuk lingkaran besar sambil duduk dan menggerakkan tangan mereka. 
                </p>
            </div>
            <div class="kesenianleft-side">
                <img src="./tarikecak.png" alt="">
            </div>
        </div>

        </br></br><hr class="garis">
        <div class="kesenian1">
            <div class="kesenian1left-side">
                <img src="./ngaben.jpg" alt="">
            </div>
            <div class="kesenian1right-side"></br>
                <h1>Ngaben</h1>
                <p>Ngaben adalah upacara kematian yang penting dalam budaya Bali yang dilakukan untuk memuliakan roh orang yang meninggal. Upacara ini melibatkan serangkaian ritual yang kompleks, dimulai dengan penguburan sementara, dilanjutkan dengan pengumpulan tulang-belulang setelah jangka waktu tertentu, dan kemudian diakhiri dengan prosesi kremasi.
                </p>
            </div>
        </div>
        
        </br></br><hr class="garis">
        <div class="kesenian2">
            <div class="kesenian2right-side"></br>
                <h1>Ogoh-ogoh</h1>
                <p>Ogoh-ogoh adalah patung raksasa yang diproduksi secara tradisional oleh masyarakat Bali setiap tahunnya menjelang perayaan Nyepi, atau Tahun Baru Saka, dalam budaya Hindu Bali. Patung-patung ini merupakan simbol dari kejahatan atau roh jahat yang dibuat dengan detail yang menakjubkan. Masyarakat, terutama pemuda, bekerja sama untuk membuat ogoh-ogoh dengan menggunakan bahan-bahan seperti bambu, kayu, dan kertas. 
                </p>
            </div>
            <div class="kesenian2left-side">
                <img src="./ogohogoh.jpg" alt="">
            </div>
        </div>

        </br></br><hr class="garis">
        <div class="kesenian3">
            <div class="kesenian3left-side">
                <img src="./omedomedan.png" alt="">
            </div>
            <div class="kesenian3right-side"></br>
                <h1>Omed-omedan</h1>
                <p>Omed-omedan adalah sebuah tradisi unik dalam budaya Bali yang berlangsung setiap tahun di desa Banjar Kaja, Denpasar, tepatnya pada hari perayaan Nyepi, setelah melalui rangkaian ritual perayaan Saka Tahun Baru. Tradisi ini melibatkan para pemuda dan pemudi yang belum menikah yang berkumpul di jalan utama desa untuk melakukan tarian dan permainan yang melibatkan ciuman di tengah-tengah kerumunan.
                </p>
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

export default Kesenian;
