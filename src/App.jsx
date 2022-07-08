
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faIdCard, faStar, faQuoteRight, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import Products from './Pages/Products';
library.add(faShoppingCart, faIdCard, faStar, faQuoteRight, faCircleChevronDown)



function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
