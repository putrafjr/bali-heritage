const Admin = {
  async render() {
    const main = document.querySelector('main');
    main.classList.remove('reset-padding');

    return `
    <div class="sidebar-content">
      <div class="left-sidebar">
        <div class="sidebar">
        <h1>Data Pendaftar</h1>
        <hr style="border: 1px solid  #000; margin: 0;">
        <h1><a href="#/login">Logout</a></h1>
        <hr style="border: 1px solid  #000; margin: 0;">
        </div>
      </div>
     
   <div class="right-sidebar">
    <div class="content">
      <div class="main">
          <h2>Data Pendaftar Mengikuti Event</h2>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Nama</th>
                      <th>No Telp</th>
                      <th>Email</th>
                      <th>Event</th>
                      <th>Aksi</th>
                  </tr>
              </thead>
              <tbody>

              </tbody>
          </table>
        </div>
     </div>
  `;
  },

  async afterRender() {
    const tableBody = document.querySelector('table tbody');
    // eslint-disable-next-line func-names
    window.deleteEntry = async function (id) {
      try {
        const response = await fetch(`http://localhost:3000/event/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          window.location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    };

    try {
      // Make a GET request to your API endpoint
      const response = await fetch('http://localhost:3000/event');
      const responseData = await response.json();

      if (responseData.success === 'true') {
        // Initialize a counter for numbering the entries
        let counter = 1;

        // Loop through the data array and populate the table
        responseData.data.forEach((entry) => {
          const row = document.createElement('tr');

          row.innerHTML = `
                    <td>${counter}</td>
                    <td>${entry.name}</td>
                    <td>${entry.phone_number}</td>
                    <td>${entry.email}</td>
                    <td>${entry.event}</td>
                    <td>
                        <button id="delete" onclick="deleteEntry('${entry._id}')">Delete</button>
                    </td>
                `;
          tableBody.appendChild(row);

          // Increment the counter
          counter++;
        });
      } else {
        console.error('Failed to fetch data:', responseData.message);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error.message);
    }

    // hide hamburger
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.add('hide-content');

    // hide nav
    const navigasi = document.querySelector('nav');
    navigasi.classList.add('hide-content');
  },
};

export default Admin;
