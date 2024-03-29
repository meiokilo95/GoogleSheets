import React from 'react'
import { Link } from 'react-router-dom';

function Card({ props }) {
  let proj = props.casa

  return (
    <div className='card col' >
      <img src={(proj[5]) ? `https://drive.google.com/uc?id=${proj[5].split('/')[5]}` : 'http://yodesarrollo.mx/img/logo_large.png'} style={{ backgroundColor: (proj[5]) ? '' : "#070a50", objectFit: "contain", objectPosition: "center" }} />
      <div className='card-body text-light'>
        <h4 className='card-title'> {proj[2]} </h4>
        <h3 id="app-title" className='tip'>{proj[3]}
          <span className="tooltiptext">{proj[1]}</span>
        </h3>
      </div>
      <div className='conetenedor-datos'>
        <div className='contenedor_precio'>
          <p className='titulo-precio'>Precio al dia de HOY:</p>
          <p className='precio'> {proj[13]}</p>
        </div>
        <div className='contenedor_habitable'>
          <p className='titulo-habitable'>M2 Construcción:</p>
          <p className='habitable'>{proj[12]}</p>
        </div>
        <div className='contenedor_terreno'>
          <p className='titulo-terreno'>M2 de terreno:</p>
          <p className='terreno'>{proj[11]}</p>
        </div>

        <div className='contenedor_boton'>
          <Link to={{ pathname: proj[2], state: { id: proj[2], content: props.content } }}>Ver más</Link>
        </div>
        
          {proj[2]=="ALYSA" ? 
            <div className='contenedor_boton'>
              <a href={"https://virtual-home.000webhostapp.com/"} target={"_blank"}>Ver VR</a>
            </div>
            : <></>
          }
      </div>
    </div>
  )
}

export default Card