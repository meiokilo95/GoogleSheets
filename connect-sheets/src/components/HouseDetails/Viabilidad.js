import React from 'react'

import './HouseDetails.css'
import * as myConst from '../../constants.js';

import { Link } from 'react-router-dom';

function Viabilidad({ props }) {

    const house = props;

    return (
        (house.length > 0) ?
            <>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <li><img src={myConst.BASE_URL + "/icons/precio_venta.png"} /><h3>{house[2][2]}</h3><span>{house[2][3]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/precio_renta.png"} /><h3>{house[13][2]}</h3><span>{house[13][3]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/plusvalia.png"} /><h3>{house[15][2]}</h3><span>{house[15][3]}</span></li>
                    </ul>
                </div>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <li><img src={myConst.BASE_URL + "/icons/avance_fisico.png"} /><h3>{house[11][2]}</h3><span>{house[13][3]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/capital_invertido.png"} /><h3>{house[5][2]}</h3><span>{house[5][3]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/ultimo_reporte.png"} /><h3>{"Último Reporte"}</h3><span><Link to="/" >Descargar</Link></span></li>
                    </ul>
                </div>
                {/* <div className='row grid container justify'>
                    <Link to="/" >Último reporte</Link>
                </div> */}
            </>
            : <>Loading</>
    )
}

export default Viabilidad