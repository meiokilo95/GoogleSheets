import React from 'react'

import './HouseDetails.css'

function MasterBrocker({ props }) {
    const [data,setData] = React.useState()
    React.useEffect(()=>{
        if(props[95]){
            setData(props)
        }
    },[props])

    return (
        <>
            <div className='hero-container no-height col Entorno text-center' >
                { (data) ?
                    <div className='content'>
                        <h2 className='primary-title'>{data[94][1]}</h2>
                        <div className='hero-container' >
                            <div className='content-card-entorno aliado'>
                                <ul>
                                    {data[95][0] && <li><b>{data[95][0]}:</b>{data[95][2] ? <a href={data[95][2]} target='_blank'>{data[95][1]}</a>: data[95][1]}</li>}
                                    {data[96][0] && <li><b>{data[96][0]}:</b>{data[96][2] ? <a href={data[96][2]} target='_blank'>{data[96][1]}</a>: data[96][1]}</li>}
                                    {data[97][0] && <li><b>{data[97][0]}:</b>{data[97][2] ? <a href={data[97][2]} target='_blank'>{data[97][1]}</a>: data[97][1]}</li>}
                                    {data[98][0] && <li><b>{data[98][0]}:</b>{data[98][2] ? <a href={data[98][2]} target='_blank'>{data[98][1]}</a>: data[98][1]}</li>}
                                    {data[99][0] && <li><b>{data[99][0]}:</b>{data[99][2] ? <a href={data[99][2]} target='_blank'>{data[99][1]}</a>: data[99][1]}</li>}
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    : <>Loading</>
                }
            </div>
        </>
    )
}

export default MasterBrocker;