const Beranda = {
  async render() {
    const main = document.querySelector('main');
    main.classList.remove('reset-padding');

    return `
            <div class="jumbtrone">
                <div class="jumbtrone-text">
                    <h2>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. </h2>
                    <p>By creating a visual guide along the way, the designer or developer can get input from the other people involved in the website such as the customer, their manager, and other members of the team. </p>
                </div>
                <div class="jumbtrone-image"></div>
            </div>
            <div class="benefit">
                <hr>
                <div class="info-group">
                </div>
            </div>
            <div class="trash">
                <hr>
                <div class="trash-group">
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

export default Beranda;
