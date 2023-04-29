import React from 'react'
import axios from 'axios';
import { API_KEY } from '../constants';
import Card from './Card'
import { useDispatch, useSelector } from "react-redux";
import { setDataDisponibles } from "../store/data/dataSlice";

function Cards() {
  const dispatch = useDispatch();
  let dat = useSelector((state) => state)
  const [cards, setCards] = React.useState([])
  const [data, setData] = React.useState(dat.webpage)


  React.useEffect(() => {
    let sheet = "DISPONIBLES"
    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s/values/${sheet}?key=${API_KEY}`)
      .then(res => {
        const data = res.data.values;
        data.shift()
        setCards(data)
        dispatch(setDataDisponibles(data));
      })
  }, [])

  return (

    <div className='container'>
      <div className='row-cards'>
        {
          cards.map((casa, index) =>
            <Card key={index} props={{ casa: casa, content: data }} />)
        }
      </div>
    </div>
  )
}

export default Cards