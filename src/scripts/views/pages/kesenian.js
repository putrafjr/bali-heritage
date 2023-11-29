const Kesenian = {
    async render() {
      const main = document.querySelector('main');
      main.classList.remove('reset-padding');
  
      return `
        <div class="Kesenian">
            <div class="Kesenian-text"></br></br>
                <h2>Tari Kecak</h2>
                <p>Tari Kecak adalah bentuk tarian tradisional yang berasal dari Bali, Indonesia.</p>
                <p>Tarian ini terkenal vokal "cak-cak-cak" yang dihasilkan oleh sekelompok penari pria yang duduk melingkar.</p>
                <p>Tarian Kecak sering dianggap sebagai tarian dramatik karena sering diadaptasi untuk menceritakan cerita epik, terutama dari wiracarita Ramayana.</p> 
            </div>
            <div class="Kesenian-image"></div>
        </div>

        <div class="Kesenian1">
            <div class="Kesenian1-image"></div>
            <div class="Kesenian1-text"></br></br>
                <h2>Ngaben</h2>
                <p>Ngaben adalah upacara kremasi tradisional di Bali, Indonesia.</p>
                <p>Upacara ini merupakan salah satu ritual keagamaan Hindu yang sangat penting bagi masyarakat Bali.</p>
                <p>Ngaben dilakukan untuk membersihkan roh orang yang meninggal dan membantu mereka melewati kehidupan setelah mati.</p> 
            </div>
        </div>

        <div class="Kesenian2">
            <div class="Kesenian2-text"></br></br>
                <h2>Ogoh-Ogoh</h2>
                <p>Ogoh-ogoh adalah patung raksasa yang merupakan bagian penting dari perayaan Hari Raya Nyepi di Bali, Indonesia.</p> 
                <p>Ogoh-ogoh memiliki makna simbolis yang mendalam. Patung ini sering kali mewakili roh jahat atau kejahatan dalam tradisi Hindu.</p> 
            </div>
            <div class="Kesenian2-image"></div>
        </div>

        <div class="Kesenian3">
            <div class="Kesenian3-image"></div>
            <div class="Kesenian3-text"></br></br>
                <h2>Omed-omedan</h2>
                <p>Omed-omedan adalah tradisi unik yang dilakukan oleh masyarakat desa Banjar Kaja di Bali, Indonesia.</p> 
                <p>Tradisi ini menjadi bagian dari perayaan hari raya Saraswati, yang dirayakan setiap 210 hari sekali dalam kalender Pawukon.</p> 
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
  