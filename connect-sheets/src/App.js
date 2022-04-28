import useGoogleSheets from 'use-google-sheets';

import Cards from './components/Cards';

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
   const { data, loading, error } = useGoogleSheets({
    apiKey: 'apikey',
    sheetId: '1FyBkFmdLO8BeNdmDohYRvAh_nJP1jsdsEZ_rPYm8m1s',
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error!</div>;
  }
  console.log(data) 
  
  return <div>
    <Cards/>
  </div>;
};


export default App;
