import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './pages/NavBar';
import Home from './components/Home';
import Landing from './components/Landing';
import Detail from './components/Detail';
import Reservations from './components/Reservations';
import ReservationForm from './components/ReservationForm';

import ProductForm from './components/ProductForm';
import { fetchHomes } from './redux/home/Home';
import Products from './components/Products';

function App() {
  const [user, setUser] = useState(1);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomes());
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar setProduct={setProduct} />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home/:id" element={<Detail setProduct={setProduct} />} />
        <Route path='/Products' element= {<Products />} />
        <Route path="/Reservations" element={<Reservations setProduct={setProduct} setUser={setUser} />} />

        <Route path="/new-product" element={<ProductForm  /> } />
        <Route path="/reservationForm" element={<ReservationForm product={product} user={user} setProduct={setProduct} />} />
      </Routes>

    </div>
  );
}

export default App;
