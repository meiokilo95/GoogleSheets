import React from 'react'

import './HouseDetails.css'

import { useLocation } from 'react-router-dom';

function FixedCard({ props }) {

    const house = props;

    return (
        (house.length > 0) ?
            <div className='padding20 col col-30-70' >
                <div className='card' >
                    <ul className='list'>
                        <li><h3>{house[1][0]}</h3><span>{house[1][1] + " " + house[3][1]}</span></li>
                        <li><h3>{house[21][0]}</h3><span>{house[21][1]}</span></li>
                        <li><h3>{house[1][2]}</h3><span>{house[1][3]}</span></li>
                        <li><h3>{house[3][2]}</h3><span>{house[3][3]}</span></li>
                        <li><h3>{house[8][2]}</h3><span>{house[8][3]}</span></li>
                        <li><h3>{house[7][2]}</h3><span>{house[7][3]}</span></li>
                    </ul>
                </div>
            </div>
            : <>Loading</>
    )
}

export default FixedCard