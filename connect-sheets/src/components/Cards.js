import React, {useLayoutEffect, useState, useEffect} from 'react'

import Card from './Card'

import useGoogleSheets from 'use-google-sheets';

function Cards() {

    const { data, loading, error } = useGoogleSheets({
      apiKey: 'AIzaSyB5nx15bNw10Y5YTlinwMElO3DQhLDbmKI',
      sheetId: '1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s',

    }); 

    

    const [ casa, setCasas] = useState()

    useEffect(() => {

    if (data[0] !== undefined && 'data' in data[0]) {
      setCasas([
        data[0].data 
      ])
    }
      
    },[data] );
    

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error!</div>;
    }
  
    
    console.log(data)

  return (
    
    <div className='container'>
      <div className='row'> 
        {
        }
      </div>
    </div>
  )
}

export default Cards