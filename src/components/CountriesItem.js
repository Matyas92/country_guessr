import React from 'react'
import '../App.css';


const CountriesItem = ({ item }) => {

  return (

    <div className='card'>
          <img className='img-flag' src={item.flag} alt='' />
          <h1>{item.name}</h1>
          <ul>
          <li>
              <strong>Capital:</strong> {item.capital}
            </li>

            <li>
              <strong>Population:</strong> {item.population}
            </li>

            <li>
              <strong>Demonym:</strong> {item.demonym}
            </li>
            <li>
              <strong>Region:</strong> {item.region}
            </li>

           
          </ul>
      </div>

  )
}

export default CountriesItem