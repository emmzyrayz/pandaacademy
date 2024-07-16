// import VideoBackground from "../../../components/videoBackground";

function ForgotPassword() {
  return (
    <div className="login-body">
    {/* <VideoBackground /> */}
    {/* <!-- Login Admin --> */}
    <form className="form-default" action="/auth/register" method="POST">
      <div className="login-form">
        {/* <!-- logo-login --> */}
        <div className="logo-login">
          <a href="/">
            <img src="assets/img/logo/panda.png" alt="" />
          </a>
        </div>
        <h2>Forgot Password?</h2>
        <div className="form-input">
          <label htmlFor="name">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-input pt-30">
          <input type="submit" name="submit" value="Reset Password" />
        </div>
        {/* <!-- Forget Password --> */}
        <a href="/login" className="registration">
          login
        </a>
      </div>
    </form>
    {/* <!-- /end login form --> */}
  </div>
  );
}

export default ForgotPassword;
