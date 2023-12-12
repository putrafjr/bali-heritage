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
            <button type="submit" name="loginsubmit" class="btnlogin"><a href=".#/admin">LOGIN</a></button>
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
    },
  };
  
  export default Login;