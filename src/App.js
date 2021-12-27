import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Homepage from "./Pages/Homepage";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
import "./firebase";
import AuthProvider from "./ContextApi/AuthContext";
import UserProfile from "./Component/Profile/UserProfile";
import ProtectedRoute from "./Helpers/ProtectedRoute";
import PublicRoute from "./Helpers/PublicRoute";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import ForgotPassword from "./Component/Auth/ForgotPassword";
import PhoneAuth from "./Component/Auth/PhoneAuth";
import AddMovies from "./Component/Movies/AddMovies";
import MovieProvider from "./ContextApi/MovieContext";
import VideoPlayer from "./Component/Movies/VideoPlayer";
import Movie from "./Component/Movies/Movie";

const App = () => {
  return (
    <section id="navbarMainBlock">
      <article>
        <AuthProvider>
          <Router>
            <Navbar />
            <ToastContainer />
            <Switch>
              <Route path="/" exact>
                <MovieProvider>
                  <Homepage />
                </MovieProvider>
              </Route>
              <PublicRoute path="/signin" exact>
                <Login />
              </PublicRoute>
              <PublicRoute path="/signup" exact>
                <Register />
              </PublicRoute>
              <PublicRoute path="/forgot-password" exact>
                <ForgotPassword />
              </PublicRoute>
              <PublicRoute path="/otp" exact>
                <PhoneAuth />
              </PublicRoute>
              <ProtectedRoute path="/upload-profile-pic" exact>
                <ProfilePhoto />
              </ProtectedRoute>
              <ProtectedRoute path="/upload-video" exact>
                <AddMovies />
              </ProtectedRoute>
              <ProtectedRoute path="/profile" exact>
                <UserProfile />
              </ProtectedRoute>
              <ProtectedRoute path={`/movies/:movie_name/:movie_id`} exact>
                <VideoPlayer />
              </ProtectedRoute>
              <ProtectedRoute
                path={`/movies-details/:movie_name/:movie_id`}
                exact
              >
                <Movie />
              </ProtectedRoute>
            </Switch>
          </Router>
        </AuthProvider>
      </article>
    </section>
  );
};

export default App;
