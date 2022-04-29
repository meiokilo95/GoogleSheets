import React from 'react'

import Card from './Card'

import useGoogleSheets from 'use-google-sheets';

function Cards() {
  const { data } = useGoogleSheets({
    apiKey: 'AIzaSyB5nx15bNw10Y5YTlinwMElO3DQhLDbmKI',
    sheetId: '1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s',
  });


  const datos = data[0];

  console.log(datos);

  
  return (
    
    <div className='container'>
      <div className='row'> 
        {
          datos.map(card => (
            <div className='col-md-4' key={card.id}>
                <Card title={card.Modelo}  />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards