import React from 'react'

import './HouseDetails.css'

function Adquisicion({ props }) {
    const [data,setData] = React.useState()
    React.useEffect(()=>{
        if(props[65]){
            setData(props)
        }
    },[props])

    return (
        <div className='hero-container no-height ofertas'>
            { (data) ?
                <div className='content'>
                    <h2 className='primary-title text-center'>{props[90][1]}</h2>
                    <div className='row container card padding20'>
                        <ul>
                            <li>{props[91][1]}</li>
                            <li>{props[92][1]}</li>
                            <li>{props[93][1]}</li>
                        </ul>
                    </div>
                </div>
            : <></>
            }
        </div>
    )
}

export default Adquisicion;