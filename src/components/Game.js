import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Game = () =>  {

  const [items, setItems ] = useState([])
  const [country, setCountry] = useState('')
  const [points, setPoints] = useState(0)
  const [correct, setCorrect] = useState()
  const [vanish, setVanish] = useState(false)

  useEffect(() => {
    const fetchItems = async () => {
      const randomNumber = Math.floor(Math.random()*200)
      const result = await axios(`https://restcountries.com/v2/all`)
        setItems(result.data[randomNumber])
    }
    fetchItems()
  },[])



  console.log(items)


const handleClick = () => {
  const fetchItems = async () => {
    const randomNumber = Math.floor(Math.random()*200)
    const result = await axios(`https://restcountries.com/v2/all`)
      setItems(result.data[randomNumber])
  }
  fetchItems()
}
function handleSubmit(event) {
  event.preventDefault()
  console.log(country)
  console.log(items.name)

  if(country.trim().toUpperCase() == items.name.toUpperCase() ){
    setPoints(points + 1)
    setCorrect(true)
    handleClick()
    setCountry("")
  }
  else{
    setCorrect(false)
    handleClick()
    setCountry("")
  }
  }

  
const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    setVanish(true)
    return(
    
    <div className="timer-point"> Points: {points} 
    <br />
    <button onClick={refreshPage} className='new-game'> New Game</button>  </div>    

    )}  

    function refreshPage() {
      window.location.reload(false);
    }


  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

  return (  
    
    <div className="container">

<div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>

      <div id='wrapper' className={vanish && 'disappear'} >
        <h1 className={correct ? 'correct' : 'incorrect'} >{points}</h1>

    <form onSubmit={handleSubmit}>
      <input id='input-country'  
      type="text"
      value={country}
      name="countryName"
      onChange={(e) => setCountry(e.target.value)}

       />
    </form>
    <button className='new-button' onClick={handleClick} >New Country</button>

    <img className='great-img' src={items.flag} alt="" />

  </div>

  </div>
  )
}
export default Game;
