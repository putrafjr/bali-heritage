const tentangKami = {
    async render() {
        
      return  `
    <div class="about">
        <div class="left-side">
            <img src="./Image/Bali Heritage.png" alt="">
        </div>
        <div class="right-side">
            <h1 class="abouts">Tujuan Website</h1>
            <p class="desc">Website ini bertujuan untuk menciptakan platform informasi yang akan menyediakan pengetahuan yang
                menarik dan mudah diakses mengenai budaya Bali. Dengan cara ini, kami berharap untuk membangkitkan
                minat generasi muda dalam memahami, menghargai, dan mengambil bagian dalam menjaga keberlanjutan
                budaya Bali.
            </p>
        </div>
    </div>
<hr style="border: 3px solid black; margin: 0;">

<div class="card">
  <div class="header">
      <h1>Team Capstone</h1>
  </div>
  <div class="sub-header">
      <div class="teams">
          <div class="image"></div>
          <div class="nama">Dikri Nur Ahmad Saifullah</div>
          <div class="task">( F009YB134 )</div>

          <div class="sosial-media">
              <a href="#"></a>
              <a href="https://github.com/putrafjr/bali-heritage"></a>
              <a href="#"></a>
          </div>
      </div>
      

      <div class="teams">
          <div class="image"></div>
          <div class="nama">Demario S</div>
          <div class="task">( F621YB251 )</div>

          <div class="sosial-media">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
          </div>
      </div>

      <div class="teams">
      <div class="image"></div>
          <div class="nama">Putra Fajar</div>
          <div class="task">( F200YB370 )</div>
          
          <div class="sosial-media">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
          </div>
      </div>

      <div class="teams">
      <div class="image"></div>
          <div class="nama">Elisabeth Inggriani Sinaga</div>
          <div class="task">( F390XB303 )</div>

          <div class="sosial-media">
              <a href="#"><img src="" ></a>
              <a href="#"><img src="" ></a>
              <a href="#"><img src="" ></a>
          </div>
      </div>

      <div class="teams">
      <div class="image"></div>
          <div class="nama">Rayhan Vito Gustiansyah</div>
          <div class="task">( S284YB434 )</div>

          <div class="sosial-media">
              <a href="#"><img src="" ></a>
              <a href="#"><img src="" ></a>
              <a href="#"><img src="" ></a>
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
  
export default tentangKami;
  