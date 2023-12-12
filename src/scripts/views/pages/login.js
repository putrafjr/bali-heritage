const Login = {
    async render() {
      const main = document.querySelector('main');
      main.classList.remove('reset-padding');
  
      return `
      <div class="Login-page">
      <div class="horizontal-form">
      <div class="heading"></div>
      <div class="form-body">
        <form action="" method="post">
          <div class="form-group">
            <label for="fname">Username:</label>
            <input type="text" class="form-control" id="fname" name="username" placeholder="Username">
          </div>
          <div class="form-group">
            <label for="lname">Password:</label>
            <input type="password" class="form-control" id="lname" name="password" placeholder="Password">
          </div></br>
          <div class="button_box">
            <button type="submit" name="loginsubmit" class="btn"><a href=".#/admin">LOGIN</a></button>
          </div>
        </form>
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

        const loginForm = document.querySelector('form');
        loginForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            // Get the values from the form fields
            const username = document.getElementById('fname').value;
            const password = document.getElementById('lname').value;

            // Make a POST request to your login API endpoint
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            // Parse the response JSON
            const responseData = await response.json();

            if (responseData.success === 'true') {
                // Redirect to the admin page
                window.location.href = 'http://localhost:9000/#/admin';
            } else {
                // Handle login failure (show error message, etc.)
                console.error('Login failed:', responseData.message);
            }
        });
    },
  };
  
  export default Login;