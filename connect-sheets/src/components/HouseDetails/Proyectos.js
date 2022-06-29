import React from 'react'

import './HouseDetails.css'
import * as myConst from '../../constants.js';
import ReactTooltip from 'react-tooltip';


function Proyectos({ props }) {

    const house = props;

    return (
        (house.length > 0) ?
            <>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <li><img src={myConst.BASE_URL + "/icons/proyecto_comercial.png"} /><h3>{house[2][4]}</h3><span><a href={house[2][5]} target="_blank">{"Ver"}</a></span></li>
                        <li><img src={myConst.BASE_URL + "/icons/proyecto_arquitectonico.png"} /><h3>{house[3][4]}</h3><span><a href={house[3][5]} target="_blank">{"Ver"}</a></span></li>
                    </ul>
                </div>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <li><h3>{house[6][0]}</h3><span>{house[6][1]}</span></li>
                        <li><h3>{house[7][0]}</h3><span>{house[7][1]}</span></li>
                    </ul>
                </div>
                <div className='col col-12'>
                    <div className='barraCronologica' style={{ backgroundImage: "linear-gradient(90deg, #3c992d " + house[11][3] + ",#ccc " + house[11][3] + ")" }}>
                        <ReactTooltip />
                        <div className='firstLabel' data-tip={house[4][2]}>{house[4][3]}</div>
                        <div className='dynamicLabel' data-tip={house[11][2]}>{house[11][3]}</div>
                        <div className='endLabel' data-tip={house[6][2]}>{house[6][3]}</div>
                    </div>
                </div>
            </>
            : <>Loading</>
    )
}

export default Proyectos