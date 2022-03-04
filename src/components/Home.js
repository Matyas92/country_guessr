import React, { useEffect, useRef } from 'react'
import logo from  '../img/countries-all.jpg'
import { init } from 'ityped'

const Home = () => {

    const textRef= useRef()
    useEffect(()=> {

      init(textRef.current, { 
        showCursor: false, 
        strings: ["States","Countries" ] })

    },[])
  return (

    <div className='home'>
      <h1 className='country-intro' ref={textRef}> </h1>

    <img className='logo' src={logo} alt="" />
    
    
    
    </div>
  )
}

export default Home