import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import MD5 from "md5";
import "./Auth.css";

const Register = (props) => {
  let { history } = props;
  let [state, setState] = useState({
    email: "",
    password: "",
    username: "",
    loading: false,
  });

  let { email, password, username, loading } = state;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    //? Firebase starts here
    try {
      setState({ loading: true });
      let userData = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      //? email verification
      let verificationMail = `A verification message sent to ${email}  please confirm it`;
      userData.user.sendEmailVerification();
      toast.info(verificationMail);

      // toast.success(`Successfully ${email} registered`)

      //? profile update
      userData.user.updateProfile({
        displayName: username,
        photoURL: `https://gravatar.com/avatar/${MD5(email)}?d=identicon`,
      });
      history.push("./signin");
      // console.log(userData);
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false });
  };
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Sign up</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email or phone number"
              value={email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
            />
            <div>
              <button>{loading === true ? "loading...." : "Sign up"}</button>
            </div>
            <aside className="loginDesc">
              <div className="needHelp">
                <span>
                  <input type="checkbox" name="remember" id="remember" />
                  <b>Remember me</b>
                </span>
                <span>
                  <a href="/">Need help?</a>
                </span>
              </div>

              <footer>
                <div>
                  <i className="fab fa-facebook-f"></i>
                  Login with Facebook
                </div>
                <div>
                  Already have an Account? <Link to="/signin">Sign in</Link>
                  <p>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot
                  </p>
                </div>
              </footer>
            </aside>
          </form>
        </main>
      </article>
    </section>
  );
};

export default withRouter(Register);
