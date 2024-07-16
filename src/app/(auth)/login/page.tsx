import Link  from "next/link";

function Login() {
  return (
    <>
      <main className="login-body" data-vide-bg="assets/img/login-bg.mp4">
        <form action="/auth/login" className="form-default" method="post">
          <div className="login-form">
            {/* Logo-login */}
            <div className="logo-login">
              <a href="/">
                <img src="assets/img/logo/loder.png" alt="Logo" />
              </a>
            </div>
            <h2>Login Here</h2>
            <div className="form-input">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username..."
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                placeholder="Password ..."
                id="password"
                required
              />
            </div>
            <div className="form-input pt-30">
              <input type="submit" name="submit" value='login' />
            </div>

            {/* forgotten password */}
            <a href="/forgot-password" className="forget">Forget Password</a>
            {/* Regsiter */}
            <a href="/register" className="registration">Register Here</a>
          </div>
        </form>
      </main>
    </>
  );
}

export default Login;