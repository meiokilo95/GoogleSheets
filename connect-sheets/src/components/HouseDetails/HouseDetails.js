import React from 'react'

import './HouseDetails.css'

import {useLocation} from 'react-router-dom';

function HouseDetails({ props }) {
    

    const location = useLocation()
    const detalles = location.state.informacion

    console.log(detalles)
    return (
        <div className='contenedor-detalles'>
        <div className='img_tabla'>
            <div className='contenedor-img'>
                <img src={detalles["Link fachada"]} />
            </div>

            <div className='tabla_datos'>

            <table class="tabla_detalles">
            <tr>
              <td className='titulo_tabla'> Privada:</td>
              <td className='descrp_tabla'>{detalles["Privada:"]}</td> 
            </tr>
            <tr>
            <td className='titulo_tabla'> Dirección:</td>
              <td className='descrp_tabla'>{detalles["Dirección:"]}</td>
            </tr>

            <tr>
            <td className='titulo_tabla'>Proyecto por:</td>
            <td className='descrp_tabla'>{detalles["Proyecto por:"]}</td>
            </tr>

            <tr>
            <td className='titulo_tabla'>Inicio Obra:</td>
            <td className='descrp_tabla'>{detalles[" Inicio Obra:"]}</td>
            </tr>

            <tr>
            <td className='titulo_tabla'>Termino Obra:</td>
            <td className='descrp_tabla'> {detalles["Termino Obra:"]}</td>
            </tr>
            </table>


           
        </div>

        </div>
        <div className='text-light'>
              <h4 className='card-title'>{detalles["No. Casa:"]} - {detalles["Modelo:"]} </h4>
            </div>  

      <div className='conetenedor-datos'>
      
        <div className='contenedor_precio'>
          <p className='precio'> {detalles["Precio Venta al HOY:"]}</p>
        </div>
        <div className='contenedor_habitable'>
          <p className='habitable'>{detalles["M2 de Constr. Habit.:"]}</p>
        </div>
        <div className='contenedor_terreno'>
          <p className='terreno'>{detalles["M2 de Terreno:"]}</p>
        </div>
        
      </div>
        </div>
    )
}

export default HouseDetails