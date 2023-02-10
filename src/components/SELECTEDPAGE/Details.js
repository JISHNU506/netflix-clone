import axios from "axios";


import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { image_URL } from "../../constants/Constants";
import Navbar from "../Navbar/Navbar";
import YouTube from "react-youtube";

import "./Details.css";

export default function Details({ data, smdata, similar, credits, omdb }) {
  const [urlid, setUrld] = useState({});
 
  // console.log("detailsomdb===>", omdb);
  const navigate = useNavigate();
  const myref = useRef();


 
  // const signupClick = () => {
  //   // console.log(myref.current);

  //  
  // };








  




  const configs = {
    animate: true,

  };

  const opts = {
    height: "460",
    width: "100%",

    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const MovieTriler = (e) => {
    // console.log("triler======>", e);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${e}/videos?api_key=6cdf1bc39c14d06f4b51e70d622928f4&language=en-US`
      )
      .then((responce) => {
        if (responce?.data?.results?.length !== 0) {
          setUrld(responce?.data?.results[0]);
          myref.current.classList.add("show-video");
       
        } else {
          // console.log("empty Array");
        }
      });
  };

  
  const closeVideo = () => {
    // console.log("action===>", myref.current.classList);

    myref.current.classList.remove("show-video");
    setUrld({});
  };


  return (
    <>
      <Navbar />



      <div className="main">
        <div className="image">
          <img src={`${image_URL + data?.backdrop_path}`} alt="image" />
          <div className="overlay">
            <h1>{data?.title}</h1>

            <a
              className="button is-play"
              href="#"
              onClick={() => MovieTriler(data?.id)}
            >
              <div className="button-outer-circle has-scale-animation" />
              <div className="button-outer-circle has-scale-animation has-delay-short" />
              <div className="button-icon is-play">
                <svg height="100%" width="100%" fill="#f857a6">
                  <polygon
                    className="triangle"
                    points="5,0 30,15 5,30"
                    viewBox="0 0 30 15"
                  />
                  <path
                    className="path"
                    d="M5,0 L30,15 L5,30z"
                    fill="none"
                    stroke="#f857a6"
                    strokeWidth={1}
                  />
                </svg>
              </div>
            </a>
            <div ref={myref} className="video-container"  >
              <div className="video-box">
              {urlid && <YouTube id="myvideo" videoId={urlid?.key} opts={opts} />}
              <i class='bx bx-x close-video' onClick={closeVideo}></i>
              </div>

            </div>
            {/* <Overlay
            id="Overlay"
              configs={configs}
              isOpen={isOpen}
              closeOverlay={closeOverlay}
              style={{width:"100%"}}
            >
               <div style={{ textAlign: "center",width:"100%" }}>
            
                </div>
      
            </Overlay> */}

            <h4 id="duration">
              {data?.runtime} minutes | {omdb?.Released}
            </h4>
            <div className="line">
              {data?.genres?.map((item) => (
                <>
                  <div className="gerner">
                    <h4>{item.name}</h4>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="afterImage">
          <div className="left">
            <p id="ms_on">imdb Rating : {omdb?.imdbRating}</p>
            <p id="ms_on">Director : {omdb?.Director}</p>
            <p id="ms_on">Writer : {omdb?.Writer}</p>
            <p id="ms_on">Actors : {omdb?.Actors}</p>
            <p id="ms_on">Awards : {omdb?.Awards}</p>
            <p id="ms_on">Country : {omdb?.Country}</p>

            <h3>Plot</h3>
            <p>{data?.overview}</p>

            <div className="items">
              <div className="container-block container">
                <p className="text-blk team-head-text">Cast</p>
                <div className="responsive-container-block teamcard-container">
                  {credits?.cast?.slice(0, 8).map((it) => (
                    <>
                      <div className="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
                        <div className="team-card">
                          <div className="team-img-wrapper">
                            <img
                              src={`${image_URL + it?.profile_path}`}
                              className="team-img"
                            />
                          </div>
                          <div className="team-card-content">
                            <p className="text-blk name">
                              {it?.original_name?.slice(0, 22)}
                            </p>
                            <p className="text-blk position">{it?.character}</p>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            id="right"
            className="right"
            style={{
              backgroundImage: `url(${
                data ? image_URL + data?.poster_path : ""
              })`,
            }}
          ></div>
        </div>

        <div className="similar">
          {" "}
          <center>
            <div
              id="sp-btn"
              onClick={() => {
                similar();
              }}
            >
              <h1>Similar Movies</h1>
            </div>
          </center>
          {/* <link rel="stylesheet" type="text/css" href="flexboxgrid.min.css" /> */}
          {smdata != undefined ? (
            <>
              <div className="wrapper">
                <div className="hero-container">
                  {smdata?.map((itm) => (
                    <>
                      <div
                        className="main-container"
                        onClick={() => navigate(`/Details/${itm.id}`)}
                      >
                        <div className="poster-container">
                          <a href="">
                            <img
                              src={`${image_URL + itm?.poster_path}`}
                              className="poster1"
                            />
                          </a>
                        </div>
                        <div className="ticket-container">
                          <div className="ticket__content">
                            <h4 className="ticket__movie-title">{itm.title}</h4>

                            <p className="ticket__current-price">
                              {Math.floor(itm.vote_average)} / 10
                            </p>
                            <p className="">{itm.release_date}</p>
                            <button
                              className="ticket__buy-btn"
                              onClick={() => MovieTriler(itm?.id)}
                            >
                              watch Video{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
