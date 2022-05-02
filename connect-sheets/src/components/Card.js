import React from 'react'
import { Link } from 'react-router-dom';

function Card({ props }) {
  console.log(props)
  let obj = props
  let casa = [];
  Object.keys(obj).map((key) => { casa[key] = obj[key] });


  return (
    <div className='card col' >
      <img src={casa["Link fachada"]} />
      <div className='card-body text-light'>
        <h4 className='card-title'> {casa["Modelo:"]} </h4>
      </div>

      <div className='conetenedor-datos'>
        <div className='contenedor_precio'>
          <p className='titulo-precio'>Precio al dia de HOY:</p>
          <p className='precio'> {casa["Precio Venta al HOY:"]}</p>
        </div>
        <div className='contenedor_habitable'>
          <p className='titulo-habitable'>M2 Construccion habitable</p>
          <p className='habitable'>{casa["M2 de Constr. Habit.:"]}</p>
        </div>
        <div className='contenedor_terreno'>
          <p className='titulo-terreno'>M2 de terreno</p>
          <p className='terreno'>{casa["M2 de Terreno:"]}</p>
        </div>
        
        <Link to={casa["ID"] } state={{informacion:casa}}>View more</Link>

      </div>

    </div>
  )
}

export default Card