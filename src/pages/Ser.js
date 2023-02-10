import axios from "axios";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "./Ser.css";
import Loading from "../components/Loading";

const Ser = () => {
  const [loading, setloading] = useState(false);
  const navigte = useNavigate();
  const [mov, setMov] = useState();
  const [ser, setSer] = useState([]);
  const state = (e) => {
    // console.log("0000000000000000000===>", e.target.value);
    setMov(e.target.value);
  
  };

  const funsearch = (e) => {
   
    e.preventDefault();
    setloading(true);
    axios
      .get(`http://www.omdbapi.com/?s=${mov}&apikey=2a679d3d`)
      .then((res) => {
        // console.log("movesearch=====>", res);
        setloading(false);

        setSer(res?.data);
      });
  };

  // console.log("ser====>", ser);

  return (
    <div>
      <div className="itemcontainer">
        <center>
          <form action="" class="search-bar" onSubmit={funsearch}>
            <input
              type="search"
              name="search"
              placeholder="Search Movie"
         
              onChange={state}
            />
            {/* <button class="search-btn" type="submit" >
    <span>Search</span>
  </button> */}
          </form>
        </center>


{loading?(<><Loading/>
</>):<>
{ser?.Response=="True"? <>
          <div className="header">Searched items</div>
        <div className="movies-tvshow-cards-main-container">
          <div className="movies-tvshow-cards-container">
            {ser?.Search?.map((item) => (
              <>
                <div className="card-main-container">
                  <div
                    className="card-container"
                    onClick={() => navigte(`/Details/${item.imdbID}`)}
                  >
                    <div className="card-header-container">
                      <div className="text-left">{item?.Type}</div>
                      <div className="text-right">{item?.Year}</div>
                    </div>
                    <div className="card-image-container">
                      <img src={item?.Poster} className="card-image" />
                    </div>
                    <div className="card-footer-container">
                      <div className="card-title">{item?.Title}</div>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        </> :  <>
       
{ser?.Response=="False"?<>    <div className="header"><h2>OOps !!!!!!</h2>
        <h5>404 Movies Not Found !!!</h5>
      </div>
        </>:<></>}
        </>}


</>}
       
       
      </div>
    </div>
  );
};

export default Ser;
