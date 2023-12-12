const formpendaftran = {
  async render() {
    const main = document.querySelector('main');
    main.classList.remove('reset-padding');

    return `<div class="daftar">
      <form class="daftar" onsubmit="showConfirmationModal(event)">
        <h1 class="form">Form Pendaftaran Event</h1>
        <label for="nama">Nama Lengkap:</label>
        <input type="text" id="nama" name="nama" required>
        
        <label for="email">Alamat Email:</label>
        <input type="email" id="email" name="email" required>
        
        <label for="no_telepon">No Telepon:</label>
        <input type="text" id="no_telepon" name="no_telepon" required>
        
        <label for="event">Event Budaya Bali yang diikuti:</label>
        <select id="event" name="event">
          <option value="Festival Sanur Village">Festival Sanur Village</option>
          <option value="Pesta Kesenian Bali">Pesta Kesenian Bali</option>
          <option value="Bali International Film Festival">Bali International Film Festival</option>
          <option value="Tari Kecak">Tari Kecak</option>
        </select>
        
        <div class="checkbox">
          <input type="checkbox" id="kesediaan" name="kesediaan" required>
          <label for="kesediaan">Saya bersedia hadir dalam event</label>
        </div>
        
        <div class="Pendaftaran-Button">
          <a href=".#/event" class="Pendaftaran-Button1"> Back</a>
          <button type="submit" class="Pendaftaran-Button2"> Daftar</button>
        </div>   
      </form></div>

      <!-- Modal Structure -->
      <div id="confirmationModal" class="modal">
        <div class="modal-content">
          <h2>Ticket Event</h2></br>
          <hr style="border: 2px solid black; margin: 0;">
          <p><b>Nama Lengkap : </b><span id="confirmNama"></span></p>
          <p><b>Alamat Email : </b><span id="confirmEmail"></span></p>
          <p><b>No Telepon : </b><span id="confirmNoTelepon"></span></p>
          <p><b>Event Budaya Bali yang diikuti : </b><span id="confirmEvent"></span></p>
          <hr style="border: 2px solid black; margin: 0;">
          <div class="Posterhome-Button">
            <button onclick="confirmRegistration()" class="btn1">Konfirmasi</button></br>
            <button onclick="cancelConfirmation()" class="btn2">Batal</button>
          </div>
        </div>
      </div>

      <!-- Success Modal Structure -->
      <div id="successModal" class="modal">
        <div class="modal-content">
          <h2>Pemesanan Tiket Berhasil!</h2>
          <span>Terima kasih atas pendaftarannya.</span>
          <div class="Posterhome-Button">
            <button onclick="closeSuccessModal()" class="btn1">OK</button>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // hide hamburger
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.add('hide-content');

    // hide nav
    const navigasi = document.querySelector('nav');
    navigasi.classList.add('hide-content');

    // Initialize the modal
    const modal = document.getElementById('confirmationModal');
    const confirmNama = document.getElementById('confirmNama');
    const confirmEmail = document.getElementById('confirmEmail');
    const confirmNoTelepon = document.getElementById('confirmNoTelepon');
    const confirmEvent = document.getElementById('confirmEvent');

    window.showConfirmationModal = function (event) {
      event.preventDefault();
      modal.style.display = 'block';

      // Set values in the modal
      confirmNama.textContent = document.getElementById('nama').value;
      confirmEmail.textContent = document.getElementById('email').value;
      confirmNoTelepon.textContent = document.getElementById('no_telepon').value;
      confirmEvent.textContent = document.getElementById('event').value;
      // Add the following lines for date and location once you have those input fields in your form
      // confirmTanggalLokasi.textContent = document.getElementById('tanggal_lokasi').value;
    };

    window.confirmRegistration = async function () {
      // Handle confirmation logic (e.g., send data to the server)
      // You can add an AJAX request here if needed

      // Close the modal after confirmation
      // Get the form data
      const formData = {
        name: document.getElementById('nama').value,
        email: document.getElementById('email').value,
        phone_number: document.getElementById('no_telepon').value,
        event: document.getElementById('event').value,
        // Add other form fields as needed
      };
      try {
        // Make a POST request to your API endpoint
        const response = await fetch('http://localhost:3000/event/store', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Handle successful response, e.g., show a success message
          console.log('Registration successful');
        } else {
          // Handle error response, e.g., show an error message
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error:', error.message);
      } finally {
        // Close the modal and show success modal regardless of the API response
        modal.style.display = 'none';
        document.getElementById('successModal').style.display = 'block';
      }
    };

    window.cancelConfirmation = function () {
      // Close the modal on cancel
      modal.style.display = 'none';
    };

    // eslint-disable-next-line func-names
    window.closeSuccessModal = function () {
      // Close the success modal
      document.getElementById('successModal').style.display = 'none';
      // Optionally, you can redirect to the event page after closing the modal
      window.location.href = '.#/event';
    };
  },
};

export default formpendaftran;
