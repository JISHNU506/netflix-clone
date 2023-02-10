import React, { useEffect, useState } from 'react'
import './Banner.css';
import { API_KEY,image_URL } from '../../constants/Constants';
import axios from '../../axios';

function Banner() {
  const [movie,setMovie]=useState([])
  
  useEffect(()=>{
    // console.log(API_KEY);
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`).then((responce)=>{
      // console.log("responce====>",responce.data.results);

      const m=Math?.floor(Math.random() * 20)
      // console.log(m);
      setMovie(responce?.data?.results[m])
      // const Time=setInterval(()=>{
      //   const m=Math.floor(Math.random() * 20)
      //   setMovie(responce.data.results[m])
      //     console.log(m);
      // },5000)
    })
    // console.log("movie===>",movie);
  },[])
  return (
    <>
    <div className='banner' style={{backgroundImage:`url(${movie ?image_URL+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie?movie?.title||movie?.name:""}</h1>
            <div className='banner_buttons'>
                <button type="button" className='button'>Play list</button>
                <button type="button" className='button'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie?.overview?.slice(0,220):""} <br/>
            read more...</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>

    
</>
  )
}

export default Banner