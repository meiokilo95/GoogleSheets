import React from 'react'
import AliceCarousel from 'react-alice-carousel'

import './HouseDetails.css'
import './Ofertas.css'

function Entorno({ props }) {
    const [data,setData] = React.useState()
    React.useEffect(()=>{
        if(props[65]){
            setData(props)
        }
    },[props])

    const Cards = () => {
        let row = []
        var i = 1;
        var j = 74;
        const responsive = {
            0: { items: 1 },
            568: { items: 1 },
            1024: { items: 1 },
        };
        for (j; j<78; j++){
            let x = i+1;
            let img;
            let list = []
            while ( data[j][x] != undefined){
                list.push(
                    <li>{data[j][x]}</li>
                )
                x++;
            }
            list.pop();
            img = data[j][x-1];
            if(img)
                row.push(
                    <div key={i} className='content-card-entorno'>
                        <h1 className='' style={{color: "#000"}}>{data[j][i]}</h1>
                        <div className='image col col-5'>{data[j][i] !==undefined ? <img src={`https://drive.google.com/uc?id=${img.split('/')[5]}`} alt={"Pic"} width={"100%"} /> : <></>}</div>
                        <div className='description col col-5'>
                            <ul className='list-entorno'>
                                {list}
                            </ul>
                        </div>
                    </div>
                )
        }
        return  <AliceCarousel  infinite={true}  mouseTracking controlsStrategy="alternate" items={row} />;
    }

    return (
        <>
            <div className='padding20 col Entorno text-center' >
                { (data) ?
                    <div className='content'>
                        <h1 className='primary-title'>{data[71][1]}</h1>
                        <div className='hero-container conocenos' >
                            <Cards />
                        </div>
                    </div>
                    : <>Loading</>
                }
            </div>
        </>
    )
}

export default Entorno;