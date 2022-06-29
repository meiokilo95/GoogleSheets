import React from 'react'
import axios from 'axios';
import { Link, useLocation, useParams } from 'react-router-dom';
import FixedCard from './FixedCard';
import { API_KEY } from '../../constants';
import './HouseDetails.css'
import Slider from '../Slider/Slider';
import Viabilidad from './Viabilidad';
import Proyectos from './Proyectos';
import Inmueble from './Inmueble';
import Terreno from './Terreno';

function HouseDetails() {

  const [house, setHouse] = React.useState([])
  const [images, setImages] = React.useState([])
  const [option, setOption] = React.useState("viabilidad")
  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      let sheet = params.id
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s/values/${sheet}?key=${API_KEY}`)
        .then(res => {
          const data = res.data.values;
          sliderImg(data);
          data.shift()
          setHouse(data)
        })

    }
  }, [])

  const sliderImg = (data) => {
    let i = 22;
    let aux = [];
    while (data[i][5]) {
      if (data[i][5])
        aux.push(`https://drive.google.com/uc?id=${data[i][5].split('/')[5]}`)
      else break;
      i++;
    }
    setImages(aux)
  }

  const Content = () => {
    switch (option) {
      case "viabilidad": return <Viabilidad props={house} />
      case "terreno": return <Terreno props={house} />
      case "inmueble": return <Inmueble props={house} />
      case "proyectos": return <Proyectos props={house} />
    }
  }

  // console.log(house[7][5])
  return (
    <div className='container'>
      <div className='padding20 col col-70-30' >
        <div className='card padding20' >
          <div className='content'>
            {(house.length > 0) ?
              <>
                <Slider images={images} />
                <Content />
              </>
              : <></>
            }
          </div>
          <div className='footer'>
            <ul>
              <li onClick={() => { setOption("viabilidad") }} className={option == "viabilidad" ? "active" : ""}><a>Viabilidad</a></li>
              <li onClick={() => { setOption("terreno") }} className={option == "terreno" ? "active" : ""}><a>Terreno</a></li>
              <li onClick={() => { setOption("inmueble") }} className={option == "inmueble" ? "active" : ""}><a>Inmueble</a></li>
              <li onClick={() => { setOption("proyectos") }} className={option == "proyectos" ? "active" : ""}><a>Proyectos</a></li>
            </ul>
          </div>
        </div>
      </div>
      <FixedCard props={house} />
    </div>
  )
}

export default HouseDetails