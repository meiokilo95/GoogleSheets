import React from 'react'

function Card({Modelo}) {
  return (
    <div className='card text-center'>
      <img src=""/>
        <div className='card-body text-light'>
        <h4 className='card-title'>{Modelo} </h4>
        <p>Lorem Ipsu</p>
        </div>
    </div>
  )
}

export default Card