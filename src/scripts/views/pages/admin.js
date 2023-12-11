const Admin = {
    async render(){
        const main = document.querySelector('main');
        main.classList.remove('reset-padding');

      return `
      <div class="sidebar">
        <h1>Data Pendaftar</h1>
        <hr style="border: 1px solid  #000; margin: 0;">
        <ul>
          <li><a href="#"><i class="fas fa-qrcode"></i>Logout</a></li>
        </ul>
        <hr style="border: 1px solid  #000; margin: 0;">
      </div>

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
                            <tr>
                                <td>1</td>
                                <td>Lufy</td>
                                <td>081234567890</td>
                                <td>Lufy.@email.com</td>
                                <td>Event 1</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lufy</td>
                                <td>081234567890</td>
                                <td>Lufy.@email.com</td>
                                <td>Event 1</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lufy</td>
                                <td>081234567890</td>
                                <td>Lufy.@email.com</td>
                                <td>Event 1</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Lufy</td>
                                <td>081234567890</td>
                                <td>Lufy.@email.com</td>
                                <td>Event 1</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div></br></br></br></br></br></br></br>
  `;},

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

export default Admin;