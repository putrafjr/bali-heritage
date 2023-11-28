const Kesenian = {
    async render() {
      const main = document.querySelector('main');
      main.classList.remove('reset-padding');
  
      return `
        <div class="Kesenian">
            <div class="Kesenian-text"></br></br>
                <h2>Bali Heritage</h2>
                <p>Selamat datang di Bali Heritage, sebuah platform untuk memahami lebih dalam tentang kekayaan budaya Bali. </p> 
                <p>Keindahan budaya Bali yang merangsang minat dalam menjaga dan melestarikan warisan budaya. </p> 
            </div>
            <div class="Kesenian-image"></div>
        </div>

        <div class="Kesenian1">
            <div class="Kesenian1-image"></div>
            <div class="Kesenian1-text"></br></br>
                <h2>Bali Heritage</h2>
                <p>Selamat datang di Bali Heritage, sebuah platform untuk memahami lebih dalam tentang kekayaan budaya Bali. </p> 
                <p>Keindahan budaya Bali yang merangsang minat dalam menjaga dan melestarikan warisan budaya. </p> 
            </div>
        </div>

        <div class="Kesenian2">
            <div class="Kesenian2-text"></br></br>
                <h2>Bali Heritage</h2>
                <p>Selamat datang di Bali Heritage, sebuah platform untuk memahami lebih dalam tentang kekayaan budaya Bali. </p> 
                <p>Keindahan budaya Bali yang merangsang minat dalam menjaga dan melestarikan warisan budaya. </p> 
            </div>
            <div class="Kesenian2-image"></div>
        </div>

        <div class="Kesenian3">
            <div class="Kesenian3-image"></div>
            <div class="Kesenian3-text"></br></br>
                <h2>Bali Heritage</h2>
                <p>Selamat datang di Bali Heritage, sebuah platform untuk memahami lebih dalam tentang kekayaan budaya Bali. </p> 
                <p>Keindahan budaya Bali yang merangsang minat dalam menjaga dan melestarikan warisan budaya. </p> 
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
  