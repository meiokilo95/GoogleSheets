import React from 'react'

import {useLocation} from 'react-router-dom';

function HouseDetails({ props }) {
    

    const location = useLocation()
    const detalles = location.state.informacion

    console.log(detalles)
    return (
        <div className='card col' >
            <div className='contenedor-img'>
                <img src={detalles["Link fachada"]} />
            </div>
            
      <div className='card-body text-light'>
        <h4 className='card-title'> {detalles["Modelo:"]} </h4>
      </div>

      <div className='conetenedor-datos'>
        <div className='contenedor_precio'>
          <p className='titulo-precio'>Precio al dia de HOY:</p>
          <p className='precio'> {detalles["Precio Venta al HOY:"]}</p>
        </div>
        <div className='contenedor_habitable'>
          <p className='titulo-habitable'>M2 Construccion habitable:</p>
          <p className='habitable'>{detalles["M2 de Constr. Habit.:"]}</p>
        </div>
        <div className='contenedor_terreno'>
          <p className='titulo-terreno'>M2 de terreno:</p>
          <p className='terreno'>{detalles["M2 de Terreno:"]}</p>
        </div>
        <div className='contenedor_terreno'>
          <p className='titulo-terreno'>Privada:</p>
          <p className='terreno'>{detalles["Privada:"]}</p>
        </div>
        <div className='contenedor_terreno'>
          <p className='titulo-terreno'>Dirección:</p>
          <p className='terreno'>{detalles["Dirección:"]}</p>
        </div>
      </div>
        </div>
    )
}

export default HouseDetails