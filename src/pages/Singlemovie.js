import React from 'react'
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar'
import Details from '../components/SELECTEDPAGE/Details'
import { useParams } from 'react-router-dom'
import axios from 'axios';



export default function Singlemovie({search}) {
    let DatName = useParams();
    // console.log("777777=>",DatName.Datname);
    const [smdata,setSmdata]=useState()
 
    const [Cname,setCname]=useState({
        loading:true,
        data1:{},
        credit:{},
        omdb:{}

});

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${DatName.Datname}?api_key=6cdf1bc39c14d06f4b51e70d622928f4&language=en-US`)
         .then((re)=>re.json())
         .then((dtas)=> {
      //  console.log("datas=====>",dtas.imdb_id);


       axios.get(`https://api.themoviedb.org/3/movie/${dtas.imdb_id}/credits?api_key=6cdf1bc39c14d06f4b51e70d622928f4&language=en-US`)
       .then((respo)=>{
      //  console.log("credits===>",respo);

       axios.get(`https://www.omdbapi.com/?i=${dtas.imdb_id}&apikey=2a679d3d`)
       .then((responce)=>{
        // console.log("obdbdata====>",responce.data);
    
         setCname({
            ...Cname,
            data1:dtas,
            credit:respo.data,
            omdb:responce.data,

          })
          }) 
          });
          //  console.log("afterdata000====>",Cname.data1);
         })

        



         
        },[]);



    

      
       
        // console.log("valueee====>",Cname.data1);
        
        const similar=()=>{
        // console.log("function=====>",Cname.dtas);
        axios.get(`https://api.themoviedb.org/3/movie/${Cname.data1.id}/similar?api_key=6cdf1bc39c14d06f4b51e70d622928f4&language=en-US&page=1`)
        .then((res)=>{
          // console.log("similardata====>",res)
          // const smovie=res
          setSmdata(res.data.results)
        })
        // console.log("after==Similardata===>",smdata);
        // console.log("imdb=====>",smdata.imdb_id);



        }
        
        
       

  return (
    <>
    <Navbar search={search}/>
    <Details data={Cname?.data1}  credits={Cname?.credit} omdb={Cname?.omdb} similar={similar} smdata={smdata}/>
    </>
  )
}
      
