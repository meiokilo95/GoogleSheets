import React from 'react'

import './HouseDetails.css'

function Video({ props }) {
    const [urlVideo,setUrlVideo] = React.useState()
    React.useEffect(()=>{
        if(props[65]){
            setUrlVideo(`https://drive.google.com/file/d/${props[65][1].split('/')[5]}/preview`)
        }
    },[props])

    return (
        <>
            { (props.length > 0) ?
                <div className='hero-container no-height'>
                    <h1 className='primary-title'>{props[64][1]}</h1>
                    <iframe src={urlVideo} width="100%" height="600px"></iframe>
                </div>
            : <>Loading</>
            }
        </>
    )
}

export default Video;