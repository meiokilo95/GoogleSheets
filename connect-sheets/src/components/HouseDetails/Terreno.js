import React from 'react'

import './HouseDetails.css'
import * as myConst from '../../constants.js';

import { Link } from 'react-router-dom';

function Terreno({ props }) {

    const house = props;

    return (
        (house.length > 0) ?
            <>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <li><img src={myConst.BASE_URL + "/icons/m2.png"} /><h3>{house[16][0]}</h3><span>{house[16][1]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/m_frente.png"} /><h3>{house[14][0]}</h3><span>{house[14][1]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/m_fondo.png"} /><h3>{house[15][0]}</h3><span>{house[15][1]}</span></li>
                    </ul>
                </div>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <li><img src={myConst.BASE_URL + "/icons/precio_terreno.png"} /><h3>{house[13][0]}</h3><span>{house[13][1]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/precio_m2.png"} /><h3>{house[17][0]}</h3><span>{house[17][1]}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/fraccionamiento.png"} /><h3>{"Fraccionamiento"}</h3><span><Link to="/" >Ver más</Link></span></li>
                    </ul>
                </div>
                <div className='col col-12' style={{ marginLeft: 0, marginTop: -50 }}>
                    <ul className='list-content padding20'>
                        <li><img src={myConst.BASE_URL + "/icons/relevantes.png"} /><h3>{"Relevantes"}</h3>
                            <span>{house[14][5] + "," + house[15][5] + "," + house[16][5] + "," + house[17][5]}</span>
                        </li>
                    </ul>
                </div>
                {/* <div className='row grid container justify'>
                    <Link to="/" >Fraccionamiento</Link>
                </div> */}
            </>
            : <>Loading</>
    )
}

export default Terreno