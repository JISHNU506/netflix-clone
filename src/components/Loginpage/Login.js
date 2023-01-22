import React from 'react'
import Navbar from '../Navbar/Navbar';
import './Login.css';
export default function Login() {
  return (
 <>
 <Navbar/>
 <div id="backdrop" />
 <div id="shade" />
 <div id="container1">

   <div className="centred">
     <div className="box1">
       <form>
         <h2 className="heading">Sign In</h2>
         <input
           type="email"
           className="form_input"
           id="email"
           name="email"
           placeholder="Email or phone number"
         />
         <div id="feedback" />
         <input
           type="password"
           className="form_input"
           id="password"
           name="password"
           placeholder="Password"
         />
         <div id="feedback2" />
       </form>
       <div className="btn">
         <button type="submit" className="sign_in" id="button">
           Sign In
         </button>
       </div>
       <div className="flex">
         <label htmlFor="checkbox">
           <input
             type="checkbox"
             className="_check"
             id="checkbox"
             name="checkbox"
           />{" "}
           Remember me
         </label>
         <a className="left" href="">
           Need help?
         </a>
       </div>
       <div className="more">
         <span className="new">
           New to Netflix?{" "}
           <a className="sign" href="">
             Sign up now.
           </a>
         </span>
        
       </div>
     </div>
   </div>
  
 </div>
</>

  )
}
