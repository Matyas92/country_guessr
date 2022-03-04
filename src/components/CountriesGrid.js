import React from 'react'
import CountriesItem from './CountriesItem'


const CountriesGrid = ({ items}) => {

    return (
        <div className='cards'>
        {items.map(item =>(
          <CountriesItem item={item}> </CountriesItem>
    
        ))}
    </div>
      )}

export default CountriesGrid