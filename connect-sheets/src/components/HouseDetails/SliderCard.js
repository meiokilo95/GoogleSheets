import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import './HouseDetails.css'

function SliderCard({ props }) {
    const [data,setData] = React.useState()
    React.useEffect(()=>{
        if(props[0]){
            setData(props)
        }
    },[props])

    const Cards = () => {
        let row = []
        var i = 1;
        var j = 67;
        const responsive = {
            0: { items: 1 },
            568: { items: 1 },
            1024: { items: 3 },
        };
        while ( data[j][i] != undefined){
            row.push(
                <div key={i} className='content-card-conocenos'>
                    <div className='image'>{data[j][i] !==undefined ? <img src={`https://drive.google.com/uc?id=${data[j+1][i].split('/')[5]}`} alt={"Logo"} width={"100%"} /> : <></>}</div>
                    <div className='description'>
                        <h2>{data[j][i]}</h2>
                        <p>{ data[j+2][i]}</p>
                    </div>
                </div>
            )
            i++
        }
        return  <AliceCarousel responsive={responsive} infinite={true}  mouseTracking controlsStrategy="alternate" items={row} />;
    }

    return (
        <>
            { (data) ?
                <div className='hero-container conocenos' style={{ backgroundImage: (data[36][2]? `url('https://drive.google.com/uc?id=${data[36][2].split('/')[5]}')` : "linear-gradient(90deg, rgb(27 27 27) 20%, rgb(204, 204, 204) 169%)"), backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                    <h1 className='primary-title'>{data[66][1]}</h1>
                    <Cards />
                </div>
            : <>Loading</>
            }
        </>
    )
}

export default SliderCard;