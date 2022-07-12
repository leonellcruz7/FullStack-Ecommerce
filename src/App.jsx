
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faIdCard, faStar, faQuoteRight, faCircleChevronDown, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import Products from './Pages/Products';
import UserContext from './Components/UserContext';
import { useContext } from 'react';
import { useState } from 'react';
import ProductView from './Components/ProductView';
import Cart from './Pages/Cart';
import Search from './Pages/Search';
library.add(faShoppingCart, faIdCard, faStar, faQuoteRight, faCircleChevronDown, faMinus, faPlus)



function App() {
  const [user, setUser] = useState({
    name: localStorage.getItem('name')
  })
  return (

    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/products' element={<Products />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/product/:productId' element={<ProductView />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />

        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
