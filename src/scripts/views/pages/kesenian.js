const Kesenian = {
    async render() {
      const main = document.querySelector('main');
      main.classList.remove('reset-padding');
  
      return `
              <div class="trash">
                  <div class="trash-group">
                      <div class="trash-wrap">
                          <div class="trash-image"></div>
                          <p><span>Pura Bali </span><br>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
                      </div>
                      <div class="trash-wrap">
                          <p><span>Pulau Bali</span><br>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
                          <div class="trash-image"></div>
                      </div>
                      <div class="trash-wrap">
                          <div class="trash-image"></div>
                          <p><span>Pantai Bali</span><br>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
                      </div>
                      <div class="trash-wrap">
                          <p><span>Cewek Bali</span><br>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan.</p>
                          <div class="trash-image"></div>
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
  
  export default Kesenian;
  