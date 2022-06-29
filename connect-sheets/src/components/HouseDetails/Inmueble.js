import React from 'react'

import './HouseDetails.css'
import * as myConst from '../../constants.js';

function Inmueble({ props }) {

    const house = props;

    const sumRecamaras = () => {
        let sum = 0
        if (house[22][1] != "X") sum += house[22][1] * 1
        if (house[23][1] != "X") sum += house[23][1] * 1
        if (house[24][1] != "X") sum += house[24][1] * 1
        if (house[25][1] != "X") sum += house[25][1] * 1
        if (house[26][1] != "X") sum += house[26][1] * 1
        return sum
    }

    return (
        (house.length > 0) ?
            <>
                <div className='col col-5'>
                    <ul className='list-content padding20'>
                        <li><img src={myConst.BASE_URL + "/icons/area_social.png"} /><h3>{"Área social"}</h3><span>{house[31][1] + house[32][1] + house[33][1] + " m2"}</span></li>
                        <li><img src={myConst.BASE_URL + "/icons/area_recamaras.png"} /><h3>{"Recámaras"}</h3>
                            <span>{sumRecamaras()}</span>
                            {/* <ul>
                                {house[22][1] != "X" &&
                                    <li><h4>{house[22][0]}</h4><span>{(house[22][2]) ? house[22][1] + "m2 (" + house[22][2] + ")" : house[22][1] + "m2"}</span></li>
                                }
                                {house[23][1] != "X" &&
                                    <li><h4>{house[23][0]}</h4><span>{(house[23][2]) ? house[23][1] + "m2 (" + house[23][2] + ")" : house[23][1] + 'm2'}</span></li>
                                }
                                {house[24][1] != "X" &&
                                    <li><h4>{house[24][0]}</h4><span>{(house[24][2]) ? house[24][1] + "m2 (" + house[24][2] + ")" : house[24][1] + 'm2'}</span></li>
                                }
                                {house[25][1] != "X" &&
                                    <li><h4>{house[25][0]}</h4><span>{(house[25][2]) ? house[25][1] + "m2 (" + house[25][2] + ")" : house[25][1] + 'm2'}</span></li>
                                }
                                {house[26][1] != "X" &&
                                    <li><h4>{house[26][0]}</h4><span>{(house[26][2]) ? house[26][1] + "m2 (" + house[26][2] + ")" : house[26][1] + 'm2'}</span></li>
                                }
                            </ul> */}
                        </li>
                        <li><img src={myConst.BASE_URL + "/icons/m2_construidos.png"} /><h3>{house[21][0]}</h3><span>{house[21][1]}</span></li>
                    </ul>
                </div>
                <div className='col col-5'>
                    <ul className='list-content padding20 list-complete'>
                        {house[22][1] != "X" &&
                            <li><h3>{house[22][0]}<span>{(house[22][2]) ? house[22][1] + "m2 (" + house[22][2] + ")" : house[22][1] + 'm2'}</span></h3></li>
                        }
                        {house[23][1] != "X" &&
                            <li><h3>{house[23][0]}<span>{(house[23][2]) ? house[23][1] + "m2 (" + house[23][2] + ")" : house[23][1] + 'm2'}</span></h3></li>
                        }
                        {house[24][1] != "X" &&
                            <li><h3>{house[24][0]}<span>{(house[24][2]) ? house[24][1] + "m2 (" + house[24][2] + ")" : house[24][1] + 'm2'}</span></h3></li>
                        }
                        {house[25][1] != "X" &&
                            <li><h3>{house[25][0]}<span>{(house[25][2]) ? house[25][1] + "m2 (" + house[25][2] + ")" : house[25][1] + 'm2'}</span></h3></li>
                        }
                        {house[26][1] != "X" &&
                            <li><h3>{house[26][0]}<span>{(house[26][2]) ? house[26][1] + "m2 (" + house[26][2] + ")" : house[26][1] + 'm2'}</span></h3></li>
                        }
                        {house[27][1] != "X" &&
                            <li><h3>{house[27][0]}<span>{(house[27][2]) ? house[27][1] + "m2 (" + house[27][2] + ")" : house[27][1] + 'm2'}</span></h3></li>
                        }
                        {house[28][1] != "X" &&
                            <li><h3>{house[28][0]}<span>{(house[28][2]) ? house[28][1] + "m2 (" + house[28][2] + ")" : house[28][1] + 'm2'}</span></h3></li>
                        }
                        {house[29][1] != "X" &&
                            <li><h3>{house[29][0]}<span>{(house[29][2]) ? house[29][1] + "m2 (" + house[29][2] + ")" : house[29][1] + 'm2'}</span></h3></li>
                        }
                        {house[30][1] != "X" &&
                            <li><h3>{house[30][0]}<span>{(house[30][2]) ? house[30][1] + "m2 (" + house[30][2] + ")" : house[30][1] + 'm2'}</span></h3></li>
                        }
                        {house[31][1] != "X" &&
                            <li><h3>{house[31][0]}<span>{(house[31][2]) ? house[31][1] + "m2 (" + house[31][2] + ")" : house[31][1] + 'm2'}</span></h3></li>
                        }
                        {house[32][1] != "X" &&
                            <li><h3>{house[32][0]}<span>{(house[32][2]) ? house[32][1] + "m2 (" + house[32][2] + ")" : house[32][1] + 'm2'}</span></h3></li>
                        }
                        {house[33][1] != "X" &&
                            <li><h3>{house[33][0]}<span>{(house[33][2]) ? house[33][1] + "m2 (" + house[33][2] + ")" : house[33][1] + 'm2'}</span></h3></li>
                        }
                        {house[34][1] != "X" &&
                            <li><h3>{house[34][0]}<span>{(house[34][2]) ? house[34][1] + "m2 (" + house[34][2] + ")" : house[34][1] + 'm2'}</span></h3></li>
                        }
                        {house[35][1] != "X" &&
                            <li><h3>{house[35][0]}<span>{(house[35][2]) ? house[35][1] + "m2 (" + house[35][2] + ")" : house[35][1] + 'm2'}</span></h3></li>
                        }
                        {house[36][1] != "X" &&
                            <li><h3>{house[36][0]}<span>{(house[36][2]) ? house[36][1] + "m2 (" + house[36][2] + ")" : house[36][1] + 'm2'}</span></h3></li>
                        }
                        {house[37][1] != "X" &&
                            <li><h3>{house[37][0]}<span>{(house[37][2]) ? house[31][1] + "m2 (" + house[37][2] + ")" : house[31][1] + 'm2'}</span></h3></li>
                        }
                        {house[38][1] != "X" &&
                            <li><h3>{house[38][0]}<span>{(house[38][2]) ? house[32][1] + "m2 (" + house[32][2] + ")" : house[32][1] + 'm2'}</span></h3></li>
                        }
                        {house[39][1] != "X" &&
                            <li><h3>{house[39][0]}<span>{(house[39][2]) ? house[39][1] + "m2 (" + house[39][2] + ")" : house[39][1] + 'm2'}</span></h3></li>
                        }
                        {house[40][1] != "X" &&
                            <li><h3>{house[40][0]}<span>{(house[40][2]) ? house[40][1] + "m2 (" + house[40][2] + ")" : house[40][1] + 'm2'}</span></h3></li>
                        }
                        {house[41][1] != "X" &&
                            <li><h3>{house[41][0]}<span>{(house[41][2]) ? house[41][1] + "m2 (" + house[41][2] + ")" : house[41][1] + 'm2'}</span></h3></li>
                        }
                        {house[42][1] != "X" &&
                            <li><h3>{house[42][0]}<span>{(house[42][2]) ? house[42][1] + "m2 (" + house[42][2] + ")" : house[42][1] + 'm2'}</span></h3></li>
                        }
                    </ul>
                </div>
            </>
            : <>Loading</>
    )
}

export default Inmueble