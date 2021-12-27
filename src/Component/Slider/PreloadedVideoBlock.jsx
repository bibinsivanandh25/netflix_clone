import React, { useRef, useState, useContext, Fragment } from "react";
import { MovieContext } from "../../ContextApi/MovieContext";
import Spinner from "../Spinner/Spinner";
import "./slider.css";

const PreLoadedVideo = () => {
  let MOVIES = useContext(MovieContext);

  let VideoRef = useRef(null);
  let [Play, setPlay] = useState(true);
  let [videoIcon, setVideoIcon] = useState(<i class="fas fa-play"></i>);

  let PlayVideo = () => {
    setPlay(!Play);
    Play === true ? VideoRef.current.play() : VideoRef.current.pause();
    Play === true
      ? setVideoIcon(<i className="fas fa-pause"></i>)
      : setVideoIcon(<i className="fas fa-play"></i>);
  };
  let VIDEOBLOCK = () => (
    <section id="preLoadedBlock">
      <article>
        <aside className="videoDesc">
          <h2>Watch now</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
            at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            eaque.
          </p>
          <span>
            <button onClick={PlayVideo}>
              {videoIcon} {Play ? "Play" : "Pause"}
            </button>
            <button>
              <i className="fal fa-info-circle"></i>More Info
            </button>
          </span>
        </aside>
        <video
          src={MOVIES[0].movie_video}
          autoPlay
          loop
          muted
          ref={VideoRef}
        ></video>
      </article>
    </section>
  );
  return (
    <Fragment>{MOVIES.length > 0 ? <VIDEOBLOCK /> : <Spinner />}</Fragment>
  );
};

export default PreLoadedVideo;
