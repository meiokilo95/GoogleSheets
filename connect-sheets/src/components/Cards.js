import React, {useLayoutEffect, useState, useEffect} from 'react'

import Card from './Card'

import useGoogleSheets from 'use-google-sheets';

function Cards() {
    const { data, loading, error } =  useGoogleSheets({
      apiKey: 'AIzaSyB5nx15bNw10Y5YTlinwMElO3DQhLDbmKI',
      sheetId: '1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s',
    });

    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error!</div>;
    }
  
  return (
    
    <div className='container'>
      <div className='row-cards'> 
        {
          
          data[0].data.map(casa =>
            
          <Card props={casa} />)
        }
      </div>
    </div>
  )
}

export default Cards