import React,{useState} from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "../../firebase";
import { toast } from "react-toastify";
import "./Auth.css";

let Styles = {
  color: "#fff",
  textDecoration: "none",
  background: "#607d8b91",
  padding: "2px 20px",
  fontSize: "12px",
  width:"100%",
  display: "block"
};

const Login = ({history}) => {
  let[state, setState] =useState({
    email: "",
    password:"",
    loading: false,
  })

  let{email, password, loading } = state;

  let handleChange = e => {
    let {name, value} = e.target;
    setState({...state,[name]:value})
  }

  let handleSubmit = async e => {
    e.preventDefault()
    try {
      setState({loading:true})
      let userData = await firebase.auth().signInWithEmailAndPassword(email, password);
      if(userData.user.emailVerified === true) {
        toast.success("Successfully user logged in")
        history.push("./profile")
      } else {
        toast.success("user not yet verified please verified and login")
        history.push("./signin")
      }
    } catch (error) {
      toast.error(error.message)
    }
    finally{
      setState({
        email:"",
        password:"",
      })
    }
    setState({loading:false})
  }
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }} >
      <article>
        <main>
          <aside className="orBlock">
        <h5 style={{color:"red"}}>Signin with Phone number</h5>
        <Link className="otpLink" to="/otp">Request OTP</Link>

        <p className="or">OR</p>
        </aside>

          <h2>Sign in</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email or phone number"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={handleChange}
              required
            />
            <div>
              <button>{loading === true ? "loading....":"Sign up"}</button>
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
                  New to Netfilx? <Link to="/signup">Sign up Now</Link>
                  <Link to="/forgot-password" style={Styles}>Forgot password</Link>
                  <p>This page is protected by Google reCAPTCHA to ensure you're not a bot</p>
                </div>
              </footer>
            </aside>
          </form>
        </main>
      </article>
    </section>
  );
};

export default withRouter(Login);