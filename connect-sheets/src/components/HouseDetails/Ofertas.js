import React from 'react'

import './HouseDetails.css'
import './Ofertas.css'

function Ofertas({ props }) {
    const [data,setData] = React.useState()
    React.useEffect(()=>{
        if(props[65]){
            setData(props)
        }
    },[props])

    const DescriptionIcons = () => {
        let row = []
        var i = 1;
        while(data[86][i]){
            row.push(
                <div className="icons col col-4">
                    {data[87][i] !==undefined ? <img src={`https://drive.google.com/uc?id=${data[87][i].split('/')[5]}`} alt={"Pic"} width={"100%"} /> : <></>}
                    <h3>{data[86][i]}</h3>
                    <h1>{data[88][i]}</h1>
                    <p>{data[89][i]}</p>
                </div>
            )
            i++;
        }
        return  row
    }

    return (
        <div className='hero-container no-height ofertas'>
            { (data) ?
                <div className='content'>
                    <h1 className='primary-title text-center'>{props[79][1]}</h1>
                    <div className='row'>
                    <div className="flip-card col col-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1 className=''>{props[80][1]}</h1>
                            </div>
                            <div className="flip-card-back bg-blue">
                                <h1>{props[80][2]}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card col col-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1 className=''>{props[81][1]}</h1>
                            </div>
                            <div className="flip-card-back bg-blue-green">
                                <h1>{props[81][2]}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flip-card col col-4">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1 className=''>{props[82][1]}</h1>
                            </div>
                            <div className="flip-card-back bg-green">
                                <h1>{props[82][2]}</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='row'>
                        <p>{props[83][1]}</p>
                        <h3 className='description'>{props[84][1]}</h3>
                    </div>
                    <div className='row descriptionIcons'>
                        <DescriptionIcons />
                    </div>
                </div>
            : <></>
            }
        </div>
    )
}

export default Ofertas;