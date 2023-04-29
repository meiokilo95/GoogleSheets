import React from 'react'

import './HouseDetails.css'

function TablaDatos({ props }) {
    const [data,setData] = React.useState()
    React.useEffect(()=>{
        if(props[65]){
            setData(props)
        }
    },[props])

    const Content = () => {
        let row = []
        var i = 0;
        if(data)
        for ( let j=22; j < 41; j++ ){
            if(data[j][i+1]!="X")
                row.push(
                    <div key={j} className='col col-4'>
                        <div className='description'>
                            <h3>{data[j][i]}</h3>
                            <h1>{ data[j][i+1]} m<sup>2</sup></h1>
                        </div>
                    </div>
                )
        }
        return  row
    }

    return (
        <>
            { (props.length > 0) ?
                <div className='hero-container no-height TablaDatos'>
                    <div className='content'>
                        <h1 className='primary-title center-text'>{props[70][1]}</h1>
                        <Content />
                    </div>
                </div>
            : <>Loading</>
            }
        </>
    )
}

export default TablaDatos;