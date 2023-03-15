import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavBar from './pages/NavBar';
import Home from './components/Home';
import Landing from './components/Landing';
import Detail from './components/Detail';
import Reservations from './components/Reservations';
import ReservationForm from './components/ReservationForm';
import Login from './components/Login';
import ProductForm from './components/ProductForm';
import { fetchHomes } from './redux/home/Home';
import Signup from './components/Signup';
import Products from './components/Products';
import { fetchUsers } from './redux/registration/Registration';


const App = () => {
  const [user, setUser] = useState(null);
  const [product, setProduct] = useState(null);
  const [login, setLogin] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHomes());
    dispatch(fetchUsers());
  }, [dispatch]);

  const getLoginUser = () => {
    const user = localStorage.getItem("user");
    const userId = JSON.parse(user);
    return userId?.id;
  };
  
  const userId = getLoginUser();
  useEffect(() => {
    setUser(userId);
    if (login) {
      navigate('/Home');
      setLogin(false)
    }
  }, [login, navigate]);


  return (
    <div className="App">
      <NavBar setProduct={setProduct} userId={userId} />

      <Routes>
        <Route path="/" element={<Landing />} />
        {(userId) && <>
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/:id" element={<Detail setProduct={setProduct} />} />
          <Route path='/Products' element={<Products />} />
          <Route path="/Reservations" element={<Reservations userId={userId} />} />

          <Route path="/new-product" element={<ProductForm />} />
          <Route path="/reservationForm" element={<ReservationForm product={product} user={user} setProduct={setProduct} />} /> </>}

        <Route path="/login" element={<Login setLogin={setLogin} />} />

        <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
