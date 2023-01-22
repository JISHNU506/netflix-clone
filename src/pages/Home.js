import React from 'react'
import '../App.css';

import Navbar from '../components/Navbar/Navbar';
import Banner from '../components/banner/Banner';
import RowPost from '../components/RowPost/RowPost';

import { action} from '../components/URL';
import { comedy } from '../components/URL';
import { original } from '../components/URL';
import { Horror } from '../components/URL';

import { war} from '../components/URL';
import { fiction } from '../components/URL';
import { drama } from '../components/URL';
import { crime } from '../components/URL';
import { useState } from 'react';
import { history} from '../components/URL';
import { adventure } from '../components/URL';
import { mystery } from '../components/URL';
import {family} from '../components/URL';
import {animation} from '../components/URL';
import {thriller} from '../components/URL';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  
 

 
  return (
  <>
  <Navbar  />
<Banner/>
{/* <RowPost url={original} title="Netflix Originals" isSmall/> */}
<RowPost  url={action} title="Action Movies" isSmall/>
<RowPost  url={comedy} title="Comedy Movies " isSmall/>
<RowPost  url={Horror} title="Horror Movies " isSmall/>
<RowPost  url={thriller} title="Thriller  Movies  " isSmall/>
<RowPost  url={war} title="War Movies" isSmall/>
<RowPost  url={fiction} title="Fiction Movies " isSmall/>


<RowPost  url={crime} title="Crime Movies" isSmall/>
<RowPost  url={history} title="History Movies " isSmall/>
<RowPost  url={adventure} title="Adventure Movies " isSmall/>
<RowPost  url={ mystery} title=" Mystery Movies " isSmall/>
<RowPost  url={family} title="Family Movies " isSmall/>
<RowPost  url={ animation} title="Animation Movies " isSmall/>
<RowPost  url={drama} title=" Drama " isSmall/>
  </>
  )
}
