const formpendaftran = {
    async render() {
      const main = document.querySelector('main');
      main.classList.remove('reset-padding');
  
      return `
      <form class="daftar">
      <h1 class="form">Form Pendaftaran Event</h1>
      <label for="nama">Nama Lengkap:</label>
      <input type="text" id="nama" name="nama" required>
      
      <label for="email">Alamat Email:</label>
      <input type="email" id="email" name="email" required>
      
      <label for="no_telepon">No Telepon:</label>
      <input type="text" id="no_telepon" name="no_telepon" required>
      
      <label for="event">Event Budaya Bali yang diikuti:</label>
      <select id="event" name="event">
          <option value="event1">Event 1</option>
          <option value="event2">Event 2</option>
          <option value="event3">Event 3</option>
          <option value="event4">Event 4</option>
      </select>
      
      <div class="checkbox">
          <input type="checkbox" id="kesediaan" name="kesediaan" required>
          <label for="kesediaan">Saya bersedia hadir dalam event</label>
      </div>
      <div class="Posterhome-Button">
      <a href=".#/event" class="Pendaftaran-Button1"> Back</a>
      <a href=".#" class="Pendaftaran-Button2"> Daftar</a>
  </div>   
  </form>
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
  
  export default formpendaftran;
  