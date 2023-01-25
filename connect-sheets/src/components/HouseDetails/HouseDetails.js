import React from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import FixedCard from './FixedCard';
import { API_KEY } from '../../constants';
import './HouseDetails.css'
import Slider from '../Slider/Slider';
import Viabilidad from './Viabilidad';
import Proyectos from './Proyectos';
import Inmueble from './Inmueble';
import Terreno from './Terreno';
import { useSelector } from 'react-redux';

function HouseDetails() {

  const [house, setHouse] = React.useState([])
  const [images, setImages] = React.useState([])
  const [option, setOption] = React.useState("viabilidad")
  const [webpage, setWebpage] = React.useState()
  const params = useParams();
  const data = useSelector((state) => state.data)[1];

  React.useEffect(() => {
    if (params.id) {
      let sheet = params.id
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s/values/${sheet}?key=${API_KEY}`)
        .then(res => {
          const data = res.data.values;
          sliderImg(data);
          data.shift()
          setHouse(data)
          fixImages(data);
        })

    }
    if (!data) {
      let sheet2 = "WEBPAGE"
      axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s/values/${sheet2}?key=${API_KEY}`)
        .then(res => {
          const data2 = res.data.values;
          setWebpage(data2)
        });
    } else {
      setWebpage(data)
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

  const fixImages = (data) => {
    let i = 35;
    let aux = data;
    while (i < 62) {
      if (aux[i][7])
        aux[i][7] = `https://drive.google.com/uc?id=${data[i][7].split('/')[5]}`
      else
        aux[i][7] = `https://drive.google.com/uc?id=1gOUMgCT37rUUhRDlsQb81IGpvbf1lj_p`
      i++;
    }
    setHouse(aux)
  }

  const Content = () => {
    switch (option) {
      case "viabilidad": return <Viabilidad props={house} />
      case "terreno": return <Terreno props={house} />
      case "inmueble": return <Inmueble props={house} />
      case "proyectos": return <Proyectos props={house} />
    }
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='padding20 col col-4-reverse' >
          <h1 className='houseTitle'>{params.id}</h1>
        </div>
        <div className='padding20 col col-4' >
          <Link to="/" className='backBtn' >Regresar</Link>
        </div>
      </div>
      <div className='row'>
        <div className='padding20 col col-4-reverse' >
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
                <li onClick={() => { setOption("viabilidad") }} className={option == "viabilidad" ? "active" : ""}><a>{webpage && webpage[4][1]}</a></li>
                <li onClick={() => { setOption("terreno") }} className={option == "terreno" ? "active" : ""}><a>{webpage && webpage[5][1]}</a></li>
                <li onClick={() => { setOption("inmueble") }} className={option == "inmueble" ? "active" : ""}><a>{webpage && webpage[6][1]}</a></li>
                <li onClick={() => { setOption("proyectos") }} className={option == "proyectos" ? "active" : ""}><a>{webpage && webpage[7][1]}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <FixedCard props={house} />
      </div>
    </div>
  )
}

export default HouseDetails