const Beranda = {
  async render() {
    const main = document.querySelector('main');
    main.classList.remove('reset-padding');

    return `
    <div class="jumbutron">
    <div class="jumbutron-content">
        <div class="text-content">
            </br>
            <h3>Explore Bali</h3>
            <div class="jumbutron-button">
                <a href=".#video" class="Posterhome-Button3">Sekilas Mengenai Bali</a>
            </div>  
        </div>
    </div>
    </div>

    <div class="Posterhome">
    <div class="Posterhome-image"></div>
    <div class="Posterhome-text">
        <h2>Bali Heritage</h2>
        <p>Selamat datang di Bali Heritage, sebuah platform untuk memahami </br> lebih  dalam tentang kekayaan budaya Bali. Keindahan budaya Bali </br>  yang  merangsang minat dalam menjaga dan melestarikan warisan budaya Bali. </p> 
        <div class="Posterhome-Button">
            <a href=".#/kesenian" class="Posterhome-Button1"> Kesenian</a>
            <a href=".#/event" class="Posterhome-Button2"> Event</a>
            <!-- <a href=".#/login" class="Posterhome-Button2"> Login Admin</a> -->
        </div>   
    </div>
    </div>

<hr style="border: 3px solid black; margin: 0;">

<div class="contenthome">
    <div class="contenthome-group">
        <div class="contenthome-wrap">
            <div class="contenthome-image"></div>
            <p></br><span>Kesenian Bali</span></br></br>Kesenian Bali adalah bagian yang tak terpisahkan dari kehidupan dan budaya </br> masyarakat Bali. kesenian Bali terbentuk dari adanya filosofi dan </br> kehidupan masyarakat Bali yang sehari-hari.</p>
        </div>
        <div class="contenthome-wrap">
            <p></br><span>Tradisi Bali</span></br></br>Tradisi Bali adalah warisan budaya yang mencakup banyak aspek kehidupan </br> sehari-hari dan ritual keagamaan. Tradisi tersebut menjadi landasan kuat bagi </br> kehidupan  dan identitas budaya masyarakat yang telah hidup di Bali.</p>
            <div class="contenthome-image"></div>
        </div>
        <div class="contenthome-wrap">
            <div class="contenthome-image"></div>
            <p></br><span>Pariwisata Bali</span></br></br>Pariwisata Bali merupakan kombinasi dari alam yang indah dan warisan </br> budaya  yang kaya. Ini adalah tempat di mana wisatawan dapat menikmati </br> liburan  yang  menggabungkan keindahan alam dengan adat istiadat Bali.</p>
        </div>
    </div>
</div>

<hr style="border: 3px solid black; margin: 0;">

<div class="video-container">
    <h2 id="video">Mengenal Budaya Bali</h2></br>
    <video loop autoplay muted class="video-style">
        <source src="/Video/Bali Opening.mp4" type="video/mp4">
    </video>
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

export default Beranda;
