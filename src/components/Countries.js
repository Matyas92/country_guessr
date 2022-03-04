import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CountriesGrid from './CountriesGrid';

const Countries = () =>  {

  const [items, setItems ] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios('https://restcountries.com/v2/all')
        console.log(result.data)
        setItems(result.data)
    }
    fetchItems()

  },[])


  return (  
  <div>


 <CountriesGrid items={items} />

   </div>
  )
}
export default Countries;
