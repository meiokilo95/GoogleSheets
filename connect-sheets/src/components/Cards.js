import React from 'react'
import axios from 'axios';
import { API_KEY } from '../constants';
import Card from './Card'
// import useGoogleSheets from 'use-google-sheets';

function Cards() {
  //api
  //https://sheets.googleapis.com/v4/spreadsheets/1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s/values/ALYSA?key=AIzaSyDgXNamDcyAjiee8_f5W4snn0gn9HoXNhU

  const [cards, setCards] = React.useState([])

  // const { data, loading, error } = useGoogleSheets({
  //   apiKey: 'AIzaSyB5nx15bNw10Y5YTlinwMElO3DQhLDbmKI',
  //   sheetId: '1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s',
  // });

  React.useEffect(() => {
    let sheet = "DISPONIBLES"
    axios.get(`https://sheets.googleapis.com/v4/spreadsheets/1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s/values/${sheet}?key=${API_KEY}`)
      .then(res => {
        const data = res.data.values;
        data.shift()
        setCards(data)
        // console.log(data)
      })
  }, [])


  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error!</div>;
  // }

  return (

    <div className='container'>
      <div className='row-cards'>
        {
          cards.map((casa, index) =>
            <Card key={index} props={casa} />)
        }
      </div>
    </div>
  )
}

export default Cards