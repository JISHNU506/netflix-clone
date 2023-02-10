import React, { useEffect, useState } from 'react'
import './RowPost.css';

// import axios from '../../axios';
import axios from 'axios';
import { image_URL } from '../../constants/Constants';


import { Navigate, useNavigate } from 'react-router-dom';



function RowPost(props) {
  const [movies,setMovies]=useState([])
 
  const navigate=useNavigate()
  useEffect(() => {
  
  axios.get(props.url).then(resp=>{
    // console.log("resp=====>",resp.data.results);
    setMovies(resp?.data?.results)
  })
  // console.log("data====>",movies);

  }, [])
  
  
  return (
   <>
   <section id='movies'>
    
   
   <div className='row'>
    <h2>{props?.title}</h2>

  <div className="posters">
  {movies.map((item)=>  
    <>
    {/* {console.log("iteeeetaa===>",item.id)} */}
     {/* <span onClick={()=>MovieTriler(item.id)}> */}
      <span onClick={()=>navigate(`/Details/${item.id}`)}>
 <img  className={props?.isSmall ? 'smallPoster':'poster'} src={`${image_URL+item?.poster_path}`} alt="poster"/> 
</span>
    </>
)}  
</div>
 
{/* {urlid && <YouTube  videoId={urlid.key} opts={opts} />} */}
   </div>
   </section>
   </>
  )
}

export default RowPost