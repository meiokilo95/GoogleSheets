import Cards from './components/Cards';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Menu } from './components/Menu/Menu';
import HouseDetails from './components/HouseDetails/HouseDetails';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' exact element={<Cards />} />
        <Route path='/:id' exact element={<HouseDetails />} />
      </Routes>
      <Footer />
    </Router>
  )
};


export default App;
