

import React, { useState } from 'react'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Wcollection from '../components/Wcollection'
import { Gents, Ladies } from '../data'
const Mainpage = () => {
  const[gentsFashion,setgGentsFashion]=useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Ladies)
  return (
    <div>
      <Header/>
      <Banner/>
      <Collections gentsFashion={gentsFashion}/>
      <Wcollection ladiesFashion={ladiesFashion} />
      <Footer/>
    </div>
  )
}

export default Mainpage
