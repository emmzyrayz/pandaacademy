'use client';

import { useEffect } from "react";
import "./style.css";
import Image from "next/image";

function Register() {
   useEffect(() => {
     const buttons = document.querySelectorAll(".btn");
     const noClickButtons = document.querySelectorAll(".btn-no-click");

     buttons.forEach((element) => {
       const button = element as HTMLButtonElement;
       button.onclick = () => {
         alert("Button clicked!");
       };
     });

     noClickButtons.forEach((element) => {
       const button = element as HTMLButtonElement;
       button.onclick = null;
     });

     // Cleanup function to remove all onClick handlers when the component unmounts
     return () => {
       buttons.forEach((element) => {
         const button = element as HTMLButtonElement;
         button.onclick = null;
       });
     };
   }, []);

  return (
    <div className="login-body" data-vide-bg="assets/img/login-bg.mp4">
      {/* <!-- Login Admin --> */}
      <form className="form-default" action="/auth/register" method="POST">
        <div className="login-form">
          {/* <!-- logo-login --> */}
          <div className="logo-login">
            <a href="/">
              <Image
                src="/assets/img/logo/panda.png"
                alt="Logo"
                style={{width: "130px", height: "130px", objectFit: "cover"}}
                width={500}
                height={100}
              />
            </a>
          </div>
          <h2>Registration Here</h2>

          <div className="form-input">
            <label htmlFor="name">Full name: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Full name"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              required
            />
          </div>
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
          <div className="form-input">
            <label htmlFor="name">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="form-input pt-30">
            <input type="submit" name="submit" value="Registration" />
          </div>
          {/* <!-- Forget Password --> */}
          <a href="/login" className="registration">
            <span className="btn btn-hero btn-no-click">Login</span>
          </a>
        </div>
      </form>
      {/* <!-- /end login form --> */}
    </div>
  );
}

export default Register;